/*
 *  PRODUCTS SELECTORS
 */
export function getProducts(state) {
  //console.log('state in products: ', state)
  //console.log('products in products: ', state.get('products'))
  return state.getIn(['shop', 'products'])
}

export function getProduct(state, id) {
  //console.log('in products state', state)
  return state.getIn(['shop', 'products', id])
}

export function getPrice(state, id) {
  return state.getIn(['shop', 'products', id, 'price_cents'])
}

export function isInCart(state, id) {
  return state.getIn(['shop', 'cartProducts']).has(id)
}


/*
 *  CART SELECTORS
 */
export function getCartProducts(state) {
  return state.getIn(['shop', 'cartProducts'])
}

export function getCartProduct(state, id) {
  return state.getIn(['shop', 'cartProducts', id])
}

export function getQuantities(state) {
  return state.getIn(['shop', 'cartProducts']).reduce(
    (total, product) => {
      total += product.get('quantity')
      return total
    }, 0)
}

export function getQuantity(state, id) {
  return state.getIn(['shop', 'cartProducts', id, 'quantity']) || 0
}

export function getSubTotal(state, id) {
  return state.getIn(['shop', 'cartProducts', id, 'price_cents'])
          * state.getIn(['shop', 'cartProducts', id, 'quantity']) || 0
}

export function getTotal(state) {
  return state.getIn(['shop', 'cartProducts']).reduce(
    (total, product) => {
      total += getPrice(state, product.get('id')) * getQuantity(state, product.get('id'))
      return total
    }, 0)
}


export function getAddedIds(state) {
  return fromCart.getAddedIds(state.get('cart'))
}


export function getAddedIds(state) {
  return state.get('addedIds')
}
