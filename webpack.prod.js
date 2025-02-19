const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin'); // ✅ Correct import

const glob = require('glob');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
    mode: 'production',
    entry: {
        main: "./src/js/main.js",
        home: "./src/pages/home/index.js",
        leadership: "./src/pages/leadership/index.js",
        "elementorWidgetStyles": "./src/scss/elementor-widgets-styles.scss",
        "globalStyles": "./src/scss/styles.scss", // ✅ Shared global styles
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@js": path.resolve(__dirname, "src/js"),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@components": path.resolve(__dirname, "src/components"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities"),
            "@fonts": path.resolve(__dirname, "src/assets/fonts"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: { filename: 'assets/fonts/[name][ext]' }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1, modules: false },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass'),
                            sassOptions: { outputStyle: 'compressed' },
                        }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'], cacheDirectory: true },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                type: 'asset/resource',
                generator: { filename: 'images/[name][ext]' },
                use: [{ loader: 'image-webpack-loader', options: { mozjpeg: { progressive: true, quality: 65 } } }],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ parallel: true, terserOptions: { compress: { drop_console: true } } }),
            new CssMinimizerPlugin({ parallel: true }),
            new HtmlMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                globalCoreStyles: {
                    name: 'globalCoreStyles',
                    test: /[\\/]scss[\\/](abstracts|base|utilities)[\\/]/,
                    chunks: 'all',
                    enforce: true,
                },
                elementorStyles: {
                    name: 'elementorStyles',
                    test: /[\\/]scss[\\/]elementor-widgets[\\/]/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'css/[name].min.css' }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*.{html,js,php}`, { nodir: true }),
            // safelist: {
            //     standard: ['elementor-section', 'elementor-column', 'elementor-widget', 'text-center', 'mb-8', 'mb-16', 'mt-4', 'px-6'],
            //     deep: [/^elementor-/],
            // },
        }),
        ...['index.html', 'home.html'].map(page => new HtmlWebpackPlugin({
            template: `./src/${page}`,
            filename: page,
            minify: { removeComments: true, collapseWhitespace: true },
        })),
        new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),
        new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    ],
    devtool: 'source-map',
    cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
};
