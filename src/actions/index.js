import requestsManager from '../api/requestsManager'
import * as types from '../constants/ActionTypes'

// import shop from '../api/shop'

export function setIsFetching() {
  return {
    type: types.SET_IS_FETCHING,
  }
}

export function fetchProductsSuccess(data) {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    products: data,
  }
}

export function fetchProductsFailure(error) {
  return {
    type: types.FETCH_PRODUCTS_FAILURE,
    error,
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(setIsFetching())
    return (
      requestsManager
        .fetchEntities()
        .then(res => dispatch(fetchProductsSuccess(res.data)))
        .catch(res => {
          dispatch(fetchProductsFailure(
            {
              status: res.status,
              statusText: res.statusText
            }
          ))
        })
    );
  };
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
