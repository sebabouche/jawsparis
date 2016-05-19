/*
 * ACTION TYPES
 */

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INITIALIZE = "INITIALIZE"

/*
 * ACTION CREATORS
 */

export const addToCart = (productId) => {
  return({
    type:ADD_TO_CART,
    productId
  })
}

export const removeFromCart = (productId) => {
  return({
    type:REMOVE_FROM_CART,
    productId
  })
}

export const initiatize = (data) => {
  return({
    type: INITIALIZE,
    data
  })
}
