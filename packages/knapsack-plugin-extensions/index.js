module.exports = opts => () => ({
  resolve: {
    extensions: opts || ['.js', '.jsx', '.json']
  }
});
