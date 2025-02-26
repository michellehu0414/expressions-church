const fs = require('fs');
const path = require('path');
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

const inputFolder = 'wp-image-optimizer/upload-only-queue';
const uploadedFolder = 'wp-image-optimizer/uploaded';

// Ensure necessary folders exist
[inputFolder, uploadedFolder].forEach(folder => {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

const supportedFormats = ['.png', '.jpg', '.jpeg', '.webp', '.mp4'];

// ** Move File **
const moveFile = async (source, destination) => {
    try {
        await fs.promises.rename(source, destination);
        console.log(`📦 Moved: ${path.basename(source)} to ${destination}`);
    } catch (err) {
        console.error(`❌ Error moving file ${source} to ${destination}:`, err.message);
    }
};

// ** Upload Image to WordPress **
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

// ** Process Images **
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
                const uploadedPath = path.join(uploadedFolder, file);

                console.log(`🔄 Processing: ${file}`);

                await uploadToWordPress(inputPath, file);
                await moveFile(inputPath, uploadedPath);
                console.log(`📦 Moved uploaded image to: ${uploadedPath}`);
            } catch (err) {
                console.error(`❌ Error processing ${file}:`, err.message);
            }
        }));

        console.log("🎉 Image upload complete!");
    } catch (err) {
        console.error("❌ General error:", err.message);
    }
};

// Run the script
processImages();
