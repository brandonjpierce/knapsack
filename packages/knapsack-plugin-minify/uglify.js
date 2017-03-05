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

module.exports = opts => new webpack.optimize.UglifyJsPlugin(
  assign({}, defaults, opts)
);
