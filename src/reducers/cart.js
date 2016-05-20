import {Map, fromJS} from 'immutable'

import * as types from '../actions'

export const reducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.RECEIVE_DAYS:
      return fromJS(action.days)

    case types.INITIALIZE:
      return fromJS(action.data)

    case types.ADD_TO_CART:
      return  state.merge(Map({cart: state.get('cart').push(action.productId)}))

    case types.REMOVE_FROM_CART:
      const newState = Object.assign({}, state)
      newState.cart.splice(newState.cart.indexOf(action.productId),1)
      return { ...newState }

    default:
      return state
  }
}

export function getDays(state, id) {
  return state.byId[id]
}

export function getVisibleDays(state) {
  return state.visibleIds.map(id => getDays(state, id))
}
