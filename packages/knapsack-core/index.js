const merge = require('webpack-merge');
const concat = require('lodash/concat');
const reduce = require('lodash/reduce');
const compact = require('lodash/compact');
const isArray = require('lodash/isArray');
const isObject = require('lodash/isObject');
const config = require('./config');
const resolve = require('./resolve');

module.exports = (existingConfig = {}) => {
  let resolved = [];
  const opts = config.build();

  if (!isObject(existingConfig)) {
    // TODO do we want to support promise based configs?
    throw new Error('Existing config must be an object');
  }

  if (opts.presets) {
    if (!isArray(opts.presets)) {
      throw new Error('Presets must be an array');
    }

    resolved = concat(resolved, resolve.presets(opts.presets));
  }

  if (opts.plugins) {
    if (!isArray(opts.plugins)) {
      throw new Error('Plugins must be an array');
    }

    resolved = concat(resolved, resolve.plugins(opts.plugins));
  }

  // Clean out unresolved packages
  resolved = compact(resolved);

  const out = reduce(resolved, (acc, curr) =>
    merge.smart(acc, curr(existingConfig)),
    existingConfig
  );

  return out;
};
