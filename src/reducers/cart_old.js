import {Map, List} from 'immutable'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = Map({
  addedIds: List(),
  quantityById: Map({})
})

function superCart(state = Map({}), action) {
  let newState = Object.assign({}, state)
  const productId = action.productId
  switch (action.type) {
    case ADD_TO_CART:
      // if already added
      if (state.addedIds.indexOf(productId) !== -1) {
        // do nothing in addedIds
        // but increment quantityById
        newState.quantityById[productId] += 1
        return newState
      // if never added
      } else {
        // add id in addedIds
        newState.addedIds.push(productId)
        // create quantityById attribute
        newState.quantityById[productId] = 1
      }
      return newState

    case REMOVE_FROM_CART:
      // if added more than once
      if (state.quantityById[productId] > 1) {
        // do nothing in addedIds
        // but decrement quantityById
        newState.quantityById[productId] = state.quantityById[productId] - 1
        return newState
      // if added once
      } else if (state.quantityById[productId] == 1)  {
        // remove from addedIds
        const index = state.addedIds.indexOf(productId)
        newState.addedIds.splice(index, 1)
        // remove from quantityById
        delete newState.quantityById[productId]
        return newState
      }

    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return superCart(state, action)
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
  return state.addedIds
}
