const merge = require('webpack-merge');
const reduce = require('lodash/reduce');
const commonPreset = require('knapsack-preset-common');
const namedModules = require('knapsack-plugin-named-modules');
const caseSensitive = require('knapsack-plugin-case-sensitive');

module.exports = opts => existing => {
  const plugins = [
    commonPreset(opts),
    namedModules(),
    caseSensitive(),
    () => ({
      watch: true,
      bail: false,
      cache: true,
      output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
      },
      performance: {
        hints: false
      }
    })
  ];

  return reduce(plugins, (acc, curr) =>
    merge.smart(acc, curr(existing)),
    {}
  );
};
