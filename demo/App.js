
import React from 'react'
import cxs from 'cxs'
import Preview from './Preview'
import Readme from './Readme'
import Footer from './Footer'
import { colors } from './styles'

const cx = cxs({
  fontFamily: '-apple-system, sans-serif',
  lineHeight: 1.5
})

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      color: colors.cyan,
      size: 48,
      inverted: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    const n = parseFloat(value)
    const val = isNaN(n) ? value : n
    this.setState({ [name]: val })
  }

  toggle (key) {
    const val = !this.state[key]
    this.setState({ [key]: val })
  }

  render () {
    return (
      <div className={cx}>
        <Preview {...this.state}
          toggle={this.toggle}
          onChange={this.handleChange} />
        <Readme />
        <Footer />
      </div>
    )
  }
}

export default App

