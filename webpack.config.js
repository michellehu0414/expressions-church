const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const { all } = require("axios");

module.exports = {
    mode: "development",
    entry: Object.fromEntries(
        glob.sync("./src/js/*.js").map(file => [
            path.basename(file, ".js"),
            path.resolve(__dirname, file)  // ✅ Fix path resolution
        ])
    ),

    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "../css/[name].css" }),
    ],
    devServer: {
        static: [
            path.resolve(__dirname, "assets"),
            path.resolve(__dirname, "local-preview")
        ],
        hot: true,
        open: true,
        watchFiles: ["src/**/*"],
        port: 5888,
        host: "0.0.0.0",
        allowedHosts: "all",
    },
};
