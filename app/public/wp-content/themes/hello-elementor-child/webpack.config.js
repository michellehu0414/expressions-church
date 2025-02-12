// filepath: /Users/michelle/Documents/04_Clients/01_Expressions-Church/03_Local Site/expressions-church-local/app/public/wp-content/themes/hello-elementor-child/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'development' for development mode
    entry: {
        main: './src/js/main.js', // Main JavaScript entry file
        customElementorWidgetsStyles: './src/scss/custom-elementor-widgets-styles.scss', // New CSS entry file
        home: './src/js/home.js', // JavaScript file for home page
        leadership: './src/js/leadership.js', // JavaScript file for leadership page
        // Add other entries for each page
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js', // Output filename pattern
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('cssnano')({
                                        preset: 'default',
                                    }),
                                ],
                            },
                        },
                    },
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
        new MiniCssExtractPlugin({ filename: '[name].style.css' }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
    },
};