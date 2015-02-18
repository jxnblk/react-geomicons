
var React = require('react');
var iconPaths = require('geomicons-open/src/js/paths');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      icon: 'warning',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    }
  },

  render: function() {
    var path = iconPaths[this.props.icon] || false;
    return (
      React.createElement('svg',
        React.__spread({
          dataId: 'geomicon-' + this.props.icon,
          viewBox: '0 0 32 32',
          //width: this.props.width,
          //height: this.props.height,
          //fill: this.props.fill
        }, this.props), 
          React.createElement('path', { d: path })
      )
    )
  }

});

