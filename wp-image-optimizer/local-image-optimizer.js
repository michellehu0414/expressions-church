const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputFolder = './wp-image-optimizer/local/input';
const originalsFolder = './wp-image-optimizer/local/originals';
const compressedFolder = './wp-image-optimizer/local/compressed';
const webpFolder = './wp-image-optimizer/local/webp';

const MAX_FILE_SIZE = 250 * 1024; // 700KB instead of 600KB to allow slightly larger images
const MIN_JPEG_QUALITY = 50; // Increased from 50 to retain quality
const MIN_WEBP_QUALITY = 50; // Increased from 50 to retain quality
const START_JPEG_QUALITY = 50; // Reduced compression
const START_WEBP_QUALITY = 50; // Reduced compression

// Ensure necessary folders exist
[inputFolder, webpFolder, compressedFolder, originalsFolder].forEach(folder => {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

const supportedFormats = ['.png', '.jpg', '.jpeg', '.webp'];

const moveFile = async (source, destination) => {
    try {
        await fs.promises.rename(source, destination);
        console.log(`📦 Moved: ${path.basename(source)} to ${destination}`);
    } catch (err) {
        console.error(`❌ Error moving file ${source} to ${destination}:`, err.message);
    }
};

const compressImage = async (inputPath, outputPath, ext) => {
    let quality = START_JPEG_QUALITY;
    let fileSize;

    try {
        if (ext === '.png') {
            await sharp(inputPath)
                .rotate()
                .resize({ width: 200 }) // Slightly increased size limit
                .png({ compressionLevel: 4, adaptiveFiltering: true }) // Reduced compression
                .toFile(outputPath);

            fileSize = (await fs.promises.stat(outputPath)).size;
        } else {
            do {
                await sharp(inputPath)
                    .rotate()
                    .resize({ width: 200 }) // Slightly increased size limit
                    .jpeg({ quality, mozjpeg: true })
                    .toFile(outputPath);

                fileSize = (await fs.promises.stat(outputPath)).size;

                if (fileSize > MAX_FILE_SIZE) {
                    quality -= 1; // Reduce compression slowly
                    console.log(`⚠️ Reducing JPEG quality to: ${quality}`);
                }
            } while (fileSize > MAX_FILE_SIZE && quality > MIN_JPEG_QUALITY);
        }

        if (fileSize > MAX_FILE_SIZE) {
            console.warn(`⚠️ Compression reduced but still above limit: ${fileSize / 1024}KB. Proceeding.`);
        }

        console.log(`✅ Compressed image saved: ${outputPath} (${fileSize / 1024}KB)`);
        return true;
    } catch (err) {
        console.error(`❌ Compression failed for ${inputPath}:`, err.message);
        throw err;
    }
};

const convertToWebP = async (inputPath, outputPath, ext) => {
    let quality = START_WEBP_QUALITY;
    let fileSize;

    try {
        do {
            await sharp(inputPath)
                .webp({ quality, lossless: ext === '.png' })
                .toFile(outputPath);

            fileSize = (await fs.promises.stat(outputPath)).size;

            if (fileSize > MAX_FILE_SIZE) {
                quality -= 1; // Reduce compression slowly
                console.log(`⚠️ Reducing WebP quality to: ${quality}`);
            }
        } while (fileSize > MAX_FILE_SIZE && quality > MIN_WEBP_QUALITY);

        if (fileSize > MAX_FILE_SIZE) {
            console.warn(`⚠️ WebP conversion resulted in a larger file (${fileSize / 1024}KB). Proceeding.`);
        }

        console.log(`✅ WebP saved: ${outputPath} (${fileSize / 1024}KB)`);
        return true;
    } catch (err) {
        console.error(`❌ WebP conversion failed for ${inputPath}:`, err.message);
        throw err;
    }
};

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

                // Attempt to compress image.
                await compressImage(inputPath, compressedPath, ext);

                // If compression succeeds, proceed with conversion.
                await convertToWebP(compressedPath, webpPath, ext);

                // Move original file only if previous steps succeeded.
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

processImages();