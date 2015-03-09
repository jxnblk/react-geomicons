
var React = require('react');
var paths = require('geomicons-open/src/js/paths');

var Icon = React.createClass({

  getDefaultProps: function() {
    return {
      icon: 'warning',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    }
  },

  render: function() {
    var path = paths[this.props.icon] || false;
    return (
      React.createElement('svg',
        React.__spread({
          dataId: 'geomicon-' + this.props.icon,
          viewBox: '0 0 32 32',
        }, this.props), 
          React.createElement('path', { d: path })
      )
    )
  }

});

module.exports = Icon;

