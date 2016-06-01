import { combineReducers } from 'redux-immutable'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'
import { Map, List } from 'immutable'

function byId(state = Map({}), action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return state.merge(
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      )
    default:
      return state
  }
}

function visibleIds(state = List(), action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return state.merge(action.products.map(product => product.id))
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
