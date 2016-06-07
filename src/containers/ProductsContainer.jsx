import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'
import { getProducts, getAddedIds, getCartProductsQuantity } from '../reducers'

import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'


class ProductsContainer extends Component {
  render() {
    const {
      addedIds, products,
      cartProductsQuantity,
      addToCart, removeFromCart, deliveryLocation } = this.props

    return (
      <ProductsList title="Products" addedIds={addedIds.length > 0}>
        {products.map(product =>
          <ProductItem
            key={product.id}
            addedIds={addedIds}
            product={product}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={() =>{addToCart(product.id)}}
            onRemoveFromCartClicked={() => removeFromCart(product.id)} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  addedIds: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
  })).isRequired,
  cartProductsQuantity: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    addedIds: getAddedIds(state),
    products: getProducts(state),
    cartProductsQuantity: getCartProductsQuantity(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsContainer)
