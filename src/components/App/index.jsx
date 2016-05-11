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
  clear () {
    this.refs.exLanding.clearCookie();
    window.location.reload();
  }

  choose () {
    this.refs.exLanding.chooseVariant();
  }


  choice (experiment, variant) {
    // this is where you want to setup tracking variables.
    mixpanel.register({
      "landing": variant
    });
  }

  render () {
    const landing_data = data.landings;
    const landing_variants = landing_data.map(variant => {
      return(
        <Variant key={variant.id} name={variant.name} >
          <Header title={variant.title} image={variant.imageUrl} />
          <Problem problem={variant.problem} />
          <Solution solution={variant.solution} />
          <SignUp />
        </Variant>
      )
    });

    return (
      <div className="uk-height-1-1">
        <Experiment ref="exLanding" onChoice={this.choice} name="landing">
          { landing_variants }
        </Experiment>
        <div className="uk-container uk-container-center">
          <div className="uk-text-center">
            <button onClick={this.clear.bind(this)} href="" className="uk-button uk-button-mini uk-button-primary">Effacer cookie et recharger</button>
            <button onClick={this.choose.bind(this)} href=""  className="uk-button uk-button-mini uk-button-success">Autre variante</button>
          </div>
        </div>
      </div>
    );
  }
};
