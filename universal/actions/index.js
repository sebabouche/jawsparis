import shop from '../api/shop'
//import shop from '../../server/api/http'
import * as types from '../constants/ActionTypes'

function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId))
  }
}

function removeFromCartUnsafe(productId) {
  return {
    type: types.REMOVE_FROM_CART,
    productId
  }
}

export function removeFromCart(productId) {
  return (dispatch, getState) => {
    dispatch(removeFromCartUnsafe(productId))
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}
