import React from 'react'

import ShoppingBagFields from '../ShoppingBagFields'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends React.Component {
  render () {
    return (
      <div className="uk-container uk-container-center">
        <section className="uk-block uk-block-large">
          <div className="uk-text-center"></div>
          <h2 className="uk-text-center">
            <span className="uk-badge uk-badge-notification">1</span>
            Votre cabas
          </h2>
          <ShoppingBagFields />
        </section>
        <section className="uk-block uk-block-large">
          <h2 className="uk-text-center">
            <span className="uk-badge uk-badge-notification">2</span>
            Livraison
          </h2>
          <DeliveryFields />
        </section>
        <section className="uk-block uk-block-large">
        <h2 className="uk-text-center">
          <span className="uk-badge uk-badge-notification">3</span>
          Paiement
        </h2>
          <PaymentFields />
        </section>
      </div>
    )
  }
}
