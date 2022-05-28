// @see https://webpack.js.org/guides/asset-modules/
// @see https://webpack.js.org/configuration/output/#template-strings
// asset/resource: emit separate file (e.g. file-loader)
// asset/inline: export data uri (e.g. url-loader)
// asset/source: export source code (e.g. raw-loader)
// asset: automatically choose (e.g. url-loader with asset size limit)

const imgTest = /\.(je?pg|a?png|gif|avif|webp)$/i;

const filenameTemplate = '[file][contenthash][query]'; // [xt]
const getAssetLoaders = () => [
  {
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    type: 'asset/resource',
    generator: { filename: filenameTemplate },
  },
  {
    // @see https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
    test: imgTest,
    type: 'asset/resource',
    generator: { filename: filenameTemplate },
  },
  {
    test: /\.svg$/,
    type: 'asset/inline',
    generator: {
      filename: filenameTemplate,
      dataUrl: content => require('mini-svg-data-uri')(content.toString()),
    },
  },
  {
    test: /\.(mp4|webm)$/,
    type: 'asset/resource',
    generator: { filename: filenameTemplate },
  },
];

module.exports = function ({ MiniCssExtractPlugin, isDev }) {
  return {
    rules: [
      ...getAssetLoaders(),
      {
        test: /\.(csv|tsv)$/i,
        // exclude: /node_modules/,
        use: ['csv-loader'],
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  };
};
