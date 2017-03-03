const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = () => existing =>
  merge.smart(existing, {
    plugins: [
      // Creates a more deterministic hash names that are preserved over builds.
      // Webpack recommends using this plugin in production env.
      new webpack.HashedModuleIdsPlugin(),
    ],
  });
