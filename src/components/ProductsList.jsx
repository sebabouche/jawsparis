import React, { Component, PropTypes } from 'react'
import LinkToCheckout from './LinkToCheckout'

export default class ProductsList extends Component {
  componentWillUnmount () {
    UIkit.offcanvas.hide()
  }

  render() {
    let linkToCheckoutBlock = ""
    if (this.props.addedIds){
      linkToCheckoutBlock = <div className="uk-panel uk-panel-box uk-margin-large-bottom">
        <p className="uk-text-center ja-font-special">
          Vous désirez autre chose ?
        </p>
        <div className="uk-width-1-1 uk-width-medium-2-5 uk-container-center">
        <LinkToCheckout/>
        </div>
      </div>
    }
    return (
      <div className="uk-container uk-container-center">
        <div className="uk-block">
          <div className="uk-grid" data-uk-grid-margin>
            {this.props.children}
          </div>
        </div>
        {linkToCheckoutBlock}
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
