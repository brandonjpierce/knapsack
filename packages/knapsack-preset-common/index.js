const get = require('lodash/get');
const merge = require('webpack-merge');
const reduce = require('lodash/reduce');
const env = require('knapsack-plugin-env');
const devtool = require('knapsack-plugin-devtool');
const extensions = require('knapsack-plugin-extensions');
const htmlLoader = require('knapsack-plugin-html-loader');
const fontLoader = require('knapsack-plugin-font-loader');
const nodePackages = require('knapsack-plugin-node-packages');
const noEmitErrors = require('knapsack-plugin-no-emit-errors');
const friendlyErrors = require('knapsack-plugin-friendly-errors');

module.exports = opts => existing => {
  const plugins = [
    devtool(get(opts, 'devtool')),
    extensions(get(opts, 'extensions')),
    htmlLoader(get(opts, 'htmlLoader')),
    fontLoader(get(opts, 'fontLoader')),
    env(),
    nodePackages(),
    noEmitErrors(),
    friendlyErrors(),
    () => ({
      target: get(opts, 'target', 'web'),
      module: {
        rules: [
          // Require developers to use import()
          {parser: {requireEnsure: false}}
        ]
      }
    })
  ];

  return reduce(plugins, (acc, curr) =>
    merge.smart(acc, curr(existing)),
    {}
  );
};
