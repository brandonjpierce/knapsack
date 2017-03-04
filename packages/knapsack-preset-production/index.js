const get = require('lodash/get');
const merge = require('webpack-merge');
const reduce = require('lodash/reduce');
const commonPreset = require('knapsack-preset-common');
const hashedModules = require('knapsack-plugin-hashed-modules');
const uglify = require('knapsack-plugin-uglify');
const compression = require('knapsack-plugin-compression');

module.exports = opts => existing => {
  const plugins = [
    commonPreset(opts),
    uglify(get(opts, 'uglify')),
    compression(get(opts, 'compression')),
    hashedModules(),
    () => ({
      devtool: get(opts, 'devtool', 'source-map'),
      cache: false,
      bail: true,
      // Utilize long-term caching by adding content hashes
      // (not compilation hashes) to compiled assets
      output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
      }
    })
  ];

  return reduce(plugins, (acc, curr) =>
    merge.smart(acc, curr(existing)),
    {}
  );
};
