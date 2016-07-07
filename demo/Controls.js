
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
    select: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'bold',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      margin: 0,
      marginLeft: 8,
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
    }
  }

  return (
    <div {...props}>
      <label htmlFor={name}>{label}</label>
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

const Controls = ({
  size,
  color,
  onChange
}) => {
  const cx = {
    root: {
      fontSize: 14,
      display: 'flex',
      alignItems: 'center'
    },
    firstSelect: {
      marginLeft: 'auto'
    },
    select: {
      marginLeft: 16
    }
  }

  const colorOptions = Object.keys(colors)
    .filter(key => !/black/.test(key))
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
          { children: '32' },
          { children: '64' },
          { children: '128' },
          { children: '256' }
        ]} />
      <Select
        name='color'
        label='Color'
        value={color}
        className={cx.select}
        onChange={onChange}
        options={colorOptions} />
    </div>
  )
}

export default Controls

