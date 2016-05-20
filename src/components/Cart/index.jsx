import React from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'

export class Cart extends React.Component {
  render () {
    const cartData = this.props.cart.toJS() || undefined
    let categories = undefined
    if (cartData !== undefined) {
      categories = cartData.categories.map((category) => {
        console.log("category:", category.title)
        const products = category.products.map((product) => {
          console.log("product:", product.name)
          return (
            <div className="uk-grid" key={product.id}>
              <div className="uk-width-1-2">{product.name}</div>
              <div className="uk-width-1-2 ">
                <div className="uk-float-right">
                  <button className="uk-button uk-button-danger"><i className="uk-icon-minus"></i></button>
                  <span className="uk-margin-small-left uk-margin-small-right">{product.quantity}</span>
                  <button className="uk-button uk-button-success"><i className="uk-icon-plus"></i></button>
                </div>
              </div>
            </div>
          )
        })

        return (
          <div key={category.id}>
            <h3>{category.title}</h3>
            <ul className="uk-list">{products}</ul>
          </div>
        )
      })
    } else {
      categories = "<p> Votre cabas est encore vide</p>"
    }

    return (
      <div>
        {categories}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  console.log("Cart State:", state)
  return {
    cart: state.get('cart')
  }
}

const ConnectedCart = connect(mapStateToProps)(Cart)
export default ConnectedCart
