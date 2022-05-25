const cacheGroupBaseParams = {
  chunks: 'all',
  enforce: true, // ignore minSize, minChunks, maxAsyncRequests, maxInitialRequests
  filename: 'js/[name]/bundle.js',
  priority: 1,
  reuseExistingChunk: true,
};

// @see https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups
// a module belonging to multiple groups will be placed in the highest priority
// [\\/] only necessary when supporting windows
// ^ no plans to support windows, plus it messes up my ability to write regex
const createCacheGroups = () => ({
  etc: {
    ...cacheGroupBaseParams,
    test: /node_modules/,
    priority: 0,
  },
  react: {
    ...cacheGroupBaseParams,
    test: /node_modules\/.*react/,
  },
  styles: {
    ...cacheGroupBaseParams,
    test: /node_modules\/.*(animate|normalize|styled|milligram|reakit|react-aria|emotion)/,
  },
});

// @see https://webpack.js.org/plugins/split-chunks-plugin/
// remember we are targeting perf for http2, so more chunks are fine for web
// all numbers are in bytes
// minSize, minSizeReduction,
// enforceSizeThreshold > maxInitialRequest/maxAsyncRequests < maxSize < minSize
// maxSize: before splitting, sets both maxAsyncSize and maxInitialSize
// enforceSizeThreshold: never create a chunk larger than this
const createSplitChunks = () => {
  const kb = 1_000;
  const mb = 1_000_000;

  return {
    cacheGroups: createCacheGroups(),
    automaticNameDelimiter: '-',
    chunks: 'all', // all, async, initial
    enforceSizeThreshold: mb * 2,
    hidePathInfo: true,
    maxAsyncRequests: 30, // before splitting to new chunk
    maxInitialRequests: 30, // to the main bundle
    maxSize: mb, // 1mb
    minChunks: 1, // shared >= many times among chunks before splitting
    minRemainingSize: kb,
    minSize: kb * 10,
    minSizeReduction: kb, // to the main bundle
    name: false, // false forces the say name across bundles for better caching
    usedExports: true, // enables mangling of export names, and omitting unused
  };
};

// @see https://webpack.js.org/configuration/optimization/
module.exports = function ({ isDev }) {
  return {
    chunkIds: isDev ? 'named' : 'deterministic',
    concatenateModules: true, // depends on usedExports
    emitOnErrors: true, // emit even if errors, will propagate to runtime
    flagIncludedChunks: true,
    innerGraph: true, // required for emotion
    mangleExports: isDev ? false : 'deterministic',
    mangleWasmImports: false,
    mergeDuplicateChunks: true,
    minimize: true,
    // minimizer: createTerserPlugin({ pathDist, ifProd }),
    moduleIds: isDev ? 'named' : 'deterministic',
    nodeEnv: isDev ? 'development' : 'production',
    portableRecords: true,
    providedExports: true,
    realContentHash: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    runtimeChunk: 'single', // all entry points runtime in the same file
    sideEffects: true,
    splitChunks: createSplitChunks(),
    usedExports: false, // cant be used with experiments.cacheUnaffected
  };
};
