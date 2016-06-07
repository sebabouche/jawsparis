import React, {Component, PropTypes} from 'react'

import styles from './styles.css'

export default class QuantitySelector extends Component {
  render() {
    const {
      productId,
      cartProductsQuantity,
      onAddToCartClicked,
      onRemoveFromCartClicked } = this.props

    return (
      <div className="uk-width-medium-1-2
      uk-width-small-1-3 uk-container-center">

        <button
          className="uk-button uk-button-success jaws-button uk-float-left uk-icon-minus"
          onClick={onRemoveFromCartClicked}
          type="button">
        </button>


          <p className="ja-quantity-product uk-float-left">
              {cartProductsQuantity[productId]}
          </p>


            <button
              className="uk-button uk-float-left uk-button-success jaws-button uk-icon-plus"
              onClick={onAddToCartClicked}
              type="button">
            </button>

      </div>
    )
  }
}
