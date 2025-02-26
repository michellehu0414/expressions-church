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

const inputFolder = 'queue'; // Folder with original images
const webpFolder = 'webp'; // Folder for WebP images
const compressedFolder = 'compressed'; // Folder for processed images
const originalsFolder = 'originals'; // Folder for original images

const MAX_FILE_SIZE = 800 * 1024; // 800KB

// Ensure necessary folders exist
[webpFolder, compressedFolder, originalsFolder].forEach(folder => {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

const supportedFormats = ['.png', '.jpg', '.jpeg', '.webp'];

// ** Optimize File Moving (Async) **
const moveFile = async (source, destination) => {
    try {
        await fs.promises.rename(source, destination);
        console.log(`📦 Moved: ${path.basename(source)} to ${destination}`);
    } catch (err) {
        console.error(`❌ Error moving file ${source} to ${destination}:`, err.message);
    }
};

// ** Generic Compression Function (PNG/JPG) **
const compressImage = async (inputPath, outputPath) => {
    let quality = 90;
    let compressionLevel = 6;
    let fileSize;

    do {
        await sharp(inputPath)
            .rotate()
            .resize({ width: 800 })
            .toFormat('jpeg', { quality, mozjpeg: true }) // Use mozjpeg for best compression
            .toFile(outputPath);

        fileSize = (await fs.promises.stat(outputPath)).size;

        if (fileSize > MAX_FILE_SIZE) {
            quality -= 5;
            compressionLevel += 1;
        }
    } while (fileSize > MAX_FILE_SIZE && quality > 50);

    console.log(`✅ Compressed Image saved (${(fileSize / 1024).toFixed(2)} KB): ${outputPath}`);
};

// ** Convert to WebP **
const convertToWebP = async (inputPath, outputPath) => {
    let quality = 80;
    let fileSize;

    do {
        await sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath);

        fileSize = (await fs.promises.stat(outputPath)).size;

        if (fileSize > MAX_FILE_SIZE) {
            quality -= 5;
        }
    } while (fileSize > MAX_FILE_SIZE && quality > 50);

    console.log(`✅ WebP saved (${(fileSize / 1024).toFixed(2)} KB): ${outputPath}`);
};

// ** Upload Image to WordPress (Encourage OAuth or API Key instead of Basic Auth) **
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

// ** Process Images in Parallel **
const processImages = async () => {
    try {
        const files = fs.readdirSync(inputFolder).filter(file =>
            supportedFormats.includes(path.extname(file).toLowerCase())
        );

        if (files.length === 0) {
            console.log("📂 No images to process.");
            return;
        }

        await Promise.all(files.map(async (file) => {
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);
            const inputPath = path.join(inputFolder, file);
            const compressedPath = path.join(compressedFolder, `${baseName}.jpg`);
            const webpPath = path.join(webpFolder, `${baseName}.webp`);
            const originalPath = path.join(originalsFolder, file);

            console.log(`🔄 Processing: ${file}`);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                await compressImage(inputPath, compressedPath);
                await convertToWebP(compressedPath, webpPath);
            } else if (ext === '.webp') {
                // Skip compression for WebP, just move it to output folder
                await moveFile(inputPath, webpPath);
            }

            await uploadToWordPress(webpPath, `${baseName}.webp`);
            await moveFile(inputPath, originalPath);
            console.log(`📦 Moved original image to: ${originalPath}`);
        }));

        console.log("🎉 Image processing complete!");
    } catch (err) {
        console.error("❌ Error processing images:", err.message);
    }
};

// Run the script
processImages();