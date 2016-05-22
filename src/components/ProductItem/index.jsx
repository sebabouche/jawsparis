import React, { Component, PropTypes } from 'react'

export default class ProductItem extends Component {
  render() {
    const { addedIds, product, cartProductsQuantity } = this.props

    console.log("addedIds", addedIds)
    console.log("cartProductsQuantity", cartProductsQuantity)

    const productTag = "overlay-prod-" +this.props.category+"-"+ product.id
    const productTargetTag = "{target:'#"+productTag+"'}"
    const productPrice = product.price/100+"€"

    const productQuantity = () => {
      return <span className="cartProductQuantity">{cartProductsQuantity[product.id]}</span> || ""
    }

    const cartModule = () => {
      if ((addedIds).indexOf(product.id) !== -1 ) {
        return (
          <div className= "uk-grid uk-grid-collapse">
              <div className="uk-width-1-3">
                <button
                  className="uk-button uk-button-success uk-width-1-1"
                  onClick={this.props.onAddToCartClicked}
                  type="button">
                    <i className="uk-icon-plus"></i>
                </button>
              </div>

              <div className="uk-width-1-3">
                <p className="uk-text-center cartProductQuantity">
                  {cartProductsQuantity[product.id]}
                </p>
              </div>

              <div className="uk-width-1-3">
                <button
                  className="uk-button uk-button-success uk-width-1-1"
                  onClick={this.props.onRemoveFromCartClicked}
                  type="button">
                    <i className="uk-icon-minus"></i>
                </button>
              </div>
          </div>
        )
      } else {
        return (
          <div className= "uk-grid uk-grid-collapse">
            <button
              className="uk-button uk-button-success uk-width-1-1 uk-container-center"
              onClick={this.props.onAddToCartClicked}
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
             <div className="uk-panel-badge">
               <i className="uk-icon-info-circle uk-text-contrast"></i>
             </div>
             <figure className="uk-overlay">
               <img src={product.img} alt={product.title}/>
               <figcaption id={productTag} className="uk-overlay-panel uk-overlay-background uk-hidden" aria-hidden="true" >
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
