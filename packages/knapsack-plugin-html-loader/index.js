module.exports = () => () => ({
  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader?config=knapsackHtmlLoader']
    }]
  }
});
