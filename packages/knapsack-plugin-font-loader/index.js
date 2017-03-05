module.exports = () => () => ({
  module: {
    rules: [{
      test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
      use: ['file-loader?config=knapsackFontLoader']
    }]
  }
});
