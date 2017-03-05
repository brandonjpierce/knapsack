module.exports = opts => () => ({
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: opts
      }]
    }]
  }
});
