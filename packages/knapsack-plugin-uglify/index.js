const webpack = require('webpack');

module.exports = {
  plugins: [
    // Set loaders to minify mode and remove debugging
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // Minify our bundle(s)
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true,
    }),
  ],
};
