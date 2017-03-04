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

// Allow shortname for preset
const possiblePresetNames = presetName => [
  `knapsack-preset-${presetName}`,
  presetName
];

// Allow shortname for plugin
const possiblePluginNames = pluginName => [
  `knapsack-plugin-${pluginName}`,
  pluginName
];

const resolveFromNames = names =>
  reduce(names, (accum, curr) =>
    accum || resolve(curr), null);

exports.plugins = plugins =>
  map(plugins, obj => {
    let plugin = obj;
    let options = {};

    if (isArray(plugin)) {
      if (plugin.length > 2) {
        const extra = JSON.stringify(plugin.slice(2));
        throw new Error(`Unexpected extra options ${extra} passed to plugin.`);
      }

      [plugin, options] = plugin;
    }

    const names = possiblePluginNames(plugin);
    const resolved = resolveFromNames(names);
    return resolved ? resolved(options) : resolved;
  });

exports.presets = presets =>
  map(presets, obj => {
    let preset = obj;
    let options = {};

    if (isArray(preset)) {
      if (preset.length > 2) {
        const extra = JSON.stringify(preset.slice(2));
        throw new Error(`Unexpected extra options ${extra} passed to preset.`);
      }

      [preset, options] = preset;
    }

    const names = possiblePresetNames(preset);
    const resolved = resolveFromNames(names);
    return resolved ? resolved(options) : resolved;
  });
