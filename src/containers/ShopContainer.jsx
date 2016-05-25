import React, { Component } from 'react'

import Shop from '../components/Shop'
import NavbarContainer from './NavbarContainer'
import ProductsContainer from './ProductsContainer'

export default class ShopContainer extends Component {
  render() {
    return (
      <div className="uk-height-1-1">
        <Shop>
          <NavbarContainer />
          <ProductsContainer />
        </Shop>
      </div>
    )
  }
}
