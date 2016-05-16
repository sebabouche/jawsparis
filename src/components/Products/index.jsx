import React from 'react';

import classNames from 'classnames';
import styles from '../Header/styles.css';

import Category from '../Category'
import Navbar from '../Navbar'

export default class Products extends React.Component {
  render() {
    const day = this.props.day;
    var today=new Date()
    const categories = day.categories.map(category => {
      return(<Category key={category.id} category={category}/>)
    });
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
            <h2 className="uk-text-contrast">Découvrez la sélection du {today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()}</h2>
          </div>
        </div>

        <Navbar />

        <div className="uk-container uk-container-center">
          <h1 className="uk-text-center">{day.title}</h1>
          {categories}
        </div>
      </div>
    )
  }
}
