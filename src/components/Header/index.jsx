import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

import SignUpForm from '../SignUpForm';

export default class Header extends React.Component {
  render() {
    const illustrations = this.props.illustrations.map((illustration) => {
      const illusStyle = {
        backgroundImage: 'url(' + illustration.imageUrl + ')',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      };

      return(
        <li
          key={illustration.id}
          style={illusStyle}
        >
        </li>
      )
    })
    return (
      <div className="uk-height-1-1 uk-cover-background">
        <top className="uk-width-large-1-5 uk-width-5-6 uk-container-center uk-position-top uk-text-center uk-block" style={{zIndex: '1200'}}>
          <img className="imageTest" src={require('./images/logo.png')} />
        </top>

        <bottom className="uk-position-bottom uk-container-center uk-text-center uk-width-large-2-3 uk-width-5-6 uk-block uk-margin-large" style={{zIndex: '1200'}}>
          <h1 className="uk-contrast uk-heading-large">
            {this.props.title}
          </h1>
          <SignUpForm />
        </bottom>

        <ul className="uk-slideshow uk-slideshow-fullscreen" data-uk-slideshow="{autoplay: true}">
          {illustrations}
        </ul>
      </div>
    );
  }
};
