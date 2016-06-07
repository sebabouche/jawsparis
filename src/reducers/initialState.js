import {Map} from 'immutable'

export default Map({
  products: Map({}),
  fetchProductsError: null,
  isFetching: false,
  cartProducts: Map({})
})
