import React from 'react';

export default class Product extends React.Component {
  render() {
    const product = this.props.product;


    return (



    <div className="uk-width-1-2">
      <a href="" className="uk-panel uk-panel-box uk-panel-hover uk-panel-box-hover">
        <div className="uk-panel-teaser">
          <img src={product.img} alt={product.name}/>
        </div>
        <h3 class="uk-panel-title">{product.name}</h3>
      </a>
    </div>


    )
  }
}
