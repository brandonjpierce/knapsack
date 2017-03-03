const merge = require('webpack-merge');

module.exports = (existingConfig) => {
  // TODO parse .knapsackrc
  // TODO parse package.json[knapsack]
  // TODO generate plugins array
  // TODO existingConfig checks
  return flowRight(plugins)(existingConfig);
}
