const svgToMiniDataURI = require('mini-svg-data-uri');

// @see https://webpack.js.org/guides/asset-modules/
// @see https://webpack.js.org/configuration/output/#template-strings
// asset/resource: emit separate file (e.g. file-loader)
// asset/inline: export data uri (e.g. url-loader)
// asset/source: export source code (e.g. raw-loader)
// asset: automatically choose (e.g. url-loader with asset size limit)
const getAssetLoaders = () => [
  {
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    type: 'asset/resource',
    generator: { filename: '[file][query]' },
  },
  {
    // @see https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
    test: /\.(je?pg|a?png|gif|avif|webp)$/,
    type: 'asset/resource',
    generator: { filename: '[file][query]' },
  },
  {
    test: /\.svg$/,
    type: 'asset/inline',
    generator: {
      filename: '[file][query]',
      dataUrl: content => svgToMiniDataURI(content.toString()),
    },
  },
  {
    test: /\.(mp4|webm)$/,
    type: 'asset/resource',
    generator: { filename: '[file][query]' },
  },
];

module.exports = function ({ MiniCssExtractPlugin }) {
  return {
    rules: [
      ...getAssetLoaders(),
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  };
};
