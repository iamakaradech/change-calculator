import React from 'react'
import PropTypes from 'prop-types'

export default class Money extends React.Component {
  render () {
    return (
      <div className="row m-1 money-item border">
        <div className="col-12 border-bottom card-header">
          <span className="title"><strong>{this.props.money.name}</strong></span>
        </div>
        <div className="col-6 p-1 text-center">
          <img src={this.props.money.image}
            className="img-fluid money-image"
            alt={this.props.money.name} />
        </div>
        <div className="col-6 text-center quantity border-left">
          <span>{ this.props.money.quantity | 0 }</span>
        </div>
      </div>
    )
  }
}

Money.propTypes = {
  money: PropTypes.object
}
