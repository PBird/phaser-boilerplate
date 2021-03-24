const { merge } = require("webpack-merge");
const baseConfig = require("./configs/webpack.config.base");
const devConfig = require("./configs/webpack.config.dev");
const prodConfig = require("./configs/webpack.config.prod");

module.exports = (env) => {
  switch (env.NODE_ENV) {
    case "development":
      return merge(baseConfig, devConfig);
    case "production":
      return merge(baseConfig, prodConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
