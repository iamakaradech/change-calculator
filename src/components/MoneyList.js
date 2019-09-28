import React from 'react'
import Money from './Money'
import { MoneyContext } from '../contexts/money-context'
import _chunk from 'lodash.chunk'

export default class MoneyList extends React.Component {
  render () {
    return (
      <MoneyContext.Consumer>
        {({ money }) => (
          <div>
            <h3>Your change is</h3>
            { _chunk(money, 2).map((chunkMoney, chunkIndex) => {
              return (
                <div className="row" key={`list-${chunkIndex}`}>
                  {chunkMoney.map((m, index) => {
                    return (
                      <div className="col-12 col-md-6" key={`money-${chunkIndex}-${index}`}>
                        <Money money={m} />
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </MoneyContext.Consumer>
    )
  }
}
