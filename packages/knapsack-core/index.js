const isArray = require('lodash/isArray');
const isObject = require('lodash/isObject');
const flowRight = require('lodash/flowRight');
const isFunction = require('lodash/isFunction');
const config = require('./config');
const resolve = require('./resolve');

module.exports = (existingConfig = {}, cb) => {
  const resolved = [];
  const opts = config.build();

  if (!isObject(existingConfig)) {
    // TODO do we want to support promise based configs?
    throw new Error('Existing config must be an object');
  }

  if (opts.presets) {
    if (!isArray(opts.presets)) {
      throw new Error('Presets must be an array');
    }

    resolved.push(resolve.presets(opts.presets));
  }

  if (opts.plugins) {
    if (!isArray(opts.plugins)) {
      throw new Error('Plugins must be an array');
    }

    resolved.push(resolve.plugins(opts.plugins));
  }

  const out = flowRight(resolved)(existingConfig);

  if (cb) {
    if (!isFunction(cb)) {
      throw new Error('Callback must be a function');
    }

    cb(out);
  }
};
