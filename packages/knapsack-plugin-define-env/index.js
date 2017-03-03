const merge = require('webpack-merge');
const assign = require('lodash/assign');
const webpack = require('webpack');

const defaults = {
  NODE_ENV: 'development',
};

module.exports = (opts) => existing =>
  merge.smart(existing, {
    plugins: [
      // Makes some environment variables available to the JS code, for example:
      // if (process.env.NODE_ENV === 'development') { ... }.
      new webpack.EnvironmentPlugin(assign({}, opts, defaults)),
    ],
  });
