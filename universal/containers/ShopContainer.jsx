import React, { Component } from 'react'

import Shop from '../components/Shop'
import Navbar from '../components/Navbar'
import ProductsContainer from './ProductsContainer'

export default class ShopContainer extends Component {
  render() {
    return (
      <div className="uk-height-1-1">
        <Shop>
          <Navbar />
          <ProductsContainer />
        </Shop>
      </div>
    )
  }
}
