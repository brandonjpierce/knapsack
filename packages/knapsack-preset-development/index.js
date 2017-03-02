const merge = require('webpack-merge');
const commonPreset = require('knapsack-preset-common');
const namedModules = require('knapsack-plugin-named-modules');
const caseSensitive = require('knapsack-plugin-case-sensitive');

module.exports = merge.smart(
  commonPreset,
  namedModules,
  caseSensitive,
  {
    devtool: 'cheap-module-source-map',
    performance: {
      hints: false,
    },
  }
);
