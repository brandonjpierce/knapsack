const get = require('lodash/get');
const merge = require('webpack-merge');
const reduce = require('lodash/reduce');
const devtool = require('knapsack-plugin-devtool');
const defineEnv = require('knapsack-plugin-define-env');
const nodePackages = require('knapsack-plugin-node-packages');
const noEmitErrors = require('knapsack-plugin-no-emit-errors');
const friendlyErrors = require('knapsack-plugin-friendly-errors');

module.exports = opts => existing => {
  const plugins = [
    defineEnv(get(opts, 'env')),
    devtool(get(opts, 'devtool')),
    nodePackages(),
    noEmitErrors(),
    friendlyErrors(),
    () => ({
      target: get(opts, 'target', 'web'),
      resolve: {
        extensions: get(opts, 'extensions', ['.js', '.json', '.jsx'])
      },
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
