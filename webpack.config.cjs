// TODO(noah): https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsConfig = require('./webpack/pluginsConfig.cjs');
const moduleConfig = require('./webpack/moduleConfig.cjs');
const optimizationConfig = require('./webpack/optimizationConfig.cjs');

// @see https://webpack.js.org/guides/typescript/
const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';

module.exports = {
  mode,
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  stats: 'normal',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.json', '.cjs'],
    mainFields: ['module', 'main'],
  },
  optimization: optimizationConfig({ isDev }),
  module: moduleConfig({ MiniCssExtractPlugin, isDev }),
  plugins: pluginsConfig({ MiniCssExtractPlugin, isDev }),
};
