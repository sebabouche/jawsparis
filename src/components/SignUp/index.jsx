import styles from './styles.css';

import React from 'react';

import SignUpForm from '../SignUpForm'

export default class SignUp extends React.Component{
  render() {
    return(
      <section className="uk-block uk-block-muted" id="section3">
        <div className="uk-height-viewport">
          <h2 className="uk-text-center">S'inscrire</h2>
          <SignUpForm />
        </div>
      </section>
    );
  }
};
