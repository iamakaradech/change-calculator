import React from 'react'
import { MoneyContext } from '../contexts/money-context'

export default class ChangeInput extends React.Component {
  constructor () {
    super()
    this.state = {
      change: 0,
      valid: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let change = event.target.value
    let validateRule = new RegExp(/^(\d+\.\d+)$|^(\d+)$/g)
    if (!change) {
      change = 0
    }
    if (!validateRule.test(change)) {
      this.setState({ valid: false })
      return
    }

    this.setState({ change })
    this.setState({ valid: true })
  }

  render () {
    return (
      <MoneyContext.Consumer>
        {({ calculateChange }) => (
          <div className="row mb-3 justify-content-center">
            <div className="col col-12 col-md-auto col-md-9 col-lg-9">
              <div className="input-group">
                <input type="text"
                  className="form-control form-control-lg text-right"
                  onChange={this.handleChange}
                  onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                      calculateChange(this.state.change)
                    }
                  }}
                  placeholder="Please input change ex: 199.99"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" onClick={() => {
                    if (this.state.valid) {
                      calculateChange(this.state.change)
                    }
                  }
                  }>Calculate</button>
                </div>
              </div>
              { !this.state.valid ? <span className="text-danger">Error: Invalid input</span> : '' }
            </div>
          </div>
        )}
      </MoneyContext.Consumer>
    )
  }
}
