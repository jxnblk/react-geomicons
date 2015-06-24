
var React = require('react');
var Demo = require('./Demo.jsx');
var Markdown = require('./Markdown.jsx');

var blk = require('blk')
var Header = blk.Header
var Footer = blk.Footer
var css = require('./base.css')

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

    var links = [
      { href: '//npmjs.com/package/' + this.props.name, text: 'npm' },
      { href: this.props.homepage, text: 'Github' }
    ]

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{this.props.name}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className={'px3 ' + (this.state.nightmode ? 'white bg-black' : '')}>
          <Demo {...this.props} toggleNightmode={this.toggleNightmode} />
          <Header {...this.props}
            title='React Geomicons'
            href='/react-geomicons'
            links={links} />
          <Markdown>
            {[
              '## Getting Started',
              '\n',
              '```bash',
              'npm i react-geomicons',
              '```',
              '\n',
              '```js',
              'import React from \'react\'',
              'import Icon from \'react-geomicons\'',
              '',
              'React.render(<Icon name=\'heart\' \/\>\, document.querySelector(\'#heart-icon\'))',
              '```'
            ].join('\n')}
          </Markdown>
          <div className='py3'>
            <p>Read the full documentation on GitHub</p>
            <a href={this.props.homepage}
              className='btn btn-primary'>
              GitHub
            </a>
          </div>
          <Footer
            title='React Geomicons'
            href='/react-geomicons'
            links={links} />
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

