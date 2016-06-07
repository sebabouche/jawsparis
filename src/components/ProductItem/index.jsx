import React, { Component, PropTypes } from 'react'

import QuantitySelector from '../QuantitySelector'
import classNames from 'classnames'

export default class ProductItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hidden: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({hidden: !this.state.hidden});
  }
  render() {

    const buttonClass = classNames({
      'uk-hidden': this.state.hidden
    });
    const { addedIds, product, cartProductsQuantity,
      onAddToCartClicked, onRemoveFromCartClicked } = this.props

    const productTag = "overlay-prod-" +this.props.category+"-"+ product.id
    const productTargetTag = "{target:'#"+productTag+"'}"
    const productPrice = product.price/100+"€"

    const productQuantity = () => {
      return <span className="cartProductQuantity">{cartProductsQuantity[product.id]}</span> || ""
    }

    const cartModule = () => {
      if ((addedIds).indexOf(product.id) !== -1 ) {
        return (<span className={buttonClass}>
          <QuantitySelector
            productId={product.id}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={onAddToCartClicked}
            onRemoveFromCartClicked={onRemoveFromCartClicked} />
          </span>)
      } else {
        return (
          <span className={buttonClass}>
          <div className= "uk-grid uk-grid-collapse uk-margin-top-remove">
            <button
              className="uk-button uk-button-success jaws-button uk-icon-plus uk-container-center"
              onClick={onAddToCartClicked}
              type="button">
            </button>
          </div>
          </span>
        )
      }
    }

    return (
      <div key={product.id} className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-2 uk-width-large-1-3">
        <div className="uk-panel uk-panel-box uk-padding-remove">
           <a data-uk-toggle={productTargetTag} onClick={this.handleClick} >
             <figure className="uk-overlay">
             <div className="ja-image-product">
               <img src={product.img} alt={product.title}/>
               <div className="ja-product-text">
              <h3 className="uk-margin-remove">{product.title}</h3>
               <h4 className="uk-margin-remove">{productPrice}</h4>
               _____
               <p className="uk-margin-remove">{product.portion} - pour {product.people} pers.</p>
               </div>


               </div>
               <figcaption id={productTag} className="uk-overlay-panel uk-overlay-background ja-overlay uk-hidden uk-scrollable-text" aria-hidden="true" >
                 <p>
                   <img src={require('./images/comment-white.svg')} alt="Icon" className="ja-icon"/>
                   <br />
                   {product.desc}
                 </p>
                 <p>
                   <img src={require('./images/store-white.svg')} alt="Icon" className="ja-icon"/>
                   <br />
                   {product.merchantName}
                 </p>
                 <p>
                   <img src={require('./images/cutlery-white.svg')} alt="Icon" className="ja-icon"/>
                   <br/>
                   {product.tip}
                 </p>

                 <p>
                   <img src={require('./images/expiry-white.svg')} alt="Icon" className="ja-icon"/>
                   <br/>
                   Se conserve {product.expiry}
                 </p>
               </figcaption>
             </figure>
           </a>

           <div className="ja-product-quantity">
           {cartModule()}
           </div>



       </div>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}
