/**
 * Mocking client-server processing
 */
import _products from './products.json'

console.log(products_of_the_day)

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_products), timeout || TIMEOUT)
  },

  buyProducts(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  }
}
