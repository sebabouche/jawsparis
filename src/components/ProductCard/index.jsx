import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const product = this.props.product;


    return (
      <div className="uk-width-1-1 uk-width-medium-1-2">
        <a href="" className="uk-panel uk-panel-box uk-panel-hover uk-panel-box-hover">
          <div className="uk-panel-teaser">
            <img src={product.img} alt={product.name}/>
          </div>
          <div className="uk-float-left"><img className="uk-border-circle" src={product.commercant.img} alt={product.commercant.name}/></div>
          <div className="uk-float-left"><h4>{product.commercant.name}</h4>
          <h3 className="uk-panel-title">{product.name}</h3></div>
        </a>
      </div>
    )
  }
}
