import React from 'react';





export default class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount:0
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handleAddClick(event) {
    this.setState({amount:this.state.amount+1});
  }
  handleMinusClick(event) {
    this.setState({amount:this.state.amount-1});
  }

  render() {
    const product = this.props.product;
    const productTag = "overlay-prod-" +this.props.category+"-"+ product.id;
    const productTargetTag = "{target:'#"+productTag+"'}";
    const priceProduct = product.prix/100+"€";
    var resultat = this.state.amount ? <div className= "uk-grid">
      <div className= "uk-container-center">
      <button className="uk-button uk-button-danger" onClick={this.handleMinusClick}><i className="uk-icon-minus"></i></button>
      <span className="uk-margin-small-left uk-margin-small-right">{this.state.amount}</span>
      <button className="uk-button uk-button-success " onClick={this.handleAddClick}><i className="uk-icon-plus"></i></button>
    </div></div> : <button
      className="uk-button uk-button-success uk-width-1-1 uk-container-center" onClick={this.handleAddClick}
      type="button">
      Ajouter
    </button>;

    return (
      <div className="uk-width-1-1 uk-width-medium-1-2">
         <div className="uk-panel uk-panel-box ">

          <div className="uk-panel-teaser">
            <a data-uk-toggle={productTargetTag}>
              <div className="uk-panel-badge">
                <i className="uk-icon-info-circle uk-text-contrast"></i>
              </div>
              <figure className="uk-overlay">
                <img src={product.img} alt={product.name}/>
                <figcaption id={productTag} className="uk-overlay-panel uk-overlay-background uk-hidden" aria-hidden="true" >
                  <p>
                    <i className="uk-icon-justify uk-icon-info-circle"></i>
                    <br />
                    {product.desc}
                  </p>
                  <p>
                    <i className="uk-icon-justify uk-icon-cutlery"></i>
                    <br/>
                    {product.conseil}
                  </p>
                  <p>
                    <i className="uk-icon-justify uk-icon-calendar-o"></i>
                    <br/>
                    {product.conservation}
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="uk-grid uk-grid-small">
            <div className="uk-width-4-5">
              <h3>{product.name}</h3>
            </div>
            <div className="uk-width-1-5">
              <h4 className="uk-text-right">{priceProduct}</h4>
            </div>
          </div>

          <p className="uk-margin-top-remove">{product.portion} - pour {product.people} pers.</p>

          <div className="uk-grid uk-margin" >
            <div className="uk-width-1-5">
              <img className="uk-border-circle" src={product.commercant.img} alt={product.commercant.name}/>
            </div>
            <div className="uk-width-4-5">
              <h4 className="uk-margin-remove">{product.commercant.name}</h4>
            </div>
          </div>
          {resultat}
        </div>
      </div>
    )
  }
}
/* Old version <div className="uk-width-1 uk-width-small-1-2 uk-width-large-1-3"> */
