import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Landing from '../Landing';
import Day from '../Day';


export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Landing}/>
        <Route path="/:index" component={Day} />
      </Router>
    )
  }
}
