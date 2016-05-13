import React from 'react';

import classNames from 'classnames';
import Category from '../Category'
import styles from '../Header/styles.css';
import {data} from '../../data/data';



export default class Day extends React.Component {
  render() {
    const day = data.days[0];
    var today=new Date()
    const categories = day.categories.map(category => {
      return(<Category key={category.id} category={category}/>)
    });
    const backgroundStyle = {
      backgroundImage: 'url(' + data.landings[0].imageUrl + ')',
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
      <div className="uk-container uk-container-center">
        <h1 className="uk-text-center">{day.title}</h1>
        {categories}
      </div>
      </div>
    )
  }
}
