const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = () => existing =>
  merge.smart(existing, {
    plugins: [
      // Webpack watcher doesn't work well if you mistype casing in a path.
      // This plugin prints an error when you attempt to do this.
      new CaseSensitivePathsPlugin(),
    ],
  });
