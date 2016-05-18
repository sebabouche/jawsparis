import React from 'react'
import styles from './styles.css'

import ShoppingBagFields from '../ShoppingBagFields'
import LinkToCheckout from '../LinkToCheckout'

export default class ShoppingBag extends React.Component {
  render () {

    return (
      <div className={styles.container}>
        <div className="uk-block">
          <div className="uk-panel">
            <h2 className="uk-text-center">Mon cabas</h2>
            <ShoppingBagFields />
            <LinkToCheckout />
          </div>
        </div>
      </div>
    )
  }
}
