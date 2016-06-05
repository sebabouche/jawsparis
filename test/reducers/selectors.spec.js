import { Map, List } from 'immutable'
import expect from 'expect'
import {
  getProducts,
  getProduct,
  getQuantity,
  getPrice,
  getAddedIds,
  getTotal,
  getCartProducts,
  getCartProductsQuantity
} from '../../src/reducers'

describe('selectors', () => {
  let state = undefined
  beforeEach(() => {
    state = Map({
      cart: Map({
        addedIds: List.of('A', 'B', 'D'),
        quantityById: Map({
          'A': 4,
          'B': 2,
          'D': 1
        })
      }),
      products: Map({
        fetchProductsError: null,
        isFetching: false,
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

        }
        )
      })
    })
  })

  describe('getProducts', () => {
    it('should return a Map of products', () => {
      console.log('state: ', state)
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

  describe('getQuantity', () => {
    it('should return the cart quantity for a given id in cart', () => {
      expect(getQuantity(state, "A")).toEqual(4)
    })
  })

  describe('getPrice', () => {
    it('should return the product price for a given id in cart', () => {
      expect(getPrice(state, "A")).toEqual(200)
    })
  })

  describe('getAddedIds', () => {
    it('should return an immutable list of ids added to cart', () => {
      expect(getAddedIds(state)).toEqual(
        ["A", "B", "D"]
      )
    })
  })

  describe('getTotal', () => {
    it('should return price total', () => {

      expect(getTotal(state)).toBe(1500)
    })
  })

  describe('getCartProducts', () => {
    it('should return products with quantity', () => {
      expect(getCartProducts(state)).toEqual(
        [
          {
            id: 'A',
            price_cents: 200,
            quantity: 4,
            available: true
          },
          {
            id: 'B',
            price_cents: 150,
            quantity: 2,
            available: true
          },
          {
            id: 'D',
            price_cents: 400,
            quantity: 1,
            available: true
          }
        ]
      )
    })
  })

  describe('getCartProductsQuantity', () => {
    it('should return cart product quantities', () => {
      expect(getCartProductsQuantity(state)).toEqual(
        {
          'A': 4,
          'B': 2,
          'D': 1
        }
      )
    })
  })
})
