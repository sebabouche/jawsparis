import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Landing from '../Landing'
import ProductsContainer from '../ProductsContainer'
import Checkout from '../Checkout'
import Thankyou from '../Thankyou'

import {data} from '../../data/data'

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing} />
        <Route path="/:index" component={ProductsContainer} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thankyou" component={Thankyou} />
      </Router>
    )
  }
}
