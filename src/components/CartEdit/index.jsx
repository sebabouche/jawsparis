import React from 'react'
import styles from './styles.css'

import Cart from '../Cart'
import LinkToCheckout from '../LinkToCheckout'

export default class CartEdit extends React.Component {
  render () {

    return (
      <div className={styles.container}>
        <div className="uk-block">
          <div className="uk-panel">
            <h2 className="uk-text-center">Mon cabas</h2>
            <Cart />
            <LinkToCheckout />
          </div>
        </div>
      </div>
    )
  }
}
