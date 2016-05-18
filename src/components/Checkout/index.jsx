import React from 'react'
import Scroll from 'react-scroll'
import classNames from 'classnames'
const scroll = Scroll.animateScroll
const Element = Scroll.Element;
const scroller = Scroll.scroller;

import ShoppingBagSummary from '../ShoppingBagSummary'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delivery:false,
      paiment:false
    }
    this.handleShopBagClick = this.handleShopBagClick.bind(this);
    this.handleDeliveryClick = this.handleDeliveryClick.bind(this);
  }

  handleShopBagClick(event) {
    this.setState({showDelivery:true});
    scroller.scrollTo('test');
  }
  handleDeliveryClick(event) {
    this.setState({showPayment:true});
    scroll.scrollToBottom();
  }

  render () {
    let shoppingBagButtonClass = classNames("uk-button uk-button-large uk-button-success uk-width-1-1 uk-container-center", {'uk-hidden':this.state.showDelivery})
    let deliveryButtonClass = classNames("uk-button uk-button-large uk-button-success uk-width-1-1 uk-container-center", {'uk-hidden':this.state.showPayment})

    let deliveryScroll = ""
    if( this.state.showDelivery){
      deliveryScroll =
        <section className="uk-block uk-block-large uk-animation-fade uk-animation-3">
          <h2 className="uk-text-center">
            <span className="uk-badge uk-badge-notification">2</span>
            Livraison
          </h2>
          <DeliveryFields />
          <button
            className={deliveryButtonClass} onClick={this.handleDeliveryClick}
            type="button">
            Suivant
          </button>
        </section>
    }

    let paymentScroll = ""
    if (this.state.showPayment){
      paymentScroll = <section className="uk-block uk-block-large uk-animation-fade uk-animation-3">
      <h2 className="uk-text-center">
        <span className="uk-badge uk-badge-notification">3</span>
        Paiement
      </h2>
      <PaymentFields />
      <div className="uk-form-row uk-margin">
        <a
          href="/thankyou"
          className="uk-button uk-button-success uk-width-1-1 uk-container-center uk-button-large"
          onClick={this.handleDeliveryClick}
          >
          Payer ma commande
        </a>
      </div>
      </section>
    }


    return (
      <div className="uk-container uk-container-center">
        <section className="uk-block uk-block-large">
          <div className="uk-text-center"></div>
          <h2 className="uk-text-center">
            <span className="uk-badge uk-badge-notification">1</span>
            Votre cabas
          </h2>
          <ShoppingBagSummary />
        </section>
        <Element name="test">
        {deliveryScroll}
        </Element>
        {paymentScroll}
      </div>
    )
  }
}
