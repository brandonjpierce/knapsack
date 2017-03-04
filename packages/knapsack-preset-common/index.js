const get = require('lodash/get');
const merge = require('webpack-merge');
const flowRight = require('lodash/flowRight');
const defineEnv = require('knapsack-plugin-define-env');
const nodePackages = require('knapsack-plugin-node-packages');
const noEmitErrors = require('knapsack-plugin-no-emit-errors');
const friendlyErrors = require('knapsack-plugin-friendly-errors');

module.exports = opts => existing => {
  const plugins = flowRight([
    defineEnv(get(opts, 'env')),
    nodePackages(),
    noEmitErrors(),
    friendlyErrors()
  ])(existing);

  return merge.smart(plugins, {
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
  });
};
