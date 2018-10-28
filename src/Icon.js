import React from 'react'
import PropTypes from 'prop-types'
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
  name: PropTypes.oneOf(Object.keys(paths)),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fill: PropTypes.string
}

export default Icon

