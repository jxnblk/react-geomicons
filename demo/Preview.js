
import React from 'react'
import cxs from 'cxs'
import Icon from '..'
import paths from 'geomicons-open'
import Controls from './Controls'

const Preview = ({
  color,
  inverted,
  size,
  onChange
}) => {
  const icons = Object.keys(paths)

  const cx = {
    root: cxs({
      fontSize: size,
      textAlign: 'center',
      padding: 32,
      minHeight: '80vh',
      color: inverted ? color : '#444',
      backgroundColor: inverted ? '#444' : '#fff'
    }),
    iconCell: cxs({
      display: 'inline-block',
      width: 1.25 * size,
      margin: size / 2
    }),
    icons: cxs({
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
        onChange={onChange} />
      <div className={cx.icons}>
        {icons.map((key, i) => (
          <div key={i} className={cx.iconCell}>
            <Icon
              name={key}
              fill={color}
              className={cx.icon}
            />
            {size > 32 && (
              <div className={cx.label}>{key}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview

