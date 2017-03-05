/* eslint-disable import/no-dynamic-require */

const assign = require('lodash/assign');
const webpack = require('webpack');
const optimize = require('./optimize');

const defaults = {
  minifier: 'uglify',
  optimize: true,
  options: {}
};

module.exports = opts => () => {
  const config = assign({}, defaults, opts);
  // TODO ensure either babili or uglify is passed for opts.minifier
  const minifier = require(`./${config.minifier}`);

  const plugins = [
    minifier(config.options),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ];

  if (config.optimize) {
    plugins.push(optimize);
  }

  return {plugins};
};
