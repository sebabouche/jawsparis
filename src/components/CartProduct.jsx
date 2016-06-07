import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import QuantitySelector from './QuantitySelector'

export default class CartProduct extends Component {
  render() {
    const {
      product,
      onAddToCartClicked,
      onRemoveFromCartClicked,
      edit
    } = this.props

    let buttonQuantity= ""

    if (!edit){
      buttonQuantity = <QuantitySelector
        productId={product.get('id')}
        onAddToCartClicked={onAddToCartClicked}
        onRemoveFromCartClicked={onRemoveFromCartClicked} />
    }

    return (
      <div className="uk-grid uk-grid-small">
        <div className="uk-width-1-2">
          <strong>{product.get('title')}</strong><br />
          {product.get('price_cents')/100}€
        </div>
        <div className="uk-width-1-2">
        {buttonQuantity}
        </div>
      </div>
    )
  }
}

CartProduct.propTypes = {
  product: ImmutablePropTypes.map,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired

}
