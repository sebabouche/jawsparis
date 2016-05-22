import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    return (
      <div className="uk-container uk-container-center">
        <div className="uk-block">
          <div className="uk-grid" data-uk-grid-margin>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
