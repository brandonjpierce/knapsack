const test = require('ava');
const noop = require('lodash/noop');
const knapsack = require('./index');

const exampleConfig = {
  entry: 'foo.js',
  plugins: [
    noop,
  ]
};

test('knapsack-core accepts object', t => {
  const obj = knapsack(exampleConfig);
  t.is(obj, exampleConfig);
});
