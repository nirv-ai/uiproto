const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = function ({ MiniCssExtractPlugin }) {
  return [
    new (require('fork-ts-checker-webpack-plugin'))(),
    new (require('webpack-manifest-plugin').WebpackManifestPlugin)({}),
    new (require('html-webpack-plugin'))({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new (require('eslint-webpack-plugin'))({ extensions: ['ts', 'tsx', 'js', 'jsx', 'json'] }),
    new ImageMinimizerPlugin({
      minimizer: {
        // @see https://github.com/imagemin/imagemin
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          // @see https://www.npmjs.com/search?q=keywords:imageminplugin
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            // Svgo configuration here https://github.com/svg/svgo#configuration
            [
              'svgo',
              {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: {
                          active: false,
                        },
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              {
                                xmlns: 'http://www.w3.org/2000/svg',
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }),
  ].filter(Boolean);
};
