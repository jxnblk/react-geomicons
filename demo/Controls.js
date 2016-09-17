
import React from 'react'
import cxs from 'cxs'
import { colors } from './styles'

const Select = ({
  name,
  label,
  value,
  onChange,
  options = [],
  ...props
}) => {
  const cx = {
    label: cxs({
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)'
    }),
    select: cxs({
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'bold',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      margin: 0,
      marginLeft: 16,
      color: 'inherit',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderColor: 'inherit',
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      ':focus': {
        outline: 'none',
        boxShadow: `0 0 0 3px`
      }
    })
  }

  return (
    <div {...props}>
      <label
        className={cx.label}
        htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        className={cx.select}
        onChange={onChange}>
        {options.map((option, i) => (
          <option key={i} {...option} />
        ))}
      </select>
    </div>
  )
}

const ToggleButton = ({
  active,
  color,
  ...props
}) => {
  const cx = cxs({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'bold',
    display: 'inline-block',
    margin: 0,
    marginLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'inherit',
    borderRadius: 4,
    color: active ? 'black' : 'inherit',
    backgroundColor: active ? color : 'transparent',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    ':focus': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${color}`
    }
  })

  return (
    <button
      {...props}
      className={cx}
    />
  )
}

const Controls = ({
  size,
  color,
  inverted,
  toggle,
  onChange
}) => {
  const cx = {
    root: cxs({
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    }),
    firstSelect: cxs({
      marginLeft: 'auto'
    })
  }

  const colorOptions = Object.keys(colors)
    .filter(key => !/black|white/.test(key))
    .map(key => ({ value: colors[key], children: key }))

  return (
    <div className={cx.root}>
      <Select
        name='size'
        label='Size'
        value={size}
        onChange={onChange}
        className={cx.firstSelect}
        options={[
          { children: '8' },
          { children: '16' },
          { children: '24' },
          { children: '32' },
          { children: '48' },
          { children: '64' }
        ]} />
      <Select
        name='color'
        label='Color'
        value={color}
        onChange={onChange}
        options={colorOptions} />
      <ToggleButton
        active={inverted}
        color={color}
        onClick={e => toggle('inverted')}
        children='Inverted' />
    </div>
  )
}

export default Controls

