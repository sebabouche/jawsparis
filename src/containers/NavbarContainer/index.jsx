import React from 'react'
import { connect } from 'react-redux'
import { getCartProductsQuantity } from '../../reducers'

import styles from './styles.css'

import CartContainer from '../../containers/CartContainer'

class NavbarContainer extends React.Component {
  render () {
    const today = new Date()
    const {cartProductsQuantity} = this.props
    console.log("cartProductsQuantity:",cartProductsQuantity)

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

          <div className="uk-navbar-flip uk-hidden-large">
            <ul className="uk-navbar-nav">
              <li>
                <a href="#rightMenu" data-uk-offcanvas>
                  <i className="uk-icon-shopping-bag"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-flip uk-visible-large">
            <ul className="uk-navbar-nav">
              <li className="uk-visible-large"><a href="#">Mon Compte</a></li>
              <li className="uk-visible-large">
                <a href="#rightMenu" data-uk-offcanvas>
                  <i className="uk-icon-shopping-bag"></i>
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
            <div className={styles.offcanvasContainer}>
              <div className="uk-block uk-padding-remove">
                <div className="uk-panel">
                  <a className="uk-panel-badge" href="#rightMenu" data-uk-offcanvas>
                    <i className="uk-icon-close"></i>
                  </a>
                  <h2 className="uk-text-center">Mon cabas</h2>
                  <CartContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dateContainer}>
          <div className={styles.leftArrow}></div>
          <div className={styles.dateText}>Sélection du lundi 23 mai</div>
          <div className={styles.rightArrow}></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cartProductsQuantity: getCartProductsQuantity(state)
  }
}

export default connect(mapStateToProps)(NavbarContainer)
