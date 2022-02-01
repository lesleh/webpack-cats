const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
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
