const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { DefinePlugin } = require('webpack');
const glob = require('glob');

const PATHS = {
    src: path.join(__dirname, 'src')
};

const htmlPages = [
    { template: 'index.html', chunks: ['index'] },
    // Add other HTML pages here
];

module.exports = {
    mode: 'production',
    entry: {
        main: "./src/js/main.js",
        home: "./src/pages/home/index.js",
        leadership: "./src/pages/leadership/index.js",
        "elementorWidgetStyles": "./src/scss/elementor-widgets-styles.scss",
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    resolve: {
        alias: {
            // General Paths
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
        }
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                outputStyle: 'compressed',
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
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Remove console logs in production
                    },
                },
            }),
            new CssMinimizerPlugin(), // Minify CSS
            new HtmlMinimizerPlugin(), // Minify HTML
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean the output directory before each build
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            // chunkFilename: '[id].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            safelist: {
                standard: ['keep-this-class', /^dynamic-/]
            },
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page.template}`,
            filename: page.template,
            chunks: page.chunks
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // Uncomment the following line if you want to analyze the bundle size
        // new BundleAnalyzerPlugin(),
    ],
    devtool: 'source-map', // Enable source maps in production
    cache: {
        type: 'filesystem', // Enable filesystem caching
        buildDependencies: {
            config: [__filename], // Cache invalidation based on config file changes
        },
    },
};