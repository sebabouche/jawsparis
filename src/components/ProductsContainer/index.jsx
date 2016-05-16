import React from 'react'

import {data} from '../../data/data'
import Products from '../Products'

export default class ProductsContainer extends React.Component {

  render() {
    const day = data.days[this.props.params.index]
    console.log(day)

    return (
      <Products day={day} />
    )
  }
}
