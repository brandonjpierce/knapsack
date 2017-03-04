const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = () => () => ({
  plugins: [
    // Recognizes certain classes of webpack errors and cleans, aggregates and
    // prioritizes them to provide a better Developer Experience
    new FriendlyErrorsWebpackPlugin()
  ]
});
