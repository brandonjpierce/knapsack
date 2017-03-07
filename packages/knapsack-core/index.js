const merge = require('webpack-merge');
const concat = require('lodash/concat');
const reduce = require('lodash/reduce');
const compact = require('lodash/compact');
const isArray = require('lodash/isArray');
const isObject = require('lodash/isObject');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const config = require('./config');
const resolve = require('./resolve');

const checkAndResolve = (opts, type) => {
  let out = [];
  const resolver = resolve[type];

  if (opts[type]) {
    if (!isArray(opts[type])) {
      throw new Error(`${type} must be an array`);
    }

    out = compact(resolver(opts[type]));
  }

  return out;
};

module.exports = (webpackConfig = {}) => {
  let resolved = [];
  const opts = config.build();

  updateNotifier({pkg}).notify();

  if (!isObject(webpackConfig)) {
    // TODO do we want to support promise based configs?
    throw new Error('Existing config must be an object');
  }

  resolved = concat(resolved, checkAndResolve(opts, 'presets'));
  resolved = concat(resolved, checkAndResolve(opts, 'plugins'));

  const out = reduce(resolved, (acc, curr) =>
    merge.smart(acc, curr(webpackConfig)),
    webpackConfig
  );

  return out;
};
