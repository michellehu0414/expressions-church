const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

// Load environment variables
const wordpressUrl = process.env.WORDPRESS_URL;
const wordpressUsername = process.env.WORDPRESS_USERNAME;
const wordpressAppPassword = process.env.WORDPRESS_APP_PASSWORD;

if (!wordpressUrl || !wordpressUsername || !wordpressAppPassword) {
    console.error("Error: Missing required environment variables in .env file.");
    process.exit(1);
}

const inputFolder = './images/unprocessed'; // Input folder for original images
const outputFolder = './images/webp'; // Folder for optimized images
const processedFolder = './images/processed'; // Folder for processed images

// Ensure output and processed folders exist
if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);
if (!fs.existsSync(processedFolder)) fs.mkdirSync(processedFolder);

// Compress and Convert PNG to WebP
const processImages = async () => {
    try {
        const files = fs.readdirSync(inputFolder);

        for (const file of files) {
            if (path.extname(file).toLowerCase() === '.png') {
                const inputPath = path.join(inputFolder, file);
                const outputFileName = `${path.basename(file, '.png')}.webp`;
                const outputPath = path.join(outputFolder, outputFileName);

                console.log(`Processing: ${file}`);

                // Compress and convert to WebP
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Optimized and saved: ${outputFileName}`);

                // Upload to WordPress
                await uploadToWordPress(outputPath, outputFileName);

                // Move the original file to the processed folder
                moveFile(inputPath, path.join(processedFolder, file));
            }
        }
    } catch (err) {
        console.error("Error processing images:", err.message);
    }
};

// Upload image to WordPress
const uploadToWordPress = async (filePath, fileName) => {
    try {
        const fileStream = fs.createReadStream(filePath);
        const formData = new FormData();
        formData.append('file', fileStream, fileName);

        console.log(`Uploading to: ${wordpressUrl}/wp-json/wp/v2/media`);

        const response = await axios.post(`${wordpressUrl}/wp-json/wp/v2/media`, formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Basic ${Buffer.from(`${wordpressUsername}:${wordpressAppPassword}`).toString('base64')}`,
            },
        });

        console.log(`Uploaded ${fileName} to WordPress. URL: ${response.data.source_url}`);
    } catch (err) {
        console.error(`Error uploading ${fileName}:`, err.message);
        if (err.response?.data) {
            console.error("API Response:", err.response.data);
        }
    }
};

// Move file to the processed folder
const moveFile = (source, destination) => {
    try {
        fs.renameSync(source, destination);
        console.log(`Moved: ${path.basename(source)} to ${destination}`);
    } catch (err) {
        console.error(`Error moving file ${source} to ${destination}:`, err.message);
    }
};

// Run the script
processImages();
