const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const wordpressUrl = process.env.WORDPRESS_URL;
const wordpressUsername = process.env.WORDPRESS_USER;
const wordpressAppPassword = process.env.WORDPRESS_APP_PASSWORD;

if (!wordpressUrl || !wordpressUsername || !wordpressAppPassword) {
    console.error("❌ Error: Missing required environment variables in .env file.");
    process.exit(1);
}

const inputFolder = './wp-image-optimizer/input';
const webpFolder = './wp-image-optimizer/output/webp';
const compressedFolder = './wp-image-optimizer/output/compressed';
const originalsFolder = './wp-image-optimizer/output/originals';

const MAX_FILE_SIZE = 1000 * 1024; // 1000KB
const MIN_JPEG_QUALITY = 25;
const MIN_WEBP_QUALITY = 25;

// Ensure necessary folders exist
[inputFolder, webpFolder, compressedFolder, originalsFolder].forEach(folder => {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

const supportedFormats = ['.png', '.jpg', '.jpeg', '.webp'];

// ** Move File **
const moveFile = async (source, destination) => {
    try {
        await fs.promises.rename(source, destination);
        console.log(`📦 Moved: ${path.basename(source)} to ${destination}`);
    } catch (err) {
        console.error(`❌ Error moving file ${source} to ${destination}:`, err.message);
    }
};

// ** Compress PNG and JPEG (Preserving PNG Transparency) **
const compressImage = async (inputPath, outputPath, ext) => {
    let quality = 95;
    let fileSize;

    try {
        if (ext === '.png') {
            // Preserve transparency for PNGs
            await sharp(inputPath)
                .rotate()
                .resize({ width: 1000 })
                .png({ compressionLevel: 6, adaptiveFiltering: true })
                .toFile(outputPath);
        } else {
            // Standard JPEG compression
            do {
                await sharp(inputPath)
                    .rotate()
                    .resize({ width: 1000 })
                    .jpeg({ quality, mozjpeg: true })
                    .toFile(outputPath);

                fileSize = (await fs.promises.stat(outputPath)).size;

                if (fileSize > MAX_FILE_SIZE) {
                    quality -= 2;
                    console.log(`⚠️ Reducing JPEG quality to: ${quality}`);
                }
            } while (fileSize > MAX_FILE_SIZE && quality > MIN_JPEG_QUALITY);
        }

        console.log(`✅ Compressed image saved: ${outputPath}`);
    } catch (err) {
        console.error(`❌ Compression failed for ${inputPath}:`, err.message);
    }
};

// ** Convert Image to WebP (Preserving PNG Transparency) **
const convertToWebP = async (inputPath, outputPath, ext) => {
    let quality = 95;
    let fileSize;

    try {
        do {
            await sharp(inputPath)
                .webp({ quality, lossless: ext === '.png' }) // Lossless WebP for PNGs
                .toFile(outputPath);

            fileSize = (await fs.promises.stat(outputPath)).size;

            if (fileSize > MAX_FILE_SIZE) {
                quality -= 2;
                console.log(`⚠️ Reducing WebP quality to: ${quality}`);
            }
        } while (fileSize > MAX_FILE_SIZE && quality > MIN_WEBP_QUALITY);

        console.log(`✅ WebP saved: ${outputPath}`);
    } catch (err) {
        console.error(`❌ WebP conversion failed for ${inputPath}:`, err.message);
    }
};

// ** Process Images (Fixing Transparency Issues) **
const processImages = async () => {
    try {
        console.log(`📂 Checking contents of '${inputFolder}'`);
        const allFiles = fs.readdirSync(inputFolder);
        console.log(`📂 Found files: ${allFiles.join(', ')}`);

        const files = allFiles.filter(file =>
            supportedFormats.includes(path.extname(file).toLowerCase())
        );

        if (files.length === 0) {
            console.log("📂 No valid images found.");
            return;
        }

        console.log(`📂 Processing: ${files.join(', ')}`);

        await Promise.all(files.map(async (file) => {
            try {
                const ext = path.extname(file).toLowerCase();
                const baseName = path.basename(file, ext);
                const inputPath = path.join(inputFolder, file);
                const compressedPath = path.join(compressedFolder, `${baseName}${ext}`);
                const webpPath = path.join(webpFolder, `${baseName}.webp`);
                const originalPath = path.join(originalsFolder, file);

                console.log(`🔄 Processing: ${file}`);

                // Preserve PNG transparency instead of converting to JPEG
                await compressImage(inputPath, compressedPath, ext);
                await convertToWebP(compressedPath, webpPath, ext);
                await uploadToWordPress(webpPath, `${baseName}.webp`);
                await moveFile(inputPath, originalPath);
                console.log(`📦 Moved original image to: ${originalPath}`);
            } catch (err) {
                console.error(`❌ Error processing ${file}:`, err.message);
            }
        }));

        console.log("🎉 Image processing complete!");
    } catch (err) {
        console.error("❌ General error:", err.message);
    }
};

const uploadToWordPress = async (filePath, fileName) => {
    try {
        const fileStream = fs.createReadStream(filePath);
        const formData = new FormData();
        formData.append('file', fileStream, fileName);

        console.log(`📤 Uploading ${fileName} to: ${wordpressUrl}/wp-json/wp/v2/media`);

        const response = await axios.post(`${wordpressUrl}/wp-json/wp/v2/media`, formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Basic ${Buffer.from(`${wordpressUsername}:${wordpressAppPassword}`).toString('base64')}`,
            },
        });

        console.log(`✅ Uploaded ${fileName} to WordPress. URL: ${response.data.source_url}`);
    } catch (err) {
        console.error(`❌ Error uploading ${fileName}:`, err.message);
        if (err.response?.data) {
            console.error("🛑 API Response:", err.response.data);
        }
    }
};

// Run the script
processImages();
