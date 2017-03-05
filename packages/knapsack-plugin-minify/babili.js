const assign = require('lodash/assign');
const BabiliPlugin = require('babili-webpack-plugin');

const defaults = {
  removeConsole: true,
  removeDebugger: true
};

module.exports = opts => new BabiliPlugin(
  assign({}, defaults, opts),
  {comments: false}
);
