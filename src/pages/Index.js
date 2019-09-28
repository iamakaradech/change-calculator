import React from 'react'
import ChangeInput from '../components/ChangeInput'
import MoneyList from '../components/MoneyList'
import { MoneyContext } from '../contexts/money-context'
import { getMoney } from '../services/money'
import { calculate } from '../services/calculator'

export default class Index extends React.Component {
  constructor () {
    super()
    this.state = {
      money: []
    }

    this.calculateChange = (change) => {
      this.setState({ money: calculate(this.state.money, change) })
    }
  }

  componentDidMount () {
    this.setState({ money: getMoney() })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-12 mt-2">
          <MoneyContext.Provider value={{ money: this.state.money, calculateChange: this.calculateChange }}>
            <ChangeInput />
            <MoneyList />
          </MoneyContext.Provider>
        </div>
      </div>
    )
  }
}
