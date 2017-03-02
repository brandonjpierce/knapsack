const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
};
