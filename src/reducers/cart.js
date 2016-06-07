import * as types from '../constants/ActionTypes'

import initialState from './initialState'

export default function cart(state = initialState, action) {
  const { type, productId } = action
  switch (type) {
    case types.ADD_TO_CART:
      // if already added
      if (state.getIn(['cartProducts', productId])) {
        // increment quantityById
        return state
          .updateIn(
            ['products', productId, 'quantity'],
            quantity => quantity + 1
          )
          .updateIn(
            ['cartProducts', productId, 'quantity'],
            quantity => quantity + 1
          )
      // if never added, add and set quantity to 1
      } else {
        console.log(state)
        return state
          .mergeIn(['products', productId], {quantity: 1})
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
          .updateIn(['products', productId, 'quantity'], quantity => quantity - 1)
          .updateIn(['cartProducts', productId, 'quantity'], quantity => quantity - 1)
      // else if added once
      } else if (state.getIn(['cartProducts', productId, 'quantity']) == 1)  {
        // remove from cartProducts
        return state
          .deleteIn(['products', productId, 'quantity'])
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
