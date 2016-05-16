import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Landing from '../Landing';
import ProductsContainer from '../ProductsContainer';

import {data} from '../../data/data';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Landing} />
        <Route path="/:index" component={ProductsContainer} />
      </Router>
    )
  }
}
