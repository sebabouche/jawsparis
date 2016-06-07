import React, {Component} from 'react'

import CartContainer from '../../containers/CartContainer'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends Component {

  render () {
    return (
      <div className="uk-container uk-container-center uk-width-1-1 uk-width-medium-4-5 uk-width-large-3-5">
        <div className="uk-block uk-block-large">
        <h2 className="uk-text-center">
          <span><i className="uk-icon-shopping-cart"></i> Votre cabas</span>
        </h2>
        <CartContainer edit={true} checkoutPage={true}/>
        </div>
        <div className="uk-block uk-block-large">
        <h2 className="uk-text-center">
          <span><i className="uk-icon-truck"></i> Livraison</span>
        </h2>

        <DeliveryFields />
        </div>
        <div className="uk-block uk-block-large">
        <h2 className="uk-text-center">
        <span><i className="uk-icon-credit-card"></i> Paiement</span>
        </h2>
        <PaymentFields />
        </div>
      </div>
    )
  }
}
