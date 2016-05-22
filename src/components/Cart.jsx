import React, { Component, PropTypes } from 'react'

import CartProduct from './CartProduct'
import LinkToCheckout from './LinkToCheckout'

export default class Cart extends Component {
  render() {
    const { products, total, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      products.map(product =>
        <CartProduct
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}/>
    )

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <LinkToCheckout disabled={hasProducts ? '' : 'disabled'} onClick={this.props.onCheckoutClicked}/>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
