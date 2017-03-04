/* eslint-disable import/no-dynamic-require */

const path = require('path');
const Module = require('module');
const map = require('lodash/map');
const reduce = require('lodash/reduce');
const isArray = require('lodash/isArray');

// Taken mostly from Babel...Papa Bless
const resolve = location => {
  const relative = process.cwd();
  const filename = path.join(relative, '.knapsackrc');
  const mod = new Module();

  mod.id = filename;
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(relative);

  try {
    const importPath = Module._resolveFilename(location, mod);
    return require(importPath);
  } catch (err) {
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

    console.log('PLUGIN', pgn);
    console.log('OPTIONS', options);

    const names = possiblePluginNames(pgn);
    const resolved = resolveFromNames(names);
    return resolved ? resolved(options) : resolved;
  });

exports.presets = presets =>
  map(presets, preset => {
    let pre = preset;
    let options = {};

    if (isArray(preset)) {
      [pre, options] = pre;
    }

    console.log('PRESET', pre);
    console.log('OPTIONS', options);

    const names = possiblePresetNames(pre);
    const resolved = resolveFromNames(names);
    return resolved ? resolved(options) : resolved;
  });
