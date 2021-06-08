const path = require("path");

const { merge } = require("webpack-merge");

//::plugins::
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack configs
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
});
