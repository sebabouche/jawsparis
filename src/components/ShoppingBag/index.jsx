import React from 'react'
import styles from './styles.css'

import ShoppingBagFields from '../ShoppingBagFields'

export default class ShoppingBag extends React.Component {
  render () {

    return (
      <div className={styles.container}>
        <div className="uk-block">
          <div className="uk-panel">
            <h2 className="uk-text-center">Mon cabas</h2>
            <ShoppingBagFields />
            <button className="uk-button uk-button-success uk-width-1-1">Merci, ce sera tout!</button>
          </div>
        </div>

      </div>
    )
  }
}
