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
      <div className="uk-grid uk-grid-collapse uk-margin-top-remove">
      <div className="uk-width-1-3">
        <button
          className="uk-button uk-button-success uk-width-1-1"
          onClick={onRemoveFromCartClicked}
          type="button">
            <i className="uk-icon-minus"></i>
        </button>
      </div>

          <div className="uk-width-1-3">
            <p className="uk-text-center">
              {cartProductsQuantity[productId]}
            </p>
          </div>

          <div className="uk-width-1-3">
            <button
              className="uk-button uk-button-success uk-width-1-1"
              onClick={onAddToCartClicked}
              type="button">
                <i className="uk-icon-plus"></i>
            </button>
          </div>
      </div>
    )
  }
}
