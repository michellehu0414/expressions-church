// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [
      path.resolve(__dirname, "assets"),       // for built assets (JS/CSS)
      path.resolve(__dirname, "src/local-preview")  // serve your local preview files directly
    ],
    hot: true,
    open: true,
    watchFiles: ["src/**/*", "src/local-preview/**/*"],
    port: 5888,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
});
