const purgecss = require("@fullhuman/postcss-purgecss").default;  // ✅ Fix import

module.exports = {
    plugins: [
        purgecss({
            content: ["./html/**/*.html", "./src/js/**/*.js"], // ✅ Scan HTML & JS files
            safelist: ["active", "open", "visible"], // ✅ Keep dynamic classes
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
};
