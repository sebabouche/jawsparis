import React from 'react';
import { Experiment, Variant } from 'react-ab';

import './index.css';

import Header from '../Header';
import Navbar from '../Navbar';
import Problem from '../Problem';
import Solution from '../Solution';
import SignUp from '../SignUp';

import {data} from '../../data/data.js';

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
          <Header title={variant.title} illustrations={variant.illustrations} />
          <Problem problem={variant.problem} />
          <Solution solution={variant.solution} />
          <SignUp />
        </Variant>
      )
    });

    return (
      <div className="uk-height-1-1">
        <Experiment onChoice={this.choice} name="landing">
          { landing_variants }
        </Experiment>
      </div>
    );
  }
};
