const merge = require('webpack-merge');
const defineEnv = require('knapsack-plugin-define-env');
const nodePackages = require('knapsack-plugin-node-packages');
const noEmitErrors = require('knapsack-plugin-no-emit-errors');
const friendlyErrors = require('knapsack-plugin-friendly-errors');

module.exports = merge.smart(
  defineEnv,
  nodePackages,
  noEmitErrors,
  friendlyErrors,
  {
    target: 'web',
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
    module: {
      rules: [
        { parser: { requireEnsure: false } },
      ],
    },
  },
);
