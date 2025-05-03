const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common.js");

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "eval-source-map",

    devServer: {
        static: "./public",
        hot: true,
        port: 5888,
        historyApiFallback: true,
        watchFiles: ["./src/**/*", "./public/**/*"],
        liveReload: true,
    },

});
