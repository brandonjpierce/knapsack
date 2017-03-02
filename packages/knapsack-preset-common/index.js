const merge = require('webpack-merge');
const defineEnv = require('knapsack-plugin-define-env');
const nodePackages = require('knapsack-plugin-node-packages');

module.exports = merge.smart(
  defineEnv,
  nodePackages,
  {
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
