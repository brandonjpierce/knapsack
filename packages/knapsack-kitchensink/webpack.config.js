const path = require('path');
const format = require('pretty-format');
const knapsack = require('knapsack-core');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = knapsack({
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
});

// console.log(format(config));

module.exports = config;
