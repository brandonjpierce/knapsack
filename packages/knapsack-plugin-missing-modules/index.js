const path = require('path');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');

module.exports = {
  plugins: [
    new WatchMissingNodeModulesPlugin(nodeModulesPath),
  ],
};
