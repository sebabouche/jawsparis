import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'

import {
  getProducts,
  somethingInCart
} from '../reducers'

import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'


class ProductsContainer extends Component {
  render() {
    const {
      products, somethingInCart,
      addToCart, removeFromCart } = this.props

    console.log("products: ", products)

    return (
      <ProductsList somethingInCart={somethingInCart}>
        {products.map(product =>
          <ProductItem
            key={product.get('id')}
            product={product}
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
    somethingInCart: somethingInCart(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsContainer)
