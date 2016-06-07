import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'

import {
  getProducts,
  getCartProducts,
  getCartProduct
} from '../reducers'

import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'


class ProductsContainer extends Component {
  render() {
    const {
      products, cartProducts,
      getCartProduct,
      addToCart, removeFromCart } = this.props

    return (
      <ProductsList title="Products" addedIds={cartProducts.size > 0}>
        {products.map(product =>
          <ProductItem
            key={product.get('id')}
            product={product}
            getCartProduct={getCartProduct}
            onAddToCartClicked={() => addToCart(product.get('id'))}
            onRemoveFromCartClicked={() => removeFromCart(product.get('id'))} />
        )}
      </ProductsList>
    )
  }
}

// ProductsContainer.propTypes = {
//   products: ImmutablePropTypes.list.isRequired,
//   cartProducts: ImmutablePropTypes.map.isRequired,
//   addToCart: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired,
// }

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    cartProducts: getCartProducts(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, getCartProduct }
)(ProductsContainer)
