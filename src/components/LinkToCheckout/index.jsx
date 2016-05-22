import React from 'react'

export default class LinkToCheckout extends React.Component {
  render () {
    return (
      <button
        href="/checkout"
        className="uk-button uk-button-success uk-width-1-1"
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
          Merci, ce sera tout!
      </button>
    )
  }
}
