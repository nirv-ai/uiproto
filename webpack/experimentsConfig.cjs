// @see https://webpack.js.org/configuration/experiments/
module.exports = function ({ isDev }) {
  return {
    // asyncWebAssembly: true, // make a webassembly module an async module
    // buildHttp: false, // build remote resources (security issue)
    // futureDefaults: true,
    // outputModule: true,
    // syncWebAssembly: false,
    // cacheUnaffected: isDev,
    layers: true,
    lazyCompilation: isDev, // theres no webpack in prod
    topLevelAwait: true,
  };
};
