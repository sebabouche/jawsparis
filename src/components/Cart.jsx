import React, { Component, PropTypes } from 'react'

import CartProduct from './CartProduct'
import LinkToCheckout from './LinkToCheckout'

export default class Cart extends Component {
  render() {
    const { products, total, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      this.props.children

    return (
      <div>
        <div>
        {this.props.children}
        </div>
        <p>Livraison: 3€</p>
        <p>Total: {total/100 + 3}€</p>
        <LinkToCheckout disabled={hasProducts ? '' : 'disabled'} />
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  children: PropTypes.node,
}
