import React from 'react'

import {data} from '../../data/data'

export default class ShoppingBagFields extends React.Component {
  render () {
    const categories = data.shoppingBag.categories.map((category) => {
      const products = category.products.map((product) => {
        return (
          <div className="uk-grid" key={product.id}>
            <div className="uk-width-1-2">{product.name}</div>
            <div className="uk-width-1-2">
              <button className="uk-button"><i className="uk-icon-plus"></i></button>
              {product.quantity}
              <button className="uk-button"><i className="uk-icon-minus"></i></button>
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

    return (
      <div>
        {categories}
      </div>
    )

  }
}
