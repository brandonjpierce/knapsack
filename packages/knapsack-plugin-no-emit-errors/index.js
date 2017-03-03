const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = () => existing =>
  merge.smart(existing, {
    plugins: [
      // This plugin does not swallow errors. Instead, it just prevents
      // Webpack from printing out compile time stats to the console.
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
