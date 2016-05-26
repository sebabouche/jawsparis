import React from 'react'
import { Route, IndexRoute } from 'react-router'

import JawsApp from './containers/AppContainer'
import Landing from './containers/LandingContainer'

import OtherEvents from './containers/OtherEvents'

export default (
  <Route path='/' component={JawsApp}>
    <IndexRoute component={Landing} />
    <Route path='products' component={ShopContainer} />
  </Route>
)
