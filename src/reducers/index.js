import {Map, fromJS} from 'immutable'

import * as types from '../actions'

export const reducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.INITIALIZE_DAYS:
      return state.merge(fromJS(action.days))

    case types.ADD_TO_CART:
      return state.merge(Map({cart: state.get('cart').push(action.productId)}))

    case types.REMOVE_FROM_CART:
      const newState = Object.assign({}, state)
      newState.cart.splice(newState.cart.indexOf(action.productId),1)
      return { ...newState }

    default:
      return state
  }
}
