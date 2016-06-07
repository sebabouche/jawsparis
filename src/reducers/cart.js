import {Map, List} from 'immutable'

import * as types from '../constants/ActionTypes'

import initialState from './initialState'

export default function cart(state = initialState, action) {
  const { type, productId } = action
  switch (type) {
    case types.ADD_TO_CART:
      // if already added
      if (state.getIn(['cartProducts', productId])) {
        // increment quantityById
        return state.updateIn(
          ['cartProducts', productId, 'quantity'],
          quantity => quantity + 1
        )
      // if never added, add and set quantity to 1
      } else {
        return state
          .setIn(
            ['cartProducts', productId],
            state.getIn(['products', productId]).merge({quantity: 1})
          )
      }
    case types.REMOVE_FROM_CART:
      // if added more than once
      if (state.getIn(['cartProducts', productId, 'quantity']) > 1) {
        // just decrement quantity
        return state
          .updateIn(['cartProducts', productId, 'quantity'], quantity => quantity - 1)
      // else if added once
      } else if (state.getIn(['cartProducts', productId, 'quantity']) == 1)  {
        // remove from cartProducts
        return state
          .deleteIn(['cartProducts', productId])
      } else {
        return state
      }
    case types.CHECKOUT_REQUEST:
      return initialState
    case types.CHECKOUT_FAILURE:
      return action.cart
    default:
      return state
  }
}

export function getQuantity(state, productId) {
  return state.getIn(['quantityById', productId]) || 0
}

export function getQuantities(state) {
  return state.get('quantityById')
}

export function getAddedIds(state) {
  return state.get('addedIds')
}
