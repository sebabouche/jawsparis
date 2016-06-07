import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, checkout } from '../actions'
import { getCartProducts, getTotal } from '../reducers'

import Cart from '../components/Cart'
import CartProduct from '../components/CartProduct'

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit
    }
  }
  toggleEditCart(){
    this.setState({edit: !this.state.edit})
  }
  render() {

    const { cartProducts, total, addToCart, removeFromCart, checkout, edit, checkoutPage } = this.props

    return (
      <Cart
        edit={this.state.edit}
        onToggleEditCartClicked={() => this.toggleEditCart()}
        checkoutPage={checkoutPage}
        total={total}
        products={cartProducts} >
        {cartProducts.map(product =>
          <CartProduct
            edit={this.state.edit}
            key={product.id}
            productId={product.id}
            title={product.title}
            price={product.price_cents}
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

// CartContainer.propTypes = {
//   cartProducts: ImmutablePropTypes.mapOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price_cents: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired
//   })).isRequired,
//   total: PropTypes.number,
//   addToCart: PropTypes.func.isRequired,
//   removeFromCart: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state),
    total: getTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(CartContainer)
