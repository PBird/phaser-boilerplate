const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        type: "asset/resource",
      },

      //   {
      //     test: /\.js$/,
      //     enforce: "pre",
      //     use: ["source-map-loader"],
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/assets/index.html",
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".json", ".ts"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
