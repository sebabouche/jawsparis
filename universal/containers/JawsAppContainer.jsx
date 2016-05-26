import React, { Component } from 'react'

export default class JawsAppContainer extends Component {
  render() {
    return (
      <div className="JawsAppContainer">
        {this.props.children}
      </div>
    )
  }
}
