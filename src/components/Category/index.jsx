import React from 'react';

import ProductCard from '../ProductCard';

export default class Category extends React.Component {
  render() {
    const products = this.props.category.products.map(product => {
      return(
        <div className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-2 uk-width-large-1-3">
          <ProductCard key={product.id} product={product} category={this.props.category.id}/>
        </div>
      )
    });

    return (

      <div className="uk-block">
        <h2 className="uk-text-center">{this.props.category.title}</h2>
          <div className="uk-grid" data-uk-grid-margin>
            {products}
          </div>
      </div>

    )
  }
}

/*

<div className="uk-grid">
  <div className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-1 uk-width-large-2-3 uk-container-center">
    <div className="uk-grid" data-uk-grid-margin>
      {products}
    </div>
  </div>
</div>

*/
