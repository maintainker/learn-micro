const HtmlWebpackPlugIn = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugIn({
      template: "./public/index.html",
    }),
  ],
};
