import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import Landing from '../Landing'
import ConnectedProductPage from '../ProductPage'
import Checkout from '../Checkout'
import Thankyou from '../Thankyou'

export default class App extends React.Component {
  render() {
    console.log("Store state in App: ", this.props.store.getState())
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={Landing} />
          <Route path="/products" component={ConnectedProductPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thankyou" component={Thankyou} />
        </Router>
      </Provider>
    )
  }
}
