const webpack = require('webpack');

module.exports = () => () => ({
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.EnvironmentPlugin({NODE_ENV: 'development'})
  ]
});
