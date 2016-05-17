import React from 'react'

import ShoppingBag from '../ShoppingBag'
import Delivery from '../Delivery'
import Payment from '../Payment'

export default class Checkout extends React.Component {
  render () {
    return (
      <div>
        <ShoppingBag />
        <Delivery />
        <Payment />
      </div>
    )
  }
}
