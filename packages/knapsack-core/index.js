const isArray = require('lodash/isArray');
const isObject = require('lodash/isObject');
const flowRight = require('lodash/flowRight');

// TODO remove default param values
module.exports = (existingConfig = {}, plugins = []) => {
  if (!isObject(existingConfig)) {
    // TODO do we want to support promise based configs?
    // throw new Error('Config needs to be an object');
  }

  if (plugins && !isArray(plugins)) {
    // TODO do we want to convert an object to an array if one is passed?
    // throw new Error('Plugins needs to be an array');
  }

  // TODO parse .knapsackrc
  // TODO parse package.json[knapsack]
  // TODO generate plugins array
  // TODO existingConfig checks

  return flowRight(plugins)(existingConfig);
};
