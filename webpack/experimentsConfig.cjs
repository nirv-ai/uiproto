// @see https://webpack.js.org/configuration/experiments/
module.exports = function ({ isDev }) {
  return {
    // buildHttp: false, // build remote resources (security issue), but could limit to known hosts
    backCompat: false,
    cacheUnaffected: true,
    futureDefaults: false, // Cannot read properties of undefined (reading 'getChunkConditionMap')
    layers: true,
    lazyCompilation: false, // Uncaught (in promise) Error: Problem communicating active modules to the server: undefined undefined:undefined:undefined undefined
    outputModule: false, // Uncaught SyntaxError: import.meta may only appear in a module
    topLevelAwait: true,
  };
};
