import { Map, List } from 'immutable'
import expect from 'expect'
import {
  getProducts,
  getProduct,
  getCartProducts,
  getCartProduct,
  getQuantities,
  getQuantity,
  getPrice,
  getSubTotal,
  getTotal
} from '../../src/reducers'

describe('selectors', () => {
  let state = undefined
  beforeEach(() => {
    state = Map({
      shop: Map({
        cartProducts: Map({
          'A': Map({
            id: 'A',
            price_cents: 200,
            available: true,
            quantity: 4
          }),
          'B': Map({
            id: 'B',
            price_cents: 150,
            available: true,
            quantity: 2
          }),
          'D': Map({
            id: 'D',
            price_cents: 400,
            available: true,
            quantity: 1
          })
        }),
        products: Map({
          'A': Map({
            id: 'A',
            price_cents: 200,
            available: true
          }),
          'B': Map({
            id: 'B',
            price_cents: 150,
            available: true
          }),
          'C': Map({
            id: 'C',
            price_cents: 1234,
            available: true
          }),
          'D': Map({
            id: 'D',
            price_cents: 400,
            available: true
          })
        }),
        fetchProductsError: null,
        isFetching: false
      })
      })
  })

  describe('Products selectors', () => {
    describe('getProducts', () => {
      it('should return a Map of products', () => {
        expect(getProducts(state)).toEqual(
          Map({
            'A': Map({
              id: 'A',
              price_cents: 200,
              available: true
            }),
            'B': Map({
              id: 'B',
              price_cents: 150,
              available: true
            }),
            'C': Map({
              id: 'C',
              price_cents: 1234,
              available: true
            }),
            'D': Map({
              id: 'D',
              price_cents: 400,
              available: true
            })
          })
        )
      })
    })

    describe('getProduct', () => {
      it('should return the product for a given id', () => {
        expect(getProduct(state, "C")).toEqual(Map({
          id: 'C',
          price_cents: 1234,
          available: true
        }))
      })
    })
  })

  describe('Cart selectors', () => {
    describe('getCartProducts', () => {
      it('should return products with quantity', () => {
        expect(getCartProducts(state)).toEqual(Map({
          'A': Map({
            id: 'A',
            price_cents: 200,
            available: true,
            quantity: 4
          }),
          'B': Map({
            id: 'B',
            price_cents: 150,
            available: true,
            quantity: 2
          }),
          'D': Map({
            id: 'D',
            price_cents: 400,
            available: true,
            quantity: 1
          })
        }))
      })
    })

    describe('getCartProduct', () => {
      it('should return product with quantity', () => {
        expect(getCartProduct(state, 'A')).toEqual(Map({
          id: 'A',
          price_cents: 200,
          available: true,
          quantity: 4
        }))
      })
    })

    describe('getQuantities', () => {
      it('should return the cart quantities for cart products', () => {
        expect(getQuantities(state)).toEqual(7)
      })
    })

    describe('getQuantity', () => {
      it('should return the cart quantity for a given id in cart', () => {
        expect(getQuantity(state, "A")).toEqual(4)
      })
    })

    describe('getPrice', () => {
      it('should return the product price for a given id', () => {
        expect(getPrice(state, "A")).toEqual(200)
      })
    })

    describe('getSubTotal', () => {
      it('should return price total for a product', () => {

        expect(getSubTotal(state, 'A')).toBe(800)
      })
    })

    describe('getTotal', () => {
      it('should return price total', () => {

        expect(getTotal(state)).toBe(1500)
      })
    })
  })
})
