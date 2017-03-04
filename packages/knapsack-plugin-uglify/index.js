/* eslint-disable camelcase */

const assign = require('lodash/assign');
const webpack = require('webpack');

const defaults = {
  compress: {
    screw_ie8: true,
    warnings: false
  },
  mangle: {
    screw_ie8: true
  },
  output: {
    comments: false,
    screw_ie8: true
  },
  sourceMap: true
};

module.exports = opts => () => ({
  plugins: [
    // Set loaders to minify mode and remove debugging
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // Minify our bundle(s)
    new webpack.optimize.UglifyJsPlugin(assign({}, opts, defaults))
  ]
});
