const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function ({ MiniCssExtractPlugin }) {
  return [
    new ForkTsCheckerWebpackPlugin(),
    new WebpackManifestPlugin({}),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ].filter(Boolean);
};
