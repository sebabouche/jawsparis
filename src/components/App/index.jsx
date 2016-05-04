import React from 'react';

import './index.css';
import { data } from '../../sample_data/data.js';

import Header from '../Header';

export default class App extends React.Component{
  render() {
    return(
      <div className="uk-height-1-1">
        <Header />
      </div>
    );
  }
}
