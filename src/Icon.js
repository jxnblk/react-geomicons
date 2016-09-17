
import React from 'react'
import paths from 'geomicons-open'

const Icon = ({
  name = 'warning',
  size = '1em',
  fill = 'currentColor',
  width,
  height,
  ...props
}) => {
  const path = paths[name]

  return (
    <svg {...props}
      width={width || size}
      height={height || size}
      fill={fill}
      data-id={`geomicon-${name}`}
      viewBox='0 0 32 32'>
      <path d={path} />
    </svg>
  )
}

Icon.propTypes = {
  name: React.PropTypes.oneOf(Object.keys(paths)),
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  fill: React.PropTypes.string
}

export default Icon

