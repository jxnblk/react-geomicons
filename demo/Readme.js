
import React from 'react'
import cxs from 'cxs'
import readme from '../README.md'
import { colors } from './styles'

const Readme = () => {
  const cx = cxs({
    lineHeight: 1.5,
    padding: 32,
    maxWidth: 640,
    'a': {
      color: colors.blue
    }
  })

  return (
    <div className={cx}
      dangerouslySetInnerHTML={{ __html: readme }} />
  )
}

export default Readme

