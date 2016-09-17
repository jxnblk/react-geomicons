
const path = require('path')

module.exports = {
  entry: './demo/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo')
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md/, loader: 'html!highlight!markdown' }
    ]
  },

  devServer: {
    contentBase: 'demo'
  }
}

