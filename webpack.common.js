const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const PATHS = {
    src: path.join(__dirname, "src"),
};

const pages = [
    { name: "index", title: "Home" },
    { name: "small-groups", title: "Small Groups" },
    { name: "leadership", title: "Leadership" },
    { name: "easter", title: "Easter" },
    { name: "plan-your-visit", title: "Plan Your Visit" },
    { name: "events", title: "Events" },
    { name: "fire-relief", title: "Fire Relief" },
];

module.exports = {
    entry: {
        index: "./src/pages/index/index.js",
        leadership: "./src/pages/leadership/leadership.js",
        easter: "./src/pages/easter/easter.js",
        "small-groups": "./src/pages/small-groups/small-groups.js",
        "fire-relief": "./src/pages/fire-relief/fire-relief.js",
        "plan-your-visit": "./src/pages/plan-your-visit/plan-your-visit.js",
        main: "./src/main.js",
    },

    output: {
        // Uses the entry key names directly (e.g. "index", "leadership")
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
    },

    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@data": path.resolve(__dirname, "src/data/"),
            "@scss": path.resolve(__dirname, "src/scss/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
        },
        extensions: [".js", ".json", ".scss", ".css"],
    },

    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: { filename: "assets/fonts/[name][ext]" },
            },
            {
                test: /\.html$/,
                use: ["raw-loader"],
            },
            {
                test: /\.styles.scss$/,
                exclude: /node_modules/,
                use: [
                    "sass-to-string",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/scss")],
                                outputStyle: "expanded",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                exclude: [/\.styles.scss$/, /node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("autoprefixer")],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/scss")],
                                outputStyle: "expanded",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "thread-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]",
                },
            },
            {
                test: /\.svg$/,
                use: [
                    "raw-loader",
                    {
                        loader: "svgo-loader",
                        options: {
                            plugins: [
                                { name: "removeTitle", active: false },
                                { name: "removeViewBox", active: false },
                                { name: "prefixIds", active: true },
                            ],
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),

        // Create HTML files for each page.
        ...pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    template: `./src/pages/${page.name}/${page.name}.html`,
                    filename: `${page.name}.html`,
                    chunks: [page.name, "main"],
                    title: page.title,
                })
        ),

        new MiniCssExtractPlugin({
            filename: "css/[name].min.css",
        }),

        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*.{html,js,scss}`, { nodir: true }),
            safelist: {
                standard: [/^is-/, /^has-/],
            },
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets/images", to: "assets/images" },
                { from: "src/assets/svg", to: "assets/svg" },
            ],
        }),
    ],
};
