const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require("fs");

const pagesDir = "./src/pages";
const pages = fs.readdirSync(pagesDir);

// 🔹 Dynamically generate HTML pages
const pageFiles = pages.flatMap(page => {
    const blocks = fs.readdirSync(`${pagesDir}/${page}`).filter(file => file.endsWith(".html"));
    return blocks.map(block => ({
        filename: `pages/${page}/${block}`,
        template: `${pagesDir}/${page}/${block}`
    }));
});

module.exports = {
    target: 'web', // Explicitly target browsers
    entry: {
        index: './src/js/index.js',
        getInvolved: './src/js/get-involved.js',
        kids: './src/js/kids.js',
        visit: './src/js/visit.js',
        give: './src/js/give.js',
        about: './src/js/about.js',
        leadership: './src/js/leadership.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'production', // 🚀 Production mode for optimized builds
    devtool: false, // Disable source maps for smaller production build
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '@scss': path.resolve(__dirname, 'src/scss'),
            '@js': path.resolve(__dirname, 'src/js'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Speeds up rebuilds
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader', // Injects styles dynamically
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { outputStyle: 'compressed' }, // 🚀 Minified for production
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[ext]/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        // 🔹 Copy all pages dynamically
        ...pageFiles.map(({ filename, template }) => new HtmlWebpackPlugin({
            filename,
            template,
            inject: false
        })),

        // 🔹 Copy images & assets
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
                { from: "src/pages", to: "dist/pages" } // ✅ Copy all HTML blocks to dist
            ],
        }),

        // 🔹 Define static HTML pages (avoiding duplication)
        ...[
            { template: './src/index.html', chunks: ['index'], filename: 'index.html' },
            { template: './src/get-involved.html', chunks: ['getInvolved'], filename: 'get-involved.html' },
            { template: './src/kids.html', chunks: ['kids'], filename: 'kids.html' },
            { template: './src/visit.html', chunks: ['visit'], filename: 'visit.html' },
            { template: './src/give.html', chunks: ['give'], filename: 'give.html' },
            { template: './src/about.html', chunks: ['about'], filename: 'about.html' },
            { template: './src/leadership.html', chunks: ['leadership'], filename: 'leadership.html' },
        ].map(page => new HtmlWebpackPlugin(page)),
    ],
};
