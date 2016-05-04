import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={classNames(styles.background, "uk-height-1-1 uk-cover-background uk-vertical-align")}>
        <middle className="uk-width-1-1 uk-vertical-align-middle uk-text-center">
          <picture className="uk-width-large-1-5 uk-width-5-6 ">
            <img src={require('./images/logo.png')} />
          </picture>
          <h1 className="uk-text-center uk-contrast uk-heading-large">
            Coming soon.
          </h1>
        </middle>
      </div>
    );
  }
};
