
var React = require('react');
var Icon = require('../geomicon');

var Demo = React.createClass({

  getInitialState: function() {
    return {
      size: '32px',
      color: 'blue',
    }
  },

  handleSizeChange: function(e) {
    this.setState({ size: e.target.value });
  },

  handleColorChange: function(e) {
    this.setState({ color: e.target.value });
  },

  renderIcon: function(name, i) {
    return (
      <div key={'icon-'+i}
        style={{width:'6rem' }}
        className="center p2">
        <Icon name={name} className="inline-block" />
        <div className="h6">{name}</div>
      </div>
    )
  },

  render: function() {
    var styles = {
      icons: {
        fontSize: this.state.size
      },
    };

    return (
      <div>
        <div className="flex flex-end mt1 mb2">
          <div className="flex-auto" />
          <div className="px1">
            <label htmlFor="size-select"
              className="h5 bold block">
              Size
            </label>
            <select id="size-select"
              className="field field-light"
              value={this.state.size}
              onChange={this.handleSizeChange}>
              {this.props.sizes.map(function(size, i) {
                return <option key={'size-'+i} value={size} label={size} />
              })}
            </select>
          </div>
          <div className="px1">
            <label htmlFor="color-select"
              className="h5 bold block">
              Color
            </label>
            <select id="color-select"
              className="field field-light"
              value={this.state.color}
              onChange={this.handleColorChange}>
              {this.props.colors.map(function(color, i) {
                return <option key={'color-'+i} value={color} label={color} />
              })}
            </select>
          </div>
          <button onClick={this.props.toggleNightmode}
            title="Toggle background color"
            className="ml1 mr1 btn btn-outline">
            <svg viewBox="0 0 24 24"
              width="1em" height="1em"
              fill="currentColor"
              style={{ position:'relative', top: '.125em' }}
              className="inline-block">
              <path d="M12 0, A 12 12 0 0 0 12 24, A 12 12 0 0 0 12 0 M12 2 V22 A10 10 0 0 1 12 2" />
            </svg>
            {' '}
            <span className="hide">Background color</span>
          </button>
        </div>
        <div className={'flex flex-wrap flex-justify mxn2 ' + this.state.color}
          style={styles.icons}>
          {this.props.icons.map(this.renderIcon)}
        </div>
      </div>
    )
  }

});

module.exports = Demo;

