
import readme from '../README.md'
import { colors } from './styles'

const Readme = () => {
  const cx = {
    lineHeight: 1.5,
    padding: 32,
    maxWidth: 640,
    'a': {
      color: colors.blue
    }
  }

  return (
    <div className={cx}
      dangerouslySetInnerHTML={{ __html: readme }} />
  )
}

export default Readme

