const get = require('lodash/get');
const merge = require('webpack-merge');
const flowRight = require('lodash/flowRight');
const commonPreset = require('knapsack-preset-common');
const namedModules = require('knapsack-plugin-named-modules');
const caseSensitive = require('knapsack-plugin-case-sensitive');
const missingModules = require('knapsack-plugin-missing-modules');

module.exports = opts => existing => {
  const plugins = flowRight([
    commonPreset(opts),
    missingModules(get(opts, 'missing-modules')),
    namedModules(),
    caseSensitive(),
  ])(existing);

  return merge.smart(plugins, {
    devtool: 'cheap-module-source-map',
    bail: false,
    // In most cases this will be implicitly set to true but we set it
    // explicitly here just in case
    cache: true,
    // Don't use hashes for better performance
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    // We do not want to clutter console with these reports
    performance: {
      hints: false,
    },
  });
};
