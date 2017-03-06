const merge = require('webpack-merge');
const concat = require('lodash/concat');
const reduce = require('lodash/reduce');
const compact = require('lodash/compact');
const isArray = require('lodash/isArray');
const isObject = require('lodash/isObject');
const config = require('./config');
const resolve = require('./resolve');

const checkAndResolvePresets = opts => {
  let out = [];

  if (opts.presets) {
    if (!isArray(opts.presets)) {
      throw new Error('Presets must be an array');
    }

    out = resolve.presets(opts.presets);
  }

  return out;
};

const checkAndResolvePlugins = opts => {
  let out = [];

  if (opts.plugins) {
    if (!isArray(opts.plugins)) {
      throw new Error('Plugins must be an array');
    }

    out = resolve.plugins(opts.plugins);
  }

  return out;
};

module.exports = (webpackConfig = {}, conf = {}) => {
  let resolved = [];
  const currentEnv = process.env.NODE_ENV || 'development';
  const opts = config.build(conf);

  if (!isObject(webpackConfig)) {
    // TODO do we want to support promise based configs?
    throw new Error('Existing config must be an object');
  }

  resolved = concat(resolved, checkAndResolvePresets(opts));
  resolved = concat(resolved, checkAndResolvePlugins(opts));

  if (opts.env) {
    if (opts.env[currentEnv]) {
      resolved = concat(resolved, checkAndResolvePresets(opts.env[currentEnv]));
      resolved = concat(resolved, checkAndResolvePlugins(opts.env[currentEnv]));
    }
  }

  // Clean out unresolved packages
  resolved = compact(resolved);

  const out = reduce(resolved, (acc, curr) =>
    merge.smart(acc, curr(webpackConfig)),
    webpackConfig
  );

  return out;
};
