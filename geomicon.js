'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var paths = require('geomicons-open/src/js/paths');

var Icon = React.createClass({
  displayName: 'Icon',


  getDefaultProps: function getDefaultProps() {
    return {
      name: 'warning',
      width: '1em',
      height: '1em',
      fill: 'currentColor'
    };
  },

  render: function render() {
    var path = paths[this.props.name] || false;
    return React.createElement(
      'svg',
      _extends({}, this.props, { dataId: 'geomicon-' + this.props.name, viewBox: '0 0 32 32' }),
      React.createElement('path', { d: path })
    );
  }

});

module.exports = Icon;
