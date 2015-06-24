
var fs = require('fs');
var path = require('path');
var data = require('../package.json');
//var cssnext = require('cssnext');

data.icons = Object.keys(require('geomicons-open/src/js/paths'));
data.colors = Object.keys(require('colors.css'));
data.sizes = [
  '8px',
  '16px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
];

data.readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');

//data.bass = cssnext('@import "blk";', {
//  compress: true,
//  features: {
//    customProperties: { },
//    rem: false,
//    pseudoElements: false,
//    colorRgba: false,
//  }
//});

module.exports = data;

