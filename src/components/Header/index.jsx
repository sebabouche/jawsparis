import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

import SignUpFormInline from '../SignUpFormInline';

export default class Header extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundImage: 'url(' + this.props.image + ')',
    }

    return (
      <div className="uk-height-1-1 uk-cover-background" style={backgroundStyle}>
        <div className={classNames("uk-position-relative", styles.header)}>
          <div className="uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <div className="uk-width-1-2 uk-container-center uk-text-center">
              <img className="uk-width-1-2 uk-width-small-1-4 uk-width-medium-1-2 uk-width-large-1-5" src={require('./images/logo-noir-cartouche.svg')} />
            </div>
            <h1 className="uk-hidden-small uk-text-center uk-text-contrast uk-width-4-5">{this.props.title}</h1>
            <h2 className="uk-visible-small uk-text-center uk-text-contrast uk-container">{this.props.title}</h2>
          </div>

        </div>
        <div className={classNames("uk-position-relative", styles.overlay)}>
          <div className="uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <p className="uk-visible-small uk-article-lead uk-text-contrast uk-text-center">
              Jaws.paris est le nouveau service de livraison de commerces de proximité.
            </p>
            <h2 className="uk-hidden-small uk-text-contrast uk-text-center ja-font-normal">
              Jaws.paris est le nouveau service de livraison de commerces de proximité.
            </h2>
            <SignUpFormInline />
          </div>
        </div>
      </div>
    );
  }
};
