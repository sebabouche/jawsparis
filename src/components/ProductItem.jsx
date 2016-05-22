import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { addedIds, product, cartProductsQuantity } = this.props

    console.log("addedIds", addedIds)
    console.log("cartProductsQuantity", cartProductsQuantity)

    const productQuantity = (id) => {
      return <span className="cartProductQuantity">{cartProductsQuantity[id]}</span> || ""
    }

    const removeButton = () => {
      if ((addedIds).indexOf(product.id) !== -1 ) {
        return (
          <button
            className="removeButton"
            onClick={this.props.onRemoveFromCartClicked}>
              Remove from cart
          </button>
        )
      }
      return <div></div>
    }
    return (
      <div
        style={{ marginBottom: 20 }}>
        <Product
          title={product.title}
          price={product.price} />
        <button
          className="addButton"
          onClick={this.props.onAddToCartClicked}>
          Add to cart
        </button>
        {removeButton()}
        {productQuantity(product.id)}

      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}
