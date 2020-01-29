const {
  override,
  addWebpackModuleRule
} = require("customize-cra");

const path = require("path");

module.exports = override(
  addWebpackModuleRule(
    {
      test: /\.yaml$/,
      use: 'js-yaml-loader',
    })
);