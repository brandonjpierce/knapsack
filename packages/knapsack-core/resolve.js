/* eslint-disable import/no-dynamic-require */

const map = require('lodash/map');
const reduce = require('lodash/reduce');
const isArray = require('lodash/isArray');

const resolve = location => {
  // TODO support relative path presets
  // TODO support scoped packages
  try {
    return require(location);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const possiblePresetNames = presetName => [
  `knapsack-preset-${presetName}`,
  presetName
];

const possiblePluginNames = pluginName => [
  `knapsack-plugin-${pluginName}`,
  pluginName
];

const resolveFromNames = names =>
  reduce(names, (accum, curr) =>
    accum || resolve(curr), null);

exports.plugins = plugins =>
  map(plugins, plugin => {
    let pgn = plugin;
    let options = {};

    if (isArray(plugin)) {
      [pgn, options] = pgn;
    }

    const names = possiblePluginNames(pgn);
    return resolveFromNames(names)(options);
  });

exports.presets = presets =>
  map(presets, preset => {
    let pre = preset;
    let options = {};

    if (isArray(preset)) {
      [pre, options] = pre;
    }

    const names = possiblePresetNames(pre);
    return resolveFromNames(names)(options);
  });
