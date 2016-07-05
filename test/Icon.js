
import test from 'ava'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import paths from 'geomicons-open/src/js/paths'
import Icon from '../src/Icon'

const r = TestUtils.createRenderer()

test('renders', t => {
  t.notThrows(() => {
    r.render(<Icon />)
  })
})

test('renders an SVG', t => {
  r.render(<Icon />)
  const tree = r.getRenderOutput()
  t.is(tree.type, 'svg')
})

test('has default props', t => {
  t.plan(2)
  r.render(<Icon />)
  const tree = r.getRenderOutput()
  t.is(tree.props['data-id'], 'geomicon-warning')
  t.is(tree.props.viewBox, '0 0 32 32')
})

Object.keys(paths).forEach(key => {
  test(`sets ${key} icon`, t => {
    t.plan(2)
    r.render(<Icon name={key} />)
    const tree = r.getRenderOutput()
    t.is(tree.props['data-id'], `geomicon-${key}`)
    t.is(tree.props.children.props.d, paths[key])
  })
})

test('sets fill prop', t => {
  r.render(<Icon fill='tomato' />)
  const tree = r.getRenderOutput()
  t.is(tree.props.fill, 'tomato')
})

test('sets width and height props', t => {
  t.plan(2)
  r.render(<Icon width='32' height='32' />)
  const tree = r.getRenderOutput()
  t.is(tree.props.width, '32')
  t.is(tree.props.height, '32')
})

