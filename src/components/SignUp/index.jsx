import styles from './styles.css';

import React from 'react';

import SignUpForm from '../SignUpForm'

export default class SignUp extends React.Component{
  render() {
    return(
      <section id="section3">
        <div className="uk-grid uk-grid-width-1-2">
          <div className="uk-block uk-width-1-3 uk-container-center">
            <h1 className="uk-text-center">Je m'inscris !</h1>
            <SignUpForm />
          </div>
          <div className={styles.jaSignUpBackground}>
          </div>
        </div>
      </section>
    );
  }
};
