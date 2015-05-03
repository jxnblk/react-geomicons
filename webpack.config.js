
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [ '/' ];
var data = require('./demo/data');

module.exports = {

  entry: './demo/entry.js',

  output: {
    filename: 'demo.js',
    path: __dirname,
    //publicPath: 'demo',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: "css-loader" },
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('demo.js', paths, data)
  ]

};
