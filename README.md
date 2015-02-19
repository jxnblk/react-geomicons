# react-geomicons

React component for Geomicons Open

## Getting Started

```bash
npm install --save react-geomicons
```

```js
var React = require('react');
var Geomicon = require('react-geomicons');

module.exports = React.createClass({
  render: function() {
    <MyComponent>
      <Geomicon icon="bookmark" />
    </MyComponent>
  }
});
```

### Props
- `icon` - camel cased icon name
- `width` - default `1em`
- `height` - default `1em`
- `fill` - default `currentColor`

See [Geomicons Open](https://github.com/jxnblk/geomicons-open) for the list of available icons.
