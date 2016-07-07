
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './demo/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo')
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, include: /react-cxs/, loader: 'babel' },
      { test: /\.md/, loader: 'html!highlight!markdown' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      h: 'react-cxs'
    })
  ],

  devServer: {
    contentBase: 'demo'
  }
}

