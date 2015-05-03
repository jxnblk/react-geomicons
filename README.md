# react-geomicons

React icon component for Geomicons Open

[View Demo](http://jxnblk.com/react-geomicons)

## Getting Started

```bash
npm install --save react-geomicons
```

```js
var React = require('react');
var Icon = require('react-geomicons');

module.exports = React.createClass({
  render: function() {
    <MyComponent>
      <Icon name="bookmark" />
    </MyComponent>
  }
});
```

### Props
React-geomicons passes all props to the SVG element, in addition to the following:

- `name` - camel cased icon name
- `width` - default `1em` (inherits size from parent element)
- `height` - default `1em` (inherits size from parent element)
- `fill` - default `currentColor` (inherits color from parent element)

See [Geomicons Open](https://github.com/jxnblk/geomicons-open) for the list of available icons.

MIT License

