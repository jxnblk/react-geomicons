
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import paths from 'geomicons-open'
import Icon from '../src/Icon'

test('renders', t => {
  t.notThrows(() => {
    shallow(<Icon />)
  })
})

test('renders an SVG', t => {
  const wrapper = shallow(<Icon />)
  t.is(wrapper.type(), 'svg')
})

test('has default props', t => {
  t.plan(2)
  const wrapper = shallow(<Icon />)
  t.is(wrapper.find('svg').props()['data-id'], 'geomicon-warning')
  t.is(wrapper.find('svg').props().viewBox, '0 0 32 32')
})

Object.keys(paths).forEach(key => {
  test(`sets ${key} icon`, t => {
    t.plan(2)
    const wrapper = shallow(<Icon name={key} />)
    t.is(wrapper.find('svg').props()['data-id'], `geomicon-${key}`)
    t.is(wrapper.find('path').props().d, paths[key])
  })
})

test('sets fill prop', t => {
  const wrapper = shallow(<Icon fill='tomato' />)
  t.is(wrapper.props().fill, 'tomato')
})

test('sets width and height props', t => {
  t.plan(2)
  const wrapper = shallow(<Icon size='32' />)
  t.is(wrapper.find('svg').props().width, '32')
  t.is(wrapper.find('svg').props().height, '32')
})

test('warns when passing invalid icon key to name prop', t => {
  let callCount = 0
  console.error = (text) => {
    callCount++
  }
  shallow(<Icon name='foo' />)
  t.is(callCount, 1)
})

test('does not pass component props to DOM element', t => {
  const wrapper = shallow(<Icon size={32} name='bookmark' />)
  const props = wrapper.find('svg').props()
  t.falsy(props.size)
  t.falsy(props.name)
})

