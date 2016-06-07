import React, { Component, PropTypes } from 'react'
import LinkToCheckout from './LinkToCheckout'

export default class ProductsList extends Component {
  componentWillUnmount () {
    UIkit.offcanvas.hide()
  }

  render() {
    return (
      <div className="uk-container uk-container-center">
        <div className="uk-block">
          <div className="uk-grid" data-uk-grid-margin>
            {this.props.children}
          </div>
        </div>
        <div className="uk-block uk-margin-large-bottom">
          <p className="uk-text-center ja-font-special">
            Vous désirez autre chose ?
          </p>
          <LinkToCheckout disabled={!this.props.addedIds}/>
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
