const get = require('lodash/get');
const merge = require('webpack-merge');
const reduce = require('lodash/reduce');
const uglify = require('knapsack-plugin-uglify');
const devtool = require('knapsack-plugin-devtool');
const defineEnv = require('knapsack-plugin-env');
const compression = require('knapsack-plugin-compression');
const commonPreset = require('knapsack-preset-common');
const hashedModules = require('knapsack-plugin-hashed-modules');

module.exports = opts => existing => {
  const plugins = [
    commonPreset(opts),
    defineEnv(get(opts, 'env', 'production')),
    uglify(get(opts, 'uglify')),
    compression(get(opts, 'compression')),
    devtool(get(opts, 'devtool', 'source-map')),
    hashedModules(),
    () => ({
      watch: false,
      cache: false,
      bail: false,
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
