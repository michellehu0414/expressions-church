const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
    // Entry points for each page
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
        filename: 'js/[name].js', // Output JavaScript files
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before each build
    },
    resolve: {
        extensions: ['.js', '.scss'], // Resolve these extensions automatically
    },
    module: {
        rules: [
            // JavaScript processing
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // SCSS and CSS processing
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')(),
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                outputStyle: 'expanded', // Expanded for easier debugging
                            },
                        },
                    },
                ],
            },
            // Image and video assets
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[ext]/[name][ext]', // Separate images and videos
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...', // Default minimizer (Terser for JS)
            new CssMinimizerPlugin(), // Minify CSS files
        ],
    },
    plugins: [
        // Extract CSS
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        // Purge unused CSS
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            safelist: {
                standard: ['keep-this-class', /^dynamic-/], // Safelist any dynamic classes
            },
        }),
        // Copy static assets
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
            ],
        }),
        // Generate HTML for each page
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
    devtool: 'source-map', // Include source maps for easier debugging in development
};
