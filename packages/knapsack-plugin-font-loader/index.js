module.exports = opts => () => ({
  module: {
    rules: [{
      test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: opts
      }]
    }]
  }
});
