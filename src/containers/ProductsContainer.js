import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getAddedIds, getCartProductsQuantity } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class ProductsContainer extends Component {
  render() {
    const { addedIds, products, cartProductsQuantity } = this.props

    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            addedIds={addedIds}
            product={product}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={() => this.props.addToCart(product.id)}
            onRemoveFromCartClicked={() => this.props.removeFromCart(product.id)} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  addedIds: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
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
    products: getVisibleProducts(state.products),
    cartProductsQuantity: getCartProductsQuantity(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsContainer)
