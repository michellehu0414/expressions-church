// webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

// Create an object for our entry points
const entries = {};

// Add a global entry point (e.g. global JS for shared code)
entries['global'] = path.resolve(__dirname, 'src/js/global.js');

// Dynamically add each page entry from src/pages/<page>/<page>.js
const pageFiles = glob.sync('./src/pages/*/*.js');
pageFiles.forEach(file => {
    // For a file like "./src/pages/home/home.js", use "home" as the key
    const pageName = path.basename(path.dirname(file));
    entries[pageName] = path.resolve(__dirname, file);
});

module.exports = {
    entry: entries,
    output: {
        // Output all built assets to the "assets" folder
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/[name].js',
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            // Process SCSS files
            {
                test: /\.scss$/,
                use: [
                    "style-loader",    // Injects CSS into the DOM via <style> tags
                    "css-loader",      // Resolves CSS imports and url() statements
                    "postcss-loader",  // Processes CSS (e.g. autoprefixer) via postcss.config.js
                    "sass-loader",     // Compiles SCSS to CSS
                ],
            },
            // Process HTML files as raw strings (for our component templates)
            {
                test: /\.html$/,
                use: "raw-loader",
            },
            // Process JS files with Babel (for ES6+ transpiling)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            // Additional loaders for images, fonts, etc. can be added here
        ],
    },
    plugins: [
        // Remove or comment out the pattern below if you don't want to copy
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: "src/local-preview", to: "public" },
        //     ],
        // }),
        ...glob.sync("./src/local-preview/*.html").map(file => new HtmlWebpackPlugin({
            filename: path.join("public", path.basename(file)),
            template: file,
            inject: "body",
        })),
    ],
    devServer: {
        static: [
            path.resolve(__dirname, "assets"),       // for built assets (JS/CSS)
            path.resolve(__dirname, "src/local-preview")  // serve your local preview files directly
        ],
        hot: true,
        open: true,
        watchFiles: ["src/**/*", "src/local-preview/**/*"],
        port: 5888,
        host: "0.0.0.0",
        allowedHosts: "all",
    },

    resolve: {
        extensions: [".js", ".scss"],
    },
};
