import React, { Component, PropTypes } from 'react'

import QuantitySelector from './QuantitySelector'

export default class CartProduct extends Component {
  render() {
    const {
      productId, price, quantity, title,
      addedIds, cartProductsQuantity,
      onAddToCartClicked, onRemoveFromCartClicked } = this.props

    return (
      <div className="uk-grid uk-grid-small">
        <div className="uk-width-1-2">
          <strong>{title}</strong><br />
          {price/100}€
        </div>
        <div className="uk-width-1-2">
          <QuantitySelector
            productId={productId}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={onAddToCartClicked}
            onRemoveFromCartClicked={onRemoveFromCartClicked} />
        </div>
      </div>
    )
  }
}

CartProduct.propTypes = {
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  addedIds: PropTypes.array.isRequired,
  cartProductsQuantity: PropTypes.object.isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired

}