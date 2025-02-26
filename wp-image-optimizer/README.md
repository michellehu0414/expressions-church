# WP Image Optimizer Uploader

## Description
WP Image Optimizer Uploader is a script designed to optimize images and upload them to your WordPress site seamlessly to streamline your workflow and improve site performance. This script automatically compresses, resizes, and converts images to WEBP format.

## Features
- Automatic image compression
- Image resizing
- Supports various image formats (JPEG, PNG, GIF)
- Bulk optimization
- Converts to WEBP
- Uploads to your WordPress website.

## Installation
1. Clone the repository.
2. Create a `.env` file in the root directory with the following variables:
    ```
    WORDPRESS_URL=your_wordpress_url
    WORDPRESS_USER=your_wordpress_username
    WORDPRESS_APP_PASSWORD=your_wordpress_app_password
    ```
3. Ensure the following folders exist in the root directory:
    - `queue` (Folder with original images)
    - `webp` (Folder for WebP images)
    - `compressed` (Folder for processed images)
    - `originals` (Folder for original images)

## Usage
1. Place the images you want to optimize in the `queue` folder.
2. Run the script using Node.js or npm run:
    ```
    node wp-image-optimizer-uploader.js
    ```
3. The script will process the images, optimize them, convert them to WEBP format, and upload them to your WordPress site.

## Contributing
We welcome contributions to improve WP Image Optimizer. Please fork the repository and submit pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For support or inquiries, please contact us at mhu.contact@gmail.com.
