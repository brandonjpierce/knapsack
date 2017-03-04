const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const merge = require('lodash/merge');

const cwd = process.cwd();
const PACKAGE_FILENAME = 'package.json';
const KNAPSACKRC_FILENAME = '.knapsackrc';

const exists = file => fs.existsSync(file);
const read = file => fs.readFileSync(file, 'utf8');

exports.build = () => {
  const config = {};
  const rc = path.join(cwd, KNAPSACKRC_FILENAME);
  const pkg = path.join(cwd, PACKAGE_FILENAME);

  if (exists(rc)) {
    const json = JSON.parse(read(rc));
    merge(config, json);
  }

  if (exists(pkg)) {
    const json = JSON.parse(read(rc));
    merge(config, get(json, 'knapsack', {}));
  }

  return config;
};

// TODO parse array syntax from knapsackrc
exports.parse = config => {
  console.log(config);
};
