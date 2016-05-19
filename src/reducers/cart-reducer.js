import {Map, List} from 'immutable'

import {ADD_TO_CART,REMOVE_FROM_CART} from '../actions'

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return  state.merge(Map({cart: state.get('cart').push(action.productId)}))

    case REMOVE_FROM_CART:
      const newState = Object.assign({}, state)
      newState.cart.splice(newState.cart.indexOf(action.productId),1)
      return { ...newState }

    default:
      return state
  }
}
