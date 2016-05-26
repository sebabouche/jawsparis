import React, { Component, PropTypes } from 'react'

import QuantitySelector from '../QuantitySelector'

export default class ProductItem extends Component {
  render() {
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
        return (
          <QuantitySelector
            productId={product.id}
            cartProductsQuantity={cartProductsQuantity}
            onAddToCartClicked={onAddToCartClicked}
            onRemoveFromCartClicked={onRemoveFromCartClicked} />
          )
      } else {
        return (
          <div className= "uk-grid uk-grid-collapse">
            <button
              className="uk-button uk-button-success uk-width-1-1 uk-container-center"
              onClick={onAddToCartClicked}
              type="button">
                Ajouter
            </button>
          </div>
        )
      }
    }

    return (
      <div key={product.id} className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-2 uk-width-large-1-3">
        <div className="uk-panel uk-panel-box ">

         <div className="uk-panel-teaser">
           <a data-uk-toggle={productTargetTag}>
               <div className="uk-panel-badge uk-icon-info-circle uk-text-contrast"></div>
             <figure className="uk-overlay">
               <img src={product.img} alt={product.title}/>
               <figcaption id={productTag} className="uk-overlay-panel uk-overlay-background uk-hidden uk-scrollable-text" aria-hidden="true" >
                 <p>
                   <i className="uk-icon-justify uk-icon-info-circle"></i>
                   <br />
                   {product.desc}
                 </p>
                 <p>
                   <i className="uk-icon-justify uk-icon-cutlery"></i>
                   <br/>
                   {product.tip}
                 </p>
                 <p>
                   <i className="uk-icon-justify uk-icon-calendar-o"></i>
                   <br/>
                   {product.expiry}
                 </p>
               </figcaption>
             </figure>
           </a>
         </div>

         <div className="uk-grid uk-grid-small">
           <div className="uk-width-4-5">
             <h3>{product.title}</h3>
           </div>
           <div className="uk-width-1-5">
             <h4 className="uk-text-right">{productPrice}</h4>
           </div>
         </div>

         <p className="uk-margin-top-remove">{product.portion} - pour {product.people} pers.</p>

         <div className="uk-grid uk-margin" >
           <div className="uk-width-1-5">
             <img className="uk-border-circle" src={product.merchantImg} alt={product.merchantName}/>
           </div>
           <div className="uk-width-4-5">
             <h4 className="uk-margin-remove">{product.merchantName}</h4>
           </div>
         </div>
         {cartModule()}
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
