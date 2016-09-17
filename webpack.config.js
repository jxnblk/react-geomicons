
const path = require('path')

module.exports = {
  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md/, loader: 'html!highlight!markdown' }
    ]
  },

  devServer: {
    contentBase: 'docs'
  }
}

