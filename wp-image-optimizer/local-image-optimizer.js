const sharp = require('sharp');
const fs = require('fs');

const MAX_FILE_SIZE = 500 * 1024; // Example max file size in bytes
const MIN_QUALITY = 70;
const INITIAL_QUALITY = 95;
const QUALITY_DECREMENT = 2;
const INITIAL_COMPRESSION_LEVEL = 6;
const WIDTH = 800;

const processImage = async (inputPath, outputPath, format, options) => {
    let quality = INITIAL_QUALITY;
    let fileSize;

    do {
        await sharp(inputPath)
            .rotate()
            .resize({ width: WIDTH })
            .toFormat(format, options(quality))
            .toFile(outputPath);

        fileSize = (await fs.promises.stat(outputPath)).size;

        if (fileSize > MAX_FILE_SIZE) {
            quality -= QUALITY_DECREMENT;
        }
    } while (fileSize > MAX_FILE_SIZE && quality > MIN_QUALITY);

    console.log(`✅ ${format.toUpperCase()} saved (${(fileSize / 1024).toFixed(2)} KB): ${outputPath}`);
};

const compressImage = async (inputPath, outputPath) => {
    try {
        await processImage(inputPath, outputPath, 'jpeg', (quality) => ({ quality, mozjpeg: true }));
    } catch (error) {
        console.error(`❌ Error compressing image: ${error.message}`);
    }
};

const convertToWebP = async (inputPath, outputPath) => {
    try {
        await processImage(inputPath, outputPath, 'webp', (quality) => ({ quality }));
    } catch (error) {
        console.error(`❌ Error converting to WebP: ${error.message}`);
    }
};
