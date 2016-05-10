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
        <top className="uk-width-5-6 uk-width-medium-2-3 uk-large-1-2 uk-container-center uk-position-bottom uk-text-center uk-block" style={{zIndex: '1200'}}>
          <img className="uk-width-1-2 uk-width-small-1-4 uk-width-medium-1-2 uk-width-large-1-4" src={require('./images/logo-transp-cartouche.svg')} />
          <h1 className="uk-contrast uk-heading-large">
            {this.props.title}
          </h1>
          <a
            href="#section3"
            className="uk-button uk-button-success uk-button-large ja-font-special ja-button-special"
            data-uk-smooth-scroll>
            Je m'inscris !
          </a>
        </top>

        <ul
          className="uk-slideshow uk-slideshow-fullscreen"
          data-uk-slideshow="{
            autoplay: true,
            duration: 1000,
            pauseOnHover: false,
            autoplayInterval: 5000,
            animation: 'scale'}">
          {illustrations}
        </ul>
      </div>
    );
  }
};
