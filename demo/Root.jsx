
var React = require('react');
var Demo = require('./Demo.jsx');
var Markdown = require('./Markdown.jsx');

var Root = React.createClass({

  getInitialState: function() {
    return {
      nightmode: false,
    }
  },

  toggleNightmode: function() {
    var mode = !this.state.nightmode;
    this.setState({ nightmode: mode });
  },

  render: function() {
    var initialProps = { __html: safeStringify(this.props) };


    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{this.props.name}</title>
          <style>{this.props.bass}</style>
        </head>
        <body className={'px3 ' + (this.state.nightmode ? 'white bg-black' : '')}>
          <Demo {...this.props} toggleNightmode={this.toggleNightmode} />
          <div className="container py3">
            <Markdown>
              {this.props.readme}
            </Markdown>
          </div>
          <footer className="container py2 border-top">
            <div className="flex flex-wrap mxn2">
              <a href={this.props.homepage}
                className="button button-transparent">
                GitHub
              </a>
              <a href={'http://npmjs.com/package/'+this.props.name}
                className="button button-transparent">
                npm
              </a>
              <div className="flex-auto" />
              <a href="http://jxnblk.com"
                className="button button-transparent">
                Made by Jxnblk
              </a>
            </div>
          </footer>
          <script id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={initialProps} />
          <script src="demo.js" />
        </body>
      </html>
    )
  }

});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root;

