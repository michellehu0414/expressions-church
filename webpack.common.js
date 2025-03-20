const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const pages = [
    { name: "index", title: "Home" },
    { name: "small-groups", title: "Small Groups" },
    { name: "leadership", title: "Leadership" },
    // { name: "plan-your-visit", title: "Plan Your Visit" },
    // { name: "events", title: "Events" },
    // { name: "fire-relief", title: "Fire Relief" }
];

module.exports = {
    entry: {
        index: "./src/pages/index/index.js",
        leadership: "./src/pages/leadership/leadership.js",
        smallGroups: "./src/pages/small-groups/small-groups.js",
        // fireRelief: "./src/pages/fire-relief/index.jsx",
        // events: "./src/pages/events/index.jsx",
        // pyv: "./src/pages/plan-your-visit/index.jsx",
        main: "./src/main.js",
    },
    output: {
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
        extensions: [".js", ".json", ".scss", ".css", ".jsx", ".ts"],
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
                use: [
                    "raw-loader",
                ],
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
                ]
            },
            {
                test: /\.(scss|css)$/,
                // Excluding the `.styles.scss` extension
                exclude: [/\.styles.scss$/, /node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
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
                            presets: ['@babel/preset-env']
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]"
                },
            },
            {
                test: /\.svg$/,
                use: [
                    "raw-loader",
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { name: 'removeTitle', active: false },
                                { name: 'removeViewBox', active: false },
                                { name: 'prefixIds', active: true },
                            ],
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "css/[name].min.css" }),
        ...pages.map(page => new HtmlWebpackPlugin({
            template: `./src/pages/${page.name}/${page.name}.html`,
            filename: `${page.name}.html`,
            chunks: [page.name, "main"],
            title: page.title,
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets/images", to: "assets/images" },
                { from: "src/assets/svg", to: "assets/svg" },
            ],
        }),
    ],
};
