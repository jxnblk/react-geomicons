
import React from 'react'
import cxs from 'cxs'
import Preview from './Preview'
import Readme from './Readme'
import Footer from './Footer'

const cx = cxs({
  fontFamily: '-apple-system, sans-serif',
  lineHeight: 1.5
})

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'white',
      size: 64,
      inverted: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    const n = parseFloat(value)
    const val = isNaN(n) ? value : n
    this.setState({ [name]: val })
  }

  render () {
    return (
      <div className={cx}>
        <Preview {...this.state}
          onChange={this.handleChange} />
        <Readme />
      </div>
    )
  }
}

export default App

