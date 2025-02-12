const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/js/main.js", // ✅ SCSS should be imported in JS, NOT directly in entry
        home: "./src/js/home.js",
        leadership: "./src/js/leadership.js",
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "auto", // ✅ Prevents Webpack path resolution issues
    },
    resolve: {
        alias: {
            // ✅ General Paths
            "@src": path.resolve(__dirname, "src"),

            // ✅ SCSS Aliases
            "@scss": path.resolve(__dirname, "src/scss"),
            "@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
            "@base": path.resolve(__dirname, "src/scss/base"),
            "@utilities": path.resolve(__dirname, "src/scss/utilities"),
            "@widgets": path.resolve(__dirname, "src/scss/elementor-widgets"),

            // ✅ JavaScript Aliases
            "@js": path.resolve(__dirname, "src/js"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // ✅ Extracts CSS in production
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }, // ✅ Enables source maps for debugging
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("cssnano")({ preset: "default" }),
                                ],
                            },
                            sourceMap: true, // ✅ Enables source maps
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true, // ✅ Enables source maps
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/scss"),
                                path.resolve(__dirname, 'src/scss/abstracts'),
                                path.resolve(__dirname, 'src/scss/utilities'),
                                ], // ✅ Works with @use "@abstracts/variables";
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "css/[name].min.css" }), // ✅ Output minified CSS files in `css/`
    ],
};
