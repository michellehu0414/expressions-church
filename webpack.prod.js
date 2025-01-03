const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
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
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js', // Example filename format
        clean: true, // Cleans old files in the output directory
    },
    mode: 'production',
    devtool: false, // Disable source maps unless needed
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')()],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { outputStyle: 'compressed' },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[ext]/[name][contenthash][ext]',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...', // Default JS minimizer
            new CssMinimizerPlugin(), // Minify CSS
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            safelist: { standard: ['keep-this-class', /^dynamic-/] },
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
                { from: 'src/assets/videos', to: 'assets/videos' },
            ],
        }),
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
