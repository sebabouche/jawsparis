import React, { Component, PropTypes } from 'react'

import CartProduct from './CartProduct'
import LinkToCheckout from './LinkToCheckout'


export default class Cart extends Component {
  render() {
    const { products, total, onCheckoutClicked, onToggleEditCartClicked, edit,checkoutPage} = this.props
    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Merci d'ajouter des produits à votre cabas.</em> :
      this.props.children
      let button
      if (edit && checkoutPage)
        {button = <button onClick={onToggleEditCartClicked} className="uk-button uk-button-success uk-width-1-1">Modifier la commande</button>}
      else if (!edit && !checkoutPage){
        button = <LinkToCheckout disabled={hasProducts ? '' : 'disabled'} />
      }else{
        button = <button onClick={onToggleEditCartClicked} className="uk-button uk-button-success uk-width-1-1">Valider</button>
      }

    return (
      <div>
        <div>
        {nodes}
        </div>
        <p>Livraison: 3€</p>
        <p>Total: {total/100 + 3}€</p>
        {button}
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  children: PropTypes.node,
}
