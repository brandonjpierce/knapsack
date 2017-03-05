const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const union = require('lodash/union');
const isArray = require('lodash/isArray');
const mergeWith = require('lodash/mergeWith');

const cwd = process.cwd();
const PACKAGE_FILENAME = 'package.json';
const KNAPSACKRC_FILENAME = '.knapsackrc';

const exists = file => fs.existsSync(file);
const read = file => fs.readFileSync(file, 'utf8');

const mergeConf = (source, obj) =>
  mergeWith(source, obj, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return union(objValue, srcValue);
    }
  });

exports.build = (passed, relative = cwd) => {
  const config = {};
  const rc = path.join(relative, KNAPSACKRC_FILENAME);
  const pkg = path.join(relative, PACKAGE_FILENAME);

  if (exists(rc)) {
    const json = JSON.parse(read(rc));
    mergeConf(config, json);
  }

  if (exists(pkg)) {
    const json = get(JSON.parse(read(pkg)), 'knapsack', {});
    mergeConf(config, json);
  }

  if (passed) {
    mergeConf(config, passed);
  }

  return config;
};
