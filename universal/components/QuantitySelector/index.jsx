import React, {Component, PropTypes} from 'react'

export default class QuantitySelector extends Component {
  render() {
    const {
      productId,
      cartProductsQuantity,
      onAddToCartClicked,
      onRemoveFromCartClicked } = this.props

    return (
      <div className= "uk-grid uk-grid-collapse">
          <div className="uk-width-1-3">
            <button
              className="uk-button uk-button-success uk-width-1-1"
              onClick={onAddToCartClicked}
              type="button">
                <i className="uk-icon-plus"></i>
            </button>
          </div>

          <div className="uk-width-1-3">
            <p className="uk-text-center cartProductQuantity">
              {cartProductsQuantity[productId]}
            </p>
          </div>

          <div className="uk-width-1-3">
            <button
              className="uk-button uk-button-success uk-width-1-1"
              onClick={onRemoveFromCartClicked}
              type="button">
                <i className="uk-icon-minus"></i>
            </button>
          </div>
      </div>
    )
  }
}
