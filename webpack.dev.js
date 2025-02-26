const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "js/[name].bundle.js",
    },
    devtool: "eval-source-map",
    devServer: {
        static: {
            directory: "./dist",
        },
        host: "0.0.0.0",
        open: true,
        hot: true,
        port: 5688,
        allowedHosts: "all",
        watchFiles: ["./src/**/*"],
        liveReload: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});