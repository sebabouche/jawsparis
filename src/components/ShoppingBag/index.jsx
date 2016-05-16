import React from 'react'
import styles from './styles.css'

import {data} from '../../data/data'

export default class ShoppingBag extends React.Component {
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
      <div className={styles.container}>
        <div className="uk-block">
          <div className="uk-panel">
            <h2 className="uk-text-center">Mon cabas</h2>
            {categories}
            <button className="uk-button uk-button-success uk-width-1-1">Merci, ce sera tout!</button>
          </div>
        </div>

      </div>
    )
  }
}
