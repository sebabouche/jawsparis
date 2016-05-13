import React from 'react';

import Product from '../Product';

export default class Category extends React.Component {
  render() {
    const products = this.props.category.products.map(product => {
      return(<Product key={product.id} product={product}/>)
    });

    return (

      <div>
        <h2 className="uk-text-center">{this.props.category.title}</h2>
        <div className="uk-grid">
          <div className="uk-width-2-3 uk-container-center">
            <div className="uk-grid" data-uk-margin>
              {products}
            </div>
          </div>
        </div>
      </div>

    )
  }
}
