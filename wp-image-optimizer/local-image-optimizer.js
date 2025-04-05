const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const config = require("./config");

/* 🔧 Ensure necessary folders exist */
const ensureFoldersExist = (folders) => {
    folders.forEach((folder) => fs.existsSync(folder) || fs.mkdirSync(folder, { recursive: true }));
};

/* 🔧 Process image with specified settings */
const processImageWithSettings = async (inputPath, outputPath, settings) => {
    try {
        await sharp(inputPath)
            .rotate()
            .toFormat(settings.format, settings.options)
            .toFile(outputPath);
        return (await fs.promises.stat(outputPath)).size;
    } catch (err) {
        throw new Error(`Failed to process image: ${err.message}`);
    }
};

/* 🔧 Compress images (JPEG/PNG) */
const compressImage = async (inputPath, outputPath, ext) => {
    let quality = config.START_QUALITY;
    let fileSize;

    try {
        const processImage = async () => {
            const settings = ext === ".png"
                ? { format: "png", options: { compressionLevel: config.PNG_COMPRESSION_LEVEL } }
                : { format: "jpeg", options: { quality, mozjpeg: config.USE_MOZJPEG } };

            return await processImageWithSettings(inputPath, outputPath, settings);
        };

        fileSize = await processImage();

        while (fileSize > config.MAX_FILE_SIZE && quality > config.MIN_QUALITY && ext !== ".png") {
            quality -= config.QUALITY_STEP;
            console.log(`⚠️ Reducing JPEG quality to: ${quality}`);
            fileSize = await processImage();
        }

        console.log(`✅ Compressed: ${outputPath} (${(fileSize / 1024).toFixed(2)}KB)`);
        return true;
    } catch (err) {
        console.error(`❌ Compression failed: ${inputPath}:`, err.message);
        return false;
    }
};

/* 🔧 Convert images to WebP */
const convertToWebP = async (inputPath, outputPath, ext) => {
    let quality = config.START_QUALITY;
    let fileSize;

    try {
        const processWebP = async () => {
            const settings = {
                format: "webp",
                options: { quality, lossless: config.WEBP_LOSSLESS_FOR_PNG && ext === ".png" }
            };

            return await processImageWithSettings(inputPath, outputPath, settings);
        };

        fileSize = await processWebP();

        while (fileSize > config.MAX_FILE_SIZE && quality > config.MIN_QUALITY && ext !== ".png") {
            quality -= config.QUALITY_STEP;
            console.log(`⚠️ Reducing WebP quality to: ${quality}`);
            fileSize = await processWebP();
        }

        console.log(`✅ WebP saved: ${outputPath} (${(fileSize / 1024).toFixed(2)}KB)`);
        return true;
    } catch (err) {
        console.error(`❌ WebP conversion failed: ${inputPath}:`, err.message);
        return false;
    }
};

/* 🔧 Process each image */
const processImage = async (file) => {
    try {
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext);
        const inputPath = path.join(config.INPUT_FOLDER, file);
        const compressedPath = path.join(config.COMPRESSED_FOLDER, `${baseName}${ext}`);
        const webpPath = path.join(config.WEBP_FOLDER, `${baseName}.webp`);

        console.log(`🔄 Processing: ${file}`);

        await compressImage(inputPath, compressedPath, ext);
        await convertToWebP(compressedPath, webpPath, ext);

        console.log(`✅ Completed processing: ${file}`);
    } catch (err) {
        console.error(`❌ Error processing ${file}:`, err.message);
    }
};

/* 🔧 Process all images */
const processImages = async () => {
    ensureFoldersExist([config.INPUT_FOLDER, config.WEBP_FOLDER, config.COMPRESSED_FOLDER, config.ORIGINALS_FOLDER]);

    try {
        const allFiles = fs.readdirSync(config.INPUT_FOLDER);
        const files = allFiles.filter((file) => config.SUPPORTED_FORMATS.includes(path.extname(file).toLowerCase()));

        if (files.length === 0) {
            console.log("📂 No valid images found.");
            return;
        }

        console.log(`📂 Processing ${files.length} images...`);

        await Promise.all(files.map(processImage));

        console.log("🎉 Image processing complete!");
    } catch (err) {
        console.error("❌ General error:", err.message);
    }
};

processImages();
