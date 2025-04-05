const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: "production",

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        splitChunks: {
            chunks: "all",
            maxInitialRequests: 10,
            maxAsyncRequests: 10,
            minSize: 20000,
            maxSize: 70000,
        },
    },

    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
        new CompressionPlugin({ algorithm: "brotliCompress", threshold: 10240, minRatio: 0.8 }),
    ],
});
