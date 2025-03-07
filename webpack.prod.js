const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ["default", { discardComments: { removeAll: true } }], // Ensures CSS is formatted properly
                },
            }),],
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean dist/ directory before each build
    ],
    devtool: false, // Correctly disable source maps
    stats: {
        errorDetails: true,
    }
});