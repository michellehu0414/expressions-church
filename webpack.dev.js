const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        home: './src/pages/home/index.js',
        leadership: './src/pages/leadership/index.js',
        "elementor-widgets-styles": "./src/scss/elementor-widgets-styles.scss",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].min.js',
        publicPath: "/", // Ensure this matches the production configuration
    },
    resolve: {
        alias: {
            // General Paths3
            "@src": path.resolve(__dirname, "src"),

            // SCSS Aliases
            "@scss": path.resolve(__dirname, "src/scss"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
            "@base": path.resolve(__dirname, "src/scss/base"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities"),
            "@widgets": path.resolve(__dirname, "src/scss/elementor-widgets"),
            "@fonts": path.resolve(__dirname, "src/assets/fonts"),

            // JavaScript Aliases
            "@js": path.resolve(__dirname, "src/js"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }, // ✅ Enables source maps for debugging
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true, // ✅ Enables source maps
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
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dirname, "src/scss"),
                                    path.resolve(__dirname, 'src/scss/abstracts'),
                                    path.resolve(__dirname, 'src/scss/utilities'),
                                ],
                            },
                        },
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
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }), // Non-minified CSS for development
        new webpack.HotModuleReplacementPlugin(),
        // Enable HMR
        // new ESLintPlugin({
        //     extensions: ['js'],
        //     exclude: 'node_modules',
        // }),
        ...['index.html', 'home.html'].map(page => new HtmlWebpackPlugin({
            template: `./src/${page}`,
            filename: page,
            minify: false,
        })),
    ],
    cache: {
        type: 'filesystem', // Enables filesystem caching
        buildDependencies: {
            config: [__filename], // Cache invalidation based on config file changes
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        host: '0.0.0.0',
        open: true,
        hot: true,
        watchFiles: ['src/**/*'],
        port: 5688,
        allowedHosts: 'all',
        liveReload: true,
    },
    devtool: 'eval-source-map',
};