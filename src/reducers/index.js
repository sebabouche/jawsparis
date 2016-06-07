import { Map, toList, toJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

import * as types from '../constants/ActionTypes'

import cart from './cart'
import products from './products'
import routing from './routing'

import initialState from './initialState'

export function shop(state = initialState, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
    case types.REMOVE_FROM_CART:
    case types.CHECKOUT_REQUEST:
    case types.CHECKOUT_SUCCESS:
    case types.CHECKOUT_FAILURE:
      return cart(state, action)

    case types.SET_IS_FETCHING:
    case types.FETCH_PRODUCTS_SUCCESS:
    case types.FETCH_PRODUCTS_FAILURE:
      return products(state, action)

    default:
      return state
  }
}

export default combineReducers({
  shop,
  routing
})

import * as selectors from './selectors'
export const {
  getProducts,
  getProduct,
  isInCart,
  getPrice,
  getCartProducts,
  getCartProduct,
  getQuantities,
  getQuantity,
  getSubTotal,
  getTotal
} = selectors
