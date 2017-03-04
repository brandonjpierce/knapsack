const webpack = require('webpack');

module.exports = () => () => ({
  plugins: [
    // A useful plugin to better understand what modules are being
    // updated when using HMR. Webpack recommends this plugin in dev env.
    new webpack.NamedModulesPlugin()
  ]
});
