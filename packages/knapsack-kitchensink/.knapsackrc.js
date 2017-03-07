const env = process.env.NODE_ENV || 'development';
const presets = [env];
const plugins = [];

module.exports = {
  plugins,
  presets
};
