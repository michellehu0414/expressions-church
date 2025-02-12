const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        customElementorWidgetsStyles: './src/scss/custom-elementor-widgets-styles.scss',
        home: './src/js/home.js',
        leadership: './src/js/leadership.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'css/[name].min.css' }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
    },
};