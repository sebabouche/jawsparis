import { combineReducers } from 'redux-immutable'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'
import { Map, List } from 'immutable'

export default (state = Map({}), action) => {
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

export function getProduct(state, id) {
  return state.get(id)
}

export function getPrice(state, id) {
  return state.getIn([id, 'price'])
}
