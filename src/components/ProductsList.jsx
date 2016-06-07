import React, { Component, PropTypes } from 'react'
import LinkToCheckout from './LinkToCheckout'

export default class ProductsList extends Component {
  componentWillUnmount () {
    UIkit.offcanvas.hide()
  }

  render() {
    const { children, somethingInCart } = this.props

    return (
      <div className="uk-container uk-container-center">
        <div className="uk-block">
          <div className="uk-grid" data-uk-grid-margin>
            {children}
          </div>
        </div>
        <div className="uk-block uk-margin-large-bottom">
          <p className="uk-text-center ja-font-special">
            Vous désirez autre chose ?
          </p>
          <LinkToCheckout disabled={!somethingInCart} />
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  somethingInCart: PropTypes.bool.isRequired
}
