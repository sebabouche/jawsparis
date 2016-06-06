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
  const { type, productId } = action
  switch (type) {
    case ADD_TO_CART:
      // if already added
      if (state.get('addedIds').includes(productId)) {
        // do nothing in addedIds
        // but increment quantityById
        return state.updateIn(['quantityById', productId], quantity => quantity + 1)
      // if never added
      } else {
        return state
          // add id in addedIds
          .update('addedIds', list => list.push(productId))
          // create quantityById attribute
          .setIn(['quantityById', productId], 1)
      }

    case REMOVE_FROM_CART:
      // if added more than once
      if (state.getIn(['quantityById', productId]) > 1) {
        // do nothing in addedIds
        // but decrement quantityById
        return state
          .updateIn(['quantityById', productId], quantity => quantity - 1)
        // if added once
      } else if (state.getIn(['quantityById', productId]) == 1)  {
        const productIndex = state.get('addedIds').indexOf(productId)
        return state
        // remove from addedIds
          .update('addedIds', list => list.splice(productIndex, 1))
        // remove from quantityById
          .deleteIn(['quantityById', productId])
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
  return state.getIn(['quantityById', productId]) || 0
}

export function getQuantities(state) {
  return state.get('quantityById')
}

export function getAddedIds(state) {
  return state.get('addedIds')
}
