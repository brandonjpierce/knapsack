/* eslint-disable import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const KNAPSACKRC_FILENAME = '.knapsackrc.js';

const exists = file => fs.existsSync(file);

exports.build = (passed, relative = cwd) => {
  const rc = path.join(relative, KNAPSACKRC_FILENAME);

  // TODO should we throw an error or warning
  // when a knapsackrc file is not present?

  if (exists(rc)) {
    const config = require(rc);
    return config;
  }

  return {};
};
