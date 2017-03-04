const assign = require('lodash/assign');

module.exports = opts => () => ({
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: assign({}, {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }, opts)
});
