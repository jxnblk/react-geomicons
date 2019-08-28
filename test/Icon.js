import test from 'ava'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import paths from 'geomicons-open'
import Icon from '../src/Icon'

const renderJSON = el => TestRenderer.create(el).toJSON()

test('renders', t => {
  const json = renderJSON(<Icon />)
  t.snapshot(json)
})

test('sets width and height props', t => {
  const json = renderJSON(
    <Icon size='32' />
  )
  t.is(json.props.width, '32')
  t.is(json.props.height, '32')
})

test('sets fill', t => {
  const json = renderJSON(
    <Icon fill='tomato' />
  )
  t.is(json.props.fill, 'tomato')
})

Object.keys(paths).forEach(key => {
  test(`sets ${key} icon`, t => {
    const json = renderJSON(<Icon name={key} />)
    const [ path ] = json.children
    t.is(json.props['data-id'], `geomicon-${key}`)
    t.is(path.props.d, paths[key])
  })
})
