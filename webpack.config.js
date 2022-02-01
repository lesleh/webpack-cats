const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
