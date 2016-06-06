import { Map, toList, toJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import routing from './routing'

export default combineReducers({
  cart,
  products,
  routing
})

export function getProducts(state) {
  return fromProducts.getProducts(state.get('products'))
}

export function getProduct(state, id) {
  return fromProducts.getProduct(state.get('products'), id)
}

export function getQuantities(state) {
  return fromCart.getQuantities(state.get('cart'))
}

export function getQuantity(state, id) {
  return fromCart.getQuantity(state.get('cart'), id)
}

export function getPrice(state, id) {
  return fromProducts.getPrice(state.get('products'), id)
}

export function getAddedIds(state) {
  return fromCart.getAddedIds(state.get('cart'))
}

export function getTotal(state) {
  return getAddedIds(state).reduce((total, id) =>
    total + getPrice(state, id) * getQuantity(state, id),
    0
  )
}

export function getCartProducts(state) {
  return getProducts(state).filter(product => getAddedIds(state).includes(product.get('id')))
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
