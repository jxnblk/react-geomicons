
import React from 'react'
import cxs from 'cxs'
import Icon from '..'
import paths from 'geomicons-open'
import Controls from './Controls'

const Preview = ({
  color,
  inverted,
  size,
  toggle,
  onChange
}) => {
  const icons = Object.keys(paths)
    .filter(k => !/github|facebook|twitter/.test(k))

  const cx = {
    root: cxs({
      textAlign: 'left',
      padding: 0,
      color: color,
      backgroundColor: inverted ? '#111' : '#fff'
    }),
    title: cxs({
      margin: 32,
    }),
    iconCell: cxs({
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64, // 1.25 * size,
      height: 64,
      margin: 32
    }),
    icons: cxs({
      fontSize: size,
      marginTop: 16,
    }),
    icon: cxs({
      width: '1em',
      height: '1em',
    }),
    label: cxs({
      fontSize: 12
    })
  }

  return (
    <div className={cx.root}>
      <Controls
        color={color}
        size={size}
        inverted={inverted}
        toggle={toggle}
        onChange={onChange} />
      <h1 className={cx.title}>
        React Geomicons
      </h1>
      <div className={cx.icons}>
        {icons.map((key, i) => (
          <div key={i} className={cx.iconCell}>
            <Icon
              name={key}
              fill={color}
              className={cx.icon}
            />
            {/* size > 32 && (
              <div className={cx.label}>{key}</div>
              ) */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview

