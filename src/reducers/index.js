import {ADD_TO_CART,REMOVE_FROM_CART} from '../actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cart = state.cart
      cart.push(action.productId)
      return { ...state, cart: cart }

  }

}
