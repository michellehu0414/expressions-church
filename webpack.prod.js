const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

// ✅ Dynamically generate entry points for all pages
const entryPoints = {
    main: "./src/js/main.js",
    "elementorWidgetStyles": "./src/scss/elementor-widgets-styles.scss",
    "globalStyles": "./src/scss/styles.scss", // ✅ Shared global styles
};

// ✅ Add every page's index.js as an entry point
const pages = ['home', 'leadership'];
pages.forEach(page => {
    entryPoints[page] = `./src/pages/${page}/index.js`;
});

module.exports = {
    mode: 'production',
    entry: entryPoints,
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
                sideEffects: true, // ✅ Prevents unused styles from being removed
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
        usedExports: false, // ✅ Prevents tree-shaking of unused imports
        sideEffects: false, // ✅ Ensures styles aren't removed
        minimizer: [
            new TerserPlugin({ parallel: true, terserOptions: { compress: { drop_console: true } } }),
            new CssMinimizerPlugin({ parallel: true }),
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
            safelist: {
                deep: [/elementor-/], // ✅ Ensures Elementor dynamic classes are kept
            },
        }),
        new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    ],
    devtool: 'source-map',
    cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
};
