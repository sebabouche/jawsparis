import React from 'react'
import {Link} from 'react-router'

export default class LinkToCheckout extends React.Component {
  componentWillUnmount () {
    UIkit.offcanvas.hide()
  }
  render () {
    if (!this.props.disabled) {
      return <Link
          to="/checkout"
          className="uk-button uk-button-success uk-width-1-1">
            Merci, ce sera tout!
      </Link>
    } else {
      return <button className="uk-button uk-button-success uk-width-1-1" disabled>Votre panier est vide</button>
    }
  }
}
