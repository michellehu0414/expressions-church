const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const htmlPages = [
    { template: '/index.html', chunks: ['index'], filename: 'index.html' },
    { template: '/leadership.html', chunks: ['leadership'], filename: 'leadership.html' },
];

module.exports = {
    entry: {
        index: "./src/pages/index/index.jsx",
        leadership: "./src/pages/leadership/index.jsx",
        main: "./src/main.jsx",
    },
    output: {
        filename: "js/[name].bundle.js",
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
                test: /\.(woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]",
                },
            },
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
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/scss")],
                                outputStyle: "expanded",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/scss")],
                                outputStyle: "expanded",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192,
                    },
                },
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page.template}`,
            filename: page.filename,
            chunks: page.chunks,
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' },
            ]
        }),
    ],
};