import React from 'react';
import styles from './styles.css';

export default class Navbar extends React.Component {
  render () {
    return (
      <div>
        <nav
          className="uk-navbar"
          id="#top"
          data-uk-sticky="{clsactive: 'uk-navbar-attached', top:-100, animation: 'uk-animation-slide-top'}"
          style={{zIndex: "980"}}
        >
          <a className="uk-navbar-toggle uk-hidden-large" href="#leftMenu" data-uk-offcanvas></a>
          <ul className="uk-navbar-nav uk-visible-large" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: {offset: 60}}">
            <li><a href="#section1">A propos</a></li>
            <li><a href="#section2">Les commerçants</a></li>
          </ul>

          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav">
              <li className="uk-visible-large"><a href="#">Mon Compte</a></li>
              <li className="uk-visible-large"><a href="#rightMenu" data-uk-offcanvas>Panier</a></li>
              <li className="uk-hidden-large">
                <a href="#rightMenu" data-uk-offcanvas>
                  <i className="uk-icon-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-content uk-navbar-center">
            <img src={require("./images/logo-small.png")} />
          </div>
        </nav>
        <div id="leftMenu" className="uk-offcanvas">
          <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-offcanvas" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: {offset: 60}}">
              <li><a href="#section1">A propos</a></li>
              <li><a href="#section2">Les commerçants</a></li>
              <li><a href="#section3">Mon compte</a></li>
            </ul>
          </div>
        </div>
        <div id="rightMenu" className="uk-offcanvas">
          <div className="uk-offcanvas-bar uk-offcanvas-bar-flip">
            <div className="uk-panel">
              <h3 className="uk-panel-title">Mon panier</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
