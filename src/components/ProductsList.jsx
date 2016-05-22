import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    return (
      <div className="uk-container uk-container-center">
        <div>{this.props.children}</div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
