import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, checkout } from '../actions'
import { getAddedIds, getTotal, getCartProducts, getCartProductsQuantity } from '../reducers'

import Checkout from '../components/Checkout'
import CartContainer from './CartContainer'

class CheckoutContainer extends Component {
  render() {
    const {
      products,
      total,
      addToCart,
      removeFromCart,
      checkout
    } = this.props

    return (
      <Checkout />
    )
  }
}

CheckoutContainer.propTypes = {
//  products: PropTypes.arrayOf(PropTypes.shape({
//    id: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    price_cents: PropTypes.number.isRequired,
//    quantity: PropTypes.number.isRequired
//  })).isRequired,
  total: PropTypes.number,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(CheckoutContainer)
