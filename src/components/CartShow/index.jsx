import React from 'react'

export default class CartShow extends React.Component {
  render () {
    const categories = data.shoppingBag.categories.map((category) => {
      const product_names = category.products.map((product) => {
        return (
          <li key={product.id}>
            {product.name}
          </li>
        )
      })
      const product_quantities = category.products.map((product) => {
        return (
          <li key={product.id}>
            <p className="uk-float-right">{product.quantity}</p>
          </li>
        )
      })

      return (
        <div key={category.id}>
          <h4 className="uk-text-center uk-margin-bottom-remove">{category.title}</h4>
          <div className="uk-grid">
            <div className="uk-width-3-4">
              <ul className="uk-list uk-margin-bottom">{product_names}</ul>
            </div>
            <div className="uk-width-1-4">
              <ul className="uk-list uk-margin-bottom">{product_quantities}</ul>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        {categories}
      </div>
    )

  }
}
