import React, {Component, PropTypes} from 'react'

import classNames from 'classnames'
import styles from '../Header/styles.css'



export default class Shop extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/jaws-dev/landings/recuisiner.jpg)',
    }

  

    return (
      <div className='uk-height-1-1'>
        <div className="uk-height-1-1 uk-cover-background" style={backgroundStyle}>
          <div className="uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <div className="uk-width-1-2 uk-container-center uk-text-center">
              <img className="uk-width-1-2 uk-width-small-1-4 uk-width-medium-1-2 uk-width-large-2-5" src={require('../Header/images/logo-noir-cartouche.svg')} />
            </div>
            <h1 className="uk-text-center uk-text-contrast uk-width-4-5">JAWS sélectionne chaque jour des produits différents.</h1>
          </div>
        </div>
        <div>
          {this.props.children[0]} {/* CartContainer */}
            <div className="uk-container uk-container-center">
              {this.props.children[1]} {/* ProductContainer */}
            </div>
        </div>
      </div>
    )
  }
}

Shop.propTypes = {
  children: PropTypes.node,
}
