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
          <Header title={variant.title} illustrations={variant.illustrations} />
          <Problem problem={variant.problem} />
          <Solution solution={variant.solution} />
          <SignUp />
        </Variant>
      )
    });

    return (
      <div className="uk-height-1-1">
        <nav className="uk-navbar">
          <a href="" className="uk-navbar-brand">Admin</a>
          <ul className="uk-navbar-nav">
              <li role="presentation"><a onClick={this.clear} href="#">Effacter le cookie and recharger la page</a></li>
              <li role="presentation"><a onClick={this.choose} href="#">Choisir une autre variante</a></li>
          </ul>
        </nav>
        <Experiment ref="exLanding" onChoice={this.choice} name="landing">
          { landing_variants }
        </Experiment>
      </div>
    );
  }
};
