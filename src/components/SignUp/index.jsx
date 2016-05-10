import styles from './styles.css';
import classNames from 'classnames';

import React from 'react';

import SignUpForm from '../SignUpForm'

export default class SignUp extends React.Component{
  render() {
    return(
      <section id="section3">
        <div className="uk-grid uk-grid-width-medium-1-2">
          <div className="uk-block uk-block-muted">
            <div className="uk-container uk-container-center uk-width-2-3">
              <div className="uk-text-center">
                <h1 className="ja-font-special">Je m'inscris !</h1>
                <img src={require('./images/dot.png')} className={styles.dot}/>
              </div>

              <SignUpForm />
            </div>
          </div>
          <div className={classNames("uk-vertical-align uk-text-center", styles.background)}>
            <div className="uk-vertical-align-middle uk-container-center">
              <img src={require('./images/logo-ornement-cartouche.svg')} className="uk-width-1-1"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
