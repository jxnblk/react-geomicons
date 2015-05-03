
var fs = require('fs');
var path = require('path');
var data = require('../package.json');
var cssnext = require('cssnext');

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

data.bass = cssnext('@import "basscss";', {
  compress: true,
  features: {
    customProperties: {
      variables: {
        'font-family': '"Avenir Next", "Hevletica Neue", Helvetica, sans-serif',
        'button-font-size': 'var(--h5)',
        'bold-font-weight': '500',
        'heading-font-weight': '500',
        'button-font-weight': '500',
      }
    },
    rem: false,
    pseudoElements: false,
    colorRgba: false,
  }
});

data.bass += [
  'pre {',
    'padding: 1rem;',
    'border: 1px solid rgba(0,0,0,.125);',
  '}'
].join(' ');


module.exports = data;

