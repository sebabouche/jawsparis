/*
 * ACTION TYPES
 */

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INITIALIZE = "INITIALIZE"
export const RECEIVE_DAYS = "RECEIVE_DAYS"


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

export const initialize = (days) => {
  return({
    type: INITIALIZE,
    days
  })
}
