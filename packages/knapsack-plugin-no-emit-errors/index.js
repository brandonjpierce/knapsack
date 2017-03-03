const webpack = require('webpack');

module.exports = () => {
  plugins: [
    // This plugin does not swallow errors. Instead, it just prevents
    // Webpack from printing out compile time stats to the console.
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
