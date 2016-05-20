import React from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import styles from '../Header/styles.css'

import Category from '../Category'
import Navbar from '../Navbar'
import LinkToCheckout from '../LinkToCheckout'

import {toJS} from 'immutable'

export class ProductPage extends React.Component {
  render() {
    const day = this.props.day.toJS()
    console.log("Day :", JSON.stringify(day, null, 2))
    const categoryData = day['categories']
    const today = new Date()
    const categories = categoryData.map(category => {
      return(<Category key={category.id} category={category}/>)
    })
    const backgroundStyle = {
      backgroundImage: 'url(' + day.imageUrl + ')',
    }

    return (
      <div className='uk-height-1-1'>
        <div className="uk-height-1-1 uk-cover-background" style={backgroundStyle}>
          <div className="uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <div className="uk-width-1-2 uk-container-center uk-text-center">
              <img className="uk-width-1-2 uk-width-small-1-4 uk-width-medium-1-2 uk-width-large-1-5" src={require('../Header/images/logo-noir-cartouche.svg')} />
            </div>
            <h1 className="uk-text-center uk-text-contrast uk-width-4-5">JAWS sélectionne chaque jour des produits différents.</h1>
            <h3 className="uk-text-center uk-text-contrast">Sélection du {today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()}</h3>
          </div>
        </div>

        <Navbar />

        <div className="uk-container uk-container-center">
          {categories}
          <div className="uk-block uk-margin-large-bottom">
            <p className="uk-text-center ja-font-special">
              Vous désirez autre chose ?
            </p>
            <LinkToCheckout />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("ProductPage State:", state)
  return {
    day: state.get('day'),
    categories: state.get('categories')
  }
}

const ConnectedProductPage = connect(mapStateToProps)(ProductPage)
export default ConnectedProductPage
