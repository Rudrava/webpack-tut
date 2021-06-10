const path = require("path");
const { merge } = require("webpack-merge");

// webpack configs
const common = require("./webpack.common");

// ::PLUGINS::
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack tut",
      template: "src/template.html",
    }),
  ],
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
});
