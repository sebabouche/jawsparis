import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import ShopContainer from './ShopContainer'
import Landing from '../components/Landing'
import CheckoutContainer from './CheckoutContainer'
import Thankyou from '../components/Thankyou'

export default class App extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Landing} />
          <Route path="/products" component={ShopContainer} />
          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/thankyou" component={Thankyou} />
        </Router>
      </Provider>
    )
  }
}
