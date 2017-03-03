const merge = require('webpack-merge');
const commonPreset = require('knapsack-preset-common');
const hashedModules = require('knapsack-plugin-hashed-modules');
const uglify = require('knapsack-plugin-uglify');

module.exports = (opts) =>
  merge.smart(
    commonPreset(opts),
    uglify(opts),
    hashedModules(),
    {
      devtool: 'source-map',
      cache: false,
      bail: true,
      // Utilize long-term caching by adding content hashes
      // (not compilation hashes) to compiled assets
      output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
      },
    },
  );
