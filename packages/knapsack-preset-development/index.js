const merge = require('webpack-merge');
const commonPreset = require('knapsack-preset-common');
const namedModules = require('knapsack-plugin-named-modules');
const caseSensitive = require('knapsack-plugin-case-sensitive');
const missingModules = require('knapsack-plugin-missing-modules');

module.exports = merge.smart(
  commonPreset,
  namedModules,
  caseSensitive,
  missingModules,
  {
    devtool: 'cheap-module-source-map',
    performance: {
      hints: false,
    },
  }
);
