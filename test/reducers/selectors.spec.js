import { Map, List } from 'immutable'
import expect from 'expect'
import {
  getProducts,
  getProduct,
  isInCart,
  somethingInCart,
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

    describe('isInCart', () => {
      it('should be true if in cart', () => {
        expect(isInCart(state, 'A')).toEqual(true)
      })

      it('should be false if not in cart', () => {
        expect(isInCart(state, 'C')).toEqual(false)
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

      it('should return undefined if not in cart', () => {
        expect(getCartProduct(state, 'C')).toEqual(undefined)
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

      it('should return 0 if the product is not in cart', () => {
        expect(getQuantity(state, "C")).toEqual(0)
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

      it('should return 0 if product not in cart', () => {
        expect(getSubTotal(state, 'C')).toBe(0)
      })

    })

    describe('getTotal', () => {
      it('should return price total', () => {

        expect(getTotal(state)).toBe(1500)
      })
    })
  })

  describe('somethingInCart', () => {
    it('should be true if one or more products are in cart', () => {
      const stateWithProductsInCart = Map({
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
          })
        })
      })

      expect(somethingInCart(stateWithProductsInCart)).toBe(true)
    })

    it('should be false if no products are in cart', () => {
      const stateWithNoProductInCart = Map({
        shop: Map({
          cartProducts: Map({})
        })
      })

      expect(somethingInCart(stateWithNoProductInCart)).toBe(false)
    })
  })
})
