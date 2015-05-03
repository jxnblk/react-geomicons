
var React = require('react');
var marked = require('marked');

var Markdown = React.createClass({

  render: function() {

    var html = {
      __html: marked(this.props.children.toString(), { sanitize: true })
    };

    return (
      <div dangerouslySetInnerHTML={html} />
    )
  }

});

module.exports = Markdown;

