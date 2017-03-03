const assign = require('lodash/assign');
const webpack = require('webpack');

module.exports = (opts) => {
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.EnvironmentPlugin(assign({}, opts, {
      NODE_ENV: 'development',
    })),
  ],
};
