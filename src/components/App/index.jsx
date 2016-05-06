import React from 'react';
import { Experiment, Variant } from 'react-ab';

import './index.css';

import Header from '../Header';
//import Navbar from '../Navbar';
//import Body from '../Body';

import { data } from '../../data.js';

export default class App extends React.Component{
  choice (experiment, variant, index) {
    mixpanel.register({
      "landing": variant
    });
  }

  render () {
    const landing_data = data.landings;
    const landing_variants = landing_data.map(variant => {
      return(
        <Variant key={variant.id} name={variant.name} >
          <Header title={variant.title} />
        </Variant>
      )
    });

    return (
      <div>
        <Experiment onChoice={this.choice} name="landing">
          { landing_variants }
        </Experiment>
      </div>
    );
  }
};
