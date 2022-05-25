// TODO(noah): https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const experimentsConfig = require('./webpack/experimentsConfig.cjs');
const moduleConfig = require('./webpack/moduleConfig.cjs');
const optimizationConfig = require('./webpack/optimizationConfig.cjs');
const outputConfig = require('./webpack/outputConfig.cjs');
const pluginsConfig = require('./webpack/pluginsConfig.cjs');
const resolveConfig = require('./webpack/resolveConfig.cjs');

// @see https://webpack.js.org/guides/typescript/
const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const dirName = __dirname;

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  experiments: experimentsConfig({ isDev }),
  mode,
  module: moduleConfig({ MiniCssExtractPlugin, isDev }),
  optimization: optimizationConfig({ isDev }),
  output: outputConfig({ isDev, dirName }),
  plugins: pluginsConfig({ MiniCssExtractPlugin, isDev }),
  resolve: resolveConfig({ isDev, dirName }),
  stats: 'normal',
  target: 'web',
};
