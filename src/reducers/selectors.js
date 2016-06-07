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
  return state.getIn(['shop', 'cartProducts', id, 'quantity'])
}

export function getSubTotal(state, id) {
  return state.getIn(['shop', 'cartProducts', id, 'price_cents'])
          * state.getIn(['shop', 'cartProducts', id, 'quantity'])
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

// function addCartQuantity(initialValue, value, key, iterator) {
//   let state = initialValue
//   console.log('this state: ', state)
//   let newState = Map({})
//   let product = value.merge({
//     quantity: getQuantity(state, value)
//   })
//   return newState.set(product.get('id'), product)
// }

// export function getCartProductsQuantity(state) {
//   return getCartProducts(state).reduce(addCartQuantity, new Map({}))
// }

// export function getCartProducts(state) {
//   return getAddedIds(state).map(id => Object.assign(
//     {},
//     getProduct(state, id),
//     {
//       quantity: getQuantity(state, id)
//     }
//   ))
// }

// export function getCartProductsQuantity(state) {
//   const quantityObj = {}
//   getAddedIds(state).map(id => quantityObj[id] = getQuantity(state, id))
//   return quantityObj
// }
