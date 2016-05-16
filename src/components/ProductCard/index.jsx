import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    const productTag = "overlay-prod-" +this.props.category+"-"+ product.id;
    const productTargetTag = "{target:'#"+productTag+"'}";
    const priceProduct = product.prix/100+"€";


    return (
      <div className="uk-width-1-1 uk-width-medium-1-2">
        <a className="uk-panel uk-panel-box uk-panel-hover uk-panel-box-hover" data-uk-toggle={productTargetTag}>
        <div className="uk-panel-badge" ><img className="uk-border-circle" src={product.commercant.img} alt={product.commercant.name}/></div>
          <div className="uk-panel-teaser">
          <figure className="uk-overlay">
            <img src={product.img} alt={product.name}/>
            <figcaption id={productTag} style={{zIndex: "1000"}} className="uk-overlay-panel uk-overlay-background uk-hidden" aria-hidden="true" >
            <p><strong>Description du produit:</strong> {product.desc}</p>
            <p><strong>Detail sur la portion:</strong> {product.portion}</p>
            <p><strong>Conseil de cuisine:</strong> {product.conseil}</p>
            <p><strong>Conservation: </strong>1 a 3 ans</p>
            </figcaption>
          </figure>
          </div>
          <div className="uk-align-right">
          <p className="uk-margin-remove"><em>{priceProduct}</em></p>

          </div>
          <div><h4 className="uk-margin-remove">{product.commercant.name}</h4>
          <p className="uk-panel-title uk-margin-remove">{product.name}</p>
          <p className="uk-margin-remove"><em>{product.portion}</em></p>
          </div>
          <div className="uk-grid"><button className="uk-button uk-button-success uk-width-1-2 uk-container-center" type="button">Ajouter</button></div>
          </a>
      </div>
    )
  }
}
