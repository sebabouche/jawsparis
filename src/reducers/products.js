import {Map, fromJS} from 'immutable'
import * as types from '../constants/ActionTypes'

import initialState from './initialState'

function createProductMap(products, product) {
  const productMap = fromJS(product)
  return products.set(
    product.id,
    productMap
  )
}

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
        products: action.products.reduce(createProductMap, new Map({})),
        fetchProductsError: null,
        isFetching: false
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
