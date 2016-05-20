/*
 * ACTION TYPES
 */

export const INITIALIZE_DAYS = "INITIALIZE_DAYS"
export const INITIALIZE_CART = "INITIALIZE_CART"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const RECEIVE_DAYS = "RECEIVE_DAYS"


/*
 * ACTION CREATORS
 */

 export const initializeDays = (days) => {
   return({
     type: INITIALIZE_DAYS,
     days
   })
 }

 export const initializeCart = () => {
   return({
     type: INITIALIZE_CART,
   })
 }

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
