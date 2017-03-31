module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      'react',
      ['env', { modules: false }]
    ]
  }
}
