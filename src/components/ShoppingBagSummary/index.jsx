import React from 'react'

import {data} from '../../data/data'

export default class ShoppingBagSummary extends React.Component {
  render () {
    const categories = data.shoppingBag.categories.map((category) => {
      const products = category.products.map((product) => {
        return (
          <div className="uk-grid" key={product.id}>
            <div className="uk-width-1-2">{product.name}</div>
            <div className="uk-width-1-2 ">
              <div className="uk-float-right">
                <span className="uk-margin-small-left uk-margin-small-right">{product.quantity}</span>
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

    return (
      <div>
        {categories}
      </div>
    )

  }
}
