import React from 'react'
import Scroll from 'react-scroll'
import classNames from 'classnames'
const scroll = Scroll.animateScroll
const Element = Scroll.Element;
const scroller = Scroll.scroller;

import ShoppingBagSummary from '../ShoppingBagSummary'
import ShoppingBagFields from '../ShoppingBagFields'
import DeliveryFields from '../DeliveryFields'
import PaymentFields from '../PaymentFields'

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editShoppingBag: false,
      showPayment:false
    }
    this.handleShopBagClick = this.handleShopBagClick.bind(this);
    this.handleDeliveryClick = this.handleDeliveryClick.bind(this);
  }

  handleShopBagClick(event) {
    this.setState({editShoppingBag:!this.state.editShoppingBag});
  }
  handleDeliveryClick(event) {
    this.setState({showPayment:true});
    scroll.scrollToBottom();
  }

  render () {
    let shoppingBagButtonClass = classNames("uk-button uk-button-small uk-width-1-1 uk-container-center")
    let deliveryButtonClass = classNames("uk-button uk-button-large uk-button-success uk-width-1-1 uk-container-center", {'uk-hidden':this.state.showPayment})

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
    let shopingBagDiv =""
    if (this.state.editShoppingBag){
      shopingBagDiv = <section className="uk-block uk-block-large">
        <div className="uk-text-center"></div>
        <h2 className="uk-text-center">
          <span className="uk-badge uk-badge-notification">1</span>
          Votre cabas
        </h2>
        <ShoppingBagFields />
        <button className={shoppingBagButtonClass} onClick={this.handleShopBagClick}>Valider</button>
      </section>
    } else {
      shopingBagDiv = <section className="uk-block uk-block-large">
        <div className="uk-text-center"></div>
        <h2 className="uk-text-center">
          <span className="uk-badge uk-badge-notification">1</span>
          Votre cabas
        </h2>
        <ShoppingBagSummary />
        <button className={shoppingBagButtonClass} onClick={this.handleShopBagClick}>Modifier mon cabas</button>
      </section>
    }


    return (
      <div className="uk-container uk-container-center uk-width-1-1 uk-width-medium-4-5 uk-width-large-3-5">
        {shopingBagDiv}
        <Element name="test">
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

        </Element>
        {paymentScroll}
      </div>
    )
  }
}
