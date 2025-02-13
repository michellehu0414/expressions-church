const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/scss/main.scss',
        home: './src/scss/home.scss',
        leadership: './src/scss/leadership.scss',
    },
    output: {
        filename: 'js/[name].[contenthash].bundle.js', // Add content hash for cache busting
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            "@scss": path.resolve(__dirname, "src/scss"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
            "@base": path.resolve(__dirname, "src/scss/base"),
            "@components": path.resolve(__dirname, "src/scss/components"),
            "@pages": path.resolve(__dirname, "src/scss/pages"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities"),
            "@widgets": path.resolve(__dirname, "src/scss/elementor-widgets")
        }
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
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dirname, "src/scss"),
                                    path.resolve(__dirname, "src/scss/abstracts"),
                                    path.resolve(__dirname, "src/scss/base"),
                                    path.resolve(__dirname, "src/scss/components"),
                                    path.resolve(__dirname, "src/scss/pages"),
                                    path.resolve(__dirname, "src/scss/utilities"),
                                    path.resolve(__dirname, "src/scss/elementor-widgets"),
                                ]
                            }
                        }
                    },
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console logs in production
                },
            },
        })],
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].min.css' }), // Add content hash for cache busting
    ],
    devtool: 'source-map', // Enable source maps in production
};