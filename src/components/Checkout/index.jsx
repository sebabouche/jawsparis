import React from 'react'
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

import ShoppingBagFields from '../ShoppingBagFields'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delivrery:false,
      paiment:false
    }
    this.handleShopBagClick = this.handleShopBagClick.bind(this);
    this.handleDelivreryClick = this.handleDelivreryClick.bind(this);
  }

  handleShopBagClick(event) {
    this.setState({delivrery:true});
    scroll.scrollToBottom();
  }
  handleDelivreryClick(event) {
    this.setState({paiment:true});
    scroll.scrollToBottom();
  }

  render () {

    var deliveryscroll = this.state.delivrery ? <section className="uk-block uk-block-large uk-animation-fade uk-animation-3">
      <h2 className="uk-text-center">
        <span className="uk-badge uk-badge-notification">2</span>
        Livraison
      </h2>
      <DeliveryFields />
    </section>:<button
      className="uk-button uk-button-success uk-width-1-1 uk-container-center" onClick={this.handleShopBagClick}
      type="button">
      Valider votre cabas
    </button>;

    if (this.state.paiment){
      var paimentscroll = <section className="uk-block uk-block-large uk-animation-fade uk-animation-3">
      <h2 className="uk-text-center">
        <span className="uk-badge uk-badge-notification">3</span>
        Paiement
      </h2>
        <PaymentFields />
      </section>;
    } else if(!this.state.paiment && this.state.delivrery){
      var paimentscroll = <button
        className="uk-button uk-button-success uk-width-1-1 uk-container-center" onClick={this.handleDelivreryClick}
        type="button">
        Valider l'adresse de livraison
      </button>;
    }


    return (
      <div className="uk-container uk-container-center">
        <section className="uk-block uk-block-large">
          <div className="uk-text-center"></div>
          <h2 className="uk-text-center">
            <span className="uk-badge uk-badge-notification">1</span>
            Votre cabas
          </h2>
          <ShoppingBagFields />
        </section>
        {deliveryscroll}
        {paimentscroll}
      </div>
    )
  }
}
