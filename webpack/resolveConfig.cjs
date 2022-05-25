const path = require('path');

module.exports = function ({ isDev, dirName }) {
  return {
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.json', '.cjs'],
    mainFields: ['module', 'main'],
    alias: {
      src: path.resolve(dirName, 'src/'),
    },
  };
};
