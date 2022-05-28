const path = require('path');

module.exports = function ({ isDev, dirName }) {
  return {
    path: path.resolve(dirName, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'auto',
  };
};
