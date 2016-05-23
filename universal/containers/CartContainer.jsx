import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, checkout } from '../actions'
import { getAddedIds, getTotal, getCartProducts, getCartProductsQuantity } from '../reducers'

import Cart from '../components/Cart'
import CartProduct from '../components/CartProduct'

class CartContainer extends Component {
  render() {
    const { addedIds, products, cartProductsQuantity, total, addToCart, removeFromCart, checkout } = this.props

    return (
      <Cart total={total} products={products} onCheckoutClicked={() => this.props.checkout()} >
        {products.map(product =>
          <CartProduct
            key={product.id}
            productId={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            addedIds={addedIds}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={() => addToCart(product.id)}
            onRemoveFromCartClicked={() => removeFromCart(product.id)} />
        )}
      </Cart>
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    addedIds: getAddedIds(state),
    products: getCartProducts(state),
    cartProductsQuantity: getCartProductsQuantity(state),
    total: getTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, checkout }
)(CartContainer)
