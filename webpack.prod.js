const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // Add Bundle Analyzer
const CompressionPlugin = require('compression-webpack-plugin');

const htmlPages = [
    { template: '/index.html', chunks: ['index'], filename: 'index.html' },
    { template: '/leadership.html', chunks: ['leadership'], filename: 'leadership.html' },
    { template: '/plan-your-visit.html', chunks: ['plan-your-visit'], filename: 'plan-your-visit.html' },
    { template: '/events.html', chunks: ['events'], filename: 'events.html' },
];

module.exports = {
    mode: "production",
    cache: {
        type: 'filesystem', // Enable filesystem caching
    },
    entry: {
        index: "./src/pages/index/index.jsx",
        leadership: "./src/pages/leadership/index.jsx",
        events: "./src/pages/events/index.jsx",
        pyv: "./src/pages/plan-your-visit/index.jsx",
        main: "./src/main.jsx",
    },
    output: {
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@svg": path.resolve(__dirname, "src/assets/svg/"),
            "@scss": path.resolve(__dirname, "src/scss/"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts/"),
            "@base": path.resolve(__dirname, "src/scss/base/"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities/"),
            "@widgets": path.resolve(__dirname, "src/scss/elementorWidgets/"),
            "@js": path.resolve(__dirname, "src/js/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@data": path.resolve(__dirname, "src/data/"),
        },
        extensions: [".js", ".jsx", ".json", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]",
                },
            },
            {
                test: /\.scss$/,
                oneOf: [
                    {
                        test: /\.module\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: {
                                    modules: {
                                        localIdentName:
                                            process.env.NODE_ENV === "production"
                                                ? "[hash:base64:5]"
                                                : "[path][name]__[local]",
                                    },
                                },
                            },
                            "postcss-loader",
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require("sass"), // Use Dart Sass
                                    sassOptions: {
                                        includePaths: [path.resolve(__dirname, "src/scss")],
                                        outputStyle: "expanded",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        use: [
                            MiniCssExtractPlugin.loader,
                            "css-loader",
                            "postcss-loader",
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require("sass"), // Use Dart Sass
                                    sassOptions: {
                                        includePaths: [path.resolve(__dirname, "src/scss")],
                                        outputStyle: "expanded",
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'thread-loader', // Add thread-loader for parallel processing
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true, // Enable caching for babel-loader
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { name: 'removeTitle', active: false },
                                { name: 'removeViewBox', active: false },
                                { name: 'prefixIds', active: true },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ["default", { discardComments: { removeAll: true } }],
                },
            }),
        ],
        splitChunks: {
            chunks: "all",
            maxInitialRequests: 10, // Limit the number of chunks
            maxAsyncRequests: 10, // Limit the number of chunks
            minSize: 20000, // Minimum size for a chunk to be generated
            maxSize: 70000, // Maximum size for a chunk to be generated
        },
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean dist/ directory before each build
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css",
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page.template}`,
            filename: page.filename,
            chunks: page.chunks,
        })),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets/images',
                    to: 'assets/images'
                },
                {
                    from: 'src/assets/svg',
                    to: 'assets/svg'
                },
            ]
        }),
        new BundleAnalyzerPlugin({ // Add Bundle Analyzer Plugin
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new CompressionPlugin({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            compressionOptions: { level: 11 },
            threshold: 10240, // Only compress files larger than 10KB
            minRatio: 0.8,
        })

    ],
    devtool: false, // Correctly disable source maps
    stats: {
        errorDetails: true,
    },
};