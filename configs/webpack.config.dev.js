module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      // {
      //   test: /\.(gif|png|jpe?g|svg|xml)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "assets/[name].[ext]",
      //   },
      // },
      //   {
      //     test: /\.js$/,
      //     enforce: "pre",
      //     use: ["source-map-loader"],
      //   },
    ],
  },
};
