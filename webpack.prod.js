const path = require("path");
const glob = require("glob");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");
const baseConfig = require("./webpack.common.js");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
	src: path.join(__dirname, "src")
};

module.exports = merge(baseConfig, {
	mode: "production",
	devtool: "source-map", // Enable lightweight source maps for debugging

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		splitChunks: {
			chunks: "all",
			maxInitialRequests: 10,
			maxAsyncRequests: 10,
			minSize: 20000,
			maxSize: 70000,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	},

	plugins: [
		...(process.env.ANALYZE === "true"
			? [new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false })]
			: []),
		new CompressionPlugin({
			algorithm: "brotliCompress",
			threshold: 10240,
			minRatio: 0.8
		}),
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*.{html,js,scss}`, { nodir: true }),
			safelist: {
				standard: [/^is-/, /^has-/]
			}
		})
	]
});
