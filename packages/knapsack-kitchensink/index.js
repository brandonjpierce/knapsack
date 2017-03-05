const format = require('pretty-format');
const knapsack = require('knapsack-core');

const out = knapsack({}, {
  presets: ['production']
});

console.log(format(out));
