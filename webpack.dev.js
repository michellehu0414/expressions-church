const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common.js");

module.exports = merge(baseConfig, {
    mode: "development",

    devServer: {
        static: "./public",
        hot: true,
        port: 5888,
        historyApiFallback: true,
        watchFiles: ["./src/**/*", "./public/**/*"],
        liveReload: true,
    },

    devtool: "eval-source-map",
});
