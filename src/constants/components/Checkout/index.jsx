import React, {Component} from 'react'

import CartContainer from '../../containers/CartContainer'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends Component {

  render () {
    return (
      <div className="uk-container uk-container-center uk-width-1-1 uk-width-medium-4-5 uk-width-large-3-5">
        <CartContainer edit={true} checkoutPage={true}/>
        <DeliveryFields />
        <PaymentFields />
      </div>
    )
  }
}
