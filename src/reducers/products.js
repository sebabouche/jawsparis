import { combineReducers } from 'redux-immutable'
import * as types from '../constants/ActionTypes'
import { Map, List, fromJS } from 'immutable'

const initialState = Map({
  products: [],
  fetchProductsError: null,
  isFetching: false,
})


export default (state = initialState, action) => {
  // console.log('products reducer was called with state', state, 'and action: ', action)
  switch (action.type) {
    case types.SET_IS_FETCHING: {
      return state.merge({
        isFetching: true,
      })
    }

    case types.FETCH_PRODUCTS_SUCCESS: {
      return state.merge({
        products: action.products,
        fetchProductsError: null,
        isFetching: false,
      })
    }

    case types.FETCH_PRODUCTS_FAILURE: {
      return state.merge({
        fetchProductsError: action.error,
        isFetching: false,
      })
    }

    default:
      return state
  }
}

export function getProducts(state) {
  //console.log('state in products: ', state)
  //console.log('products in products: ', state.get('products'))
  return state.get('products')
}

export function getProduct(state, id) {
  //console.log('in products state', state)
  return state.getIn(['products', id])
}

export function getPrice(state, id) {
  return state.getIn(['products', id, 'price_cents'])
}
