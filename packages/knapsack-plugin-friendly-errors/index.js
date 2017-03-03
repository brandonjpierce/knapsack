const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = () => existing =>
  merge.smart(existing, {
    plugins: [
      // Recognizes certain classes of webpack errors and cleans, aggregates and
      // prioritizes them to provide a better Developer Experience
      new FriendlyErrorsWebpackPlugin(),
    ],
  });
