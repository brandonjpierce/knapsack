const webpack = require('webpack');

module.exports = () => () => ({
  plugins: [
    // Creates a more deterministic hash names that are preserved over builds.
    // Webpack recommends using this plugin in production env.
    new webpack.HashedModuleIdsPlugin()
  ]
});
