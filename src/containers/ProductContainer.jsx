import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'

import {
  getProduct,
  getCartProduct
} from '../reducers'

import ProductItem from '../components/ProductItem'


class ProductContainer extends Component {
  render() {
    const {
      productId, product, cartProduct, addToCart, removeFromCart } = this.props

    return (
      <div>{productId}</div>
    )
  }
}

// ProductContainer.propTypes = {
//   product: ImmutablePropTypes.map.isRequired,
//   cartProduct: PropTypes.oneOfType(
//     ImmutablePropTypes.map,
//     PropTypes.bool).isRequired,
//   addToCart: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired,
// }

function mapStateToProps(state) {
  return {
    product: getProduct(state, this.props.productId),
//    cartProduct: getCartProduct(state, this.props.productId)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, getCartProduct }
)(ProductContainer)
