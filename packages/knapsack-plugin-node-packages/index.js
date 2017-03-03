const merge = require('webpack-merge');

module.exports = () => existing =>
  merge.smart(existing, {
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  });
