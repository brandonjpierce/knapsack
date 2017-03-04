const assign = require('lodash/assign');
const CompressionPlugin = require('compression-webpack-plugin');

const defaults = {
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.html$|\.css$/,
  threshold: 0,
  minRatio: 0.8
};

module.exports = opts => () => ({
  plugins: [
    new CompressionPlugin(assign({}, opts, defaults))
  ]
});
