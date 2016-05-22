import React, { Component, PropTypes } from 'react'

export default class CartProduct extends Component {
  render() {
    const { price, quantity, title } = this.props
    return <div> {title} - &#36;{price} {quantity ? `x ${quantity}` : null} </div>
  }
}

CartProduct.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}
