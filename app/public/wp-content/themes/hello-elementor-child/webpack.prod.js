const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/scss/main.scss',
        home: './src/scss/home.scss',
        leadership: './src/scss/leadership.scss',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            // ✅ General Paths
            "@src": path.resolve(__dirname, "src"),

            // ✅ SCSS Aliases
            "@scss": path.resolve(__dirname, "src/scss"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
            "@base": path.resolve(__dirname, "src/scss/base"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities"),
            "@widgets": path.resolve(__dirname, "src/scss/elementor-widgets"),

            // ✅ JavaScript Aliases
            "@js": path.resolve(__dirname, "src/js"),
            "@components": path.resolve(__dirname, "src/components"),

            //  Usage in Javascript: import "@scss/main"; or import "@abstracts/variables";
            //  Usage in SCSS: @use "@abstracts/variables"; or @forward "@abstracts/variables";
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
                                    path.resolve(__dirname, "src/scss")
                                    //  Usage in SCSS ONLY: @use "abstracts/variables"; or @use "variables"; (Same functionality)
                                ],
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
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'css/[name].min.css' }), // Output minified CSS files to css folder
    ],
};