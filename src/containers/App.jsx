import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import ShopContainer from './ShopContainer'
import Landing from '../components/Landing'
import Checkout from '../components/Checkout'
import Thankyou from '../components/Thankyou'

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={Landing} />
          <Route path="/products" component={ShopContainer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thankyou" component={Thankyou} />
        </Router>
      </Provider>
    )
  }
}
