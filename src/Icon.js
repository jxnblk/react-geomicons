
import React from 'react'
import paths from 'geomicons-open/dist/paths.json'

const Icon = ({
  name = 'warning',
  width = '1em',
  height = '1em',
  fill = 'currentColor',
  ...props
}) => {
  const path = paths[name]

  return (
    <svg {...props}
      width={width}
      height={height}
      fill={fill}
      data-id={`geomicon-${name}`}
      viewBox='0 0 32 32'>
      <path d={path} />
    </svg>
  )
}

export default Icon

