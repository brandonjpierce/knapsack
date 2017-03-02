const merge = require('webpack-merge');
const commonPreset = require('knapsack-preset-common');
const hashedModules = require('knapsack-plugin-hashed-modules');
const uglify = require('knapsack-plugin-uglify');

module.exports = merge.smart(
  commonPreset,
  hashedModules,
  uglify,
  {
    bail: true,
    devtool: 'source-map',
  },
);
