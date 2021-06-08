const path = require("path");

// ::PLUGINS::
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

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

      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
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
