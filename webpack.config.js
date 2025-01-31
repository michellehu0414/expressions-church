const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const glob = require("glob-all");

module.exports = {
    mode: "development", // ✅ Use "development" for local preview
    entry: Object.fromEntries(
        glob.sync("./src/js/*.js").map(file => [
            path.basename(file, ".js"),
            path.resolve(__dirname, file)
        ])
    ),
    output: {
        path: path.resolve(__dirname, "assets"), // ✅ JS & CSS in assets/
        filename: "js/[name].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/local-preview", to: "local-preview" }, // ✅ Copy src/local-preview → local-preview
                { from: "src/html", to: "html" }, // ✅ Copy src/html → html
            ],
        }),
        new MiniCssExtractPlugin({ filename: "css/[name].css" }),

        // ✅ Generate HTML files in both `local-preview/` and `html/`
        ...glob.sync("./src/*.html").flatMap(file => [
            new HtmlWebpackPlugin({
                filename: `local-preview/${path.basename(file)}`,
                template: file,
                inject: "body",
            }),
            new HtmlWebpackPlugin({
                filename: `html/${path.basename(file)}`,
                template: file,
                inject: "body",
            }),
        ]),
    ],
    devServer: {
        static: [
            path.resolve(__dirname, "assets"), // Serve assets/
            path.resolve(__dirname, "local-preview"), // Serve local-preview/
            path.resolve(__dirname, "html"), // Serve html/
        ],
        hot: true,
        open: true,
        watchFiles: ["src/**/*", "src/local-preview/**/*", "src/html/**/*"], // ✅ Watch for changes
        port: 5888,
        host: "0.0.0.0",
        allowedHosts: "all",
    },
};
