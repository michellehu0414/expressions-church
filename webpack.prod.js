const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob-all");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const { all } = require("axios");

module.exports = {
    mode: "production",
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
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')()],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { outputStyle: 'compressed' },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/**/*.html'), { nodir: true }),
            safelist: ['safelist-class'],
        }),
        new MiniCssExtractPlugin({ filename: "css/[name].css" }),
        new PurgeCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, "html/**/*.html"),  // ✅ Scan all HTML files
                path.join(__dirname, "src/js/**/*.js"),  // ✅ Scan JS files (if needed)
            ]),
            safelist: {
                standard: ["active", "open", "visible"],  // ✅ Keep dynamic classes (modify as needed)
            },
        }),
    ],
};
