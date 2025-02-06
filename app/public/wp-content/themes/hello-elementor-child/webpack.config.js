const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer'); // Import autoprefixer
const cssnano = require('cssnano'); // Import cssnano for CSS minification

module.exports = {
    mode: 'development', // Change to 'production' for live site
    entry: './src/js/main.js', // Main JavaScript entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Bundled JS output
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS to separate file
                    'css-loader', // Loads CSS
                    {
                        loader: 'postcss-loader', // Autoprefixes CSS
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(), // Add vendor prefixes
                                    cssnano() // Minify CSS
                                ]
                            }
                        }
                    },
                    'sass-loader' // Compiles SCSS to CSS
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // Cleans output directory on build
        new MiniCssExtractPlugin({ filename: 'style.css' }), // Outputs compiled CSS
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000
    }
};
