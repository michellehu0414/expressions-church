const path = require("path");

module.exports = {
    INPUT_FOLDER: path.join(__dirname, "local/input"),
    ORIGINALS_FOLDER: path.join(__dirname, "local/originals"),
    COMPRESSED_FOLDER: path.join(__dirname, "local/compressed"),
    WEBP_FOLDER: path.join(__dirname, "local/webp"),
    MAX_FILE_SIZE: 244 * 1024, // 300KB target
    MIN_QUALITY: 0, // Minimum allowed quality before stopping
    START_QUALITY: 72, // Lowered initial quality for stronger compression
    QUALITY_STEP: 2, // Aggressively reduce quality to reach the target
    PNG_COMPRESSION_LEVEL: 2, // Strongest PNG compression
    USE_MOZJPEG: true, // Use MozJPEG for better compression
    JPEG_PROGRESSIVE: true, // Progressive JPEG for better compression
    WEBP_LOSSLESS_FOR_PNG: false, // Convert PNGs to WebP with lossy compression
    SUPPORTED_FORMATS: [".png", ".jpg", ".jpeg", ".webp"]
};
