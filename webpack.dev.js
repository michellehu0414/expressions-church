const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    devtool: 'cheap-module-source-map', // Fast source maps for debugging
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
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { outputStyle: 'expanded' },
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
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
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
        watchFiles: ['src/**/*'],
        port: 5888,
    },
};
