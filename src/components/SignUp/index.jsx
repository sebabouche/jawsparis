import styles from './styles.css';
import classNames from 'classnames';

import React from 'react';

import SignUpForm from '../SignUpForm'

export default class SignUp extends React.Component{
  render() {
    return(
      <section id="section3">
        <div className="uk-block uk-block-muted">
          <div className="uk-container uk-container-center uk-width-1-1 uk-width-medium-2-3 uk-width-large-1-3">
            <div className="uk-text-center">
              <h1 className="ja-font-special">Je m'inscris !</h1>
              <img src={require('./images/dot.png')} className={styles.dot}/>
            </div>

            <SignUpForm />
          </div>
        </div>
      </section>
    );
  }
};
