const path = require('path');
const merge = require('webpack-merge');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');

module.exports = (opts) => existing =>
  merge.smart(existing, {
    plugins: [
      new WatchMissingNodeModulesPlugin(opts || nodeModulesPath),
    ],
  });
