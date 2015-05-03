
var React = require('react');
var Root = require('./Root.jsx');

if (typeof document !== 'undefined') {
  var propsEl = document.getElementById('initial-props');
  var initialProps = JSON.parse(propsEl.innerHTML);
  React.render(React.createElement(Root, initialProps), document);
}

module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};

