const path = require("path");

// ::PLUGINS::
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        // after adding sass the work flow is written below
        use: [
          "style-loader", // 3 injects style in dom
          "css-loader", // 2 converts css to commonjs
          "sass-loader", // 1 converts sass to css
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack tut",
      template: "src/template.html",
    }),
  ],
};
