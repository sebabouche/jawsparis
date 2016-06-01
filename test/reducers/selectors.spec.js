import {Map, List} from 'immutable'
import expect from 'expect'
import { getTotal, getCartProducts, getCartProductsQuantity } from '../../src/reducers'

describe('selectors', () => {
  describe('getTotal', () => {
    it('should return price total', () => {
      const state = Map({
        cart: Map({
          addedIds: List.of(1, 2, 3),
          quantityById: Map({
            1: 4,
            2: 2,
            3: 1
          })
        }),
        products: Map({
          byId: Map({
            1: Map({
              id: 1,
              price: 1.99
            }),
            2: Map({
              id: 1,
              price: 4.99
            }),
            3: Map({
              id: 1,
              price: 9.99
            })
          })
        })
      })
      
      expect(getTotal(state)).toBe('27.93')
    })
  })

  describe('getCartProducts', () => {
    it('should return products with quantity', () => {
      const state = Map({
        cart: Map({
          addedIds: List.of( 1, 2, 3 ),
          quantityById: Map({
            1: 4,
            2: 2,
            3: 1
          })
        }),
        products: Map({
          byId: Map({
            1: Map({
              id: 1,
              price: 1.99
            }),
            2: Map({
              id: 1,
              price: 4.99
            }),
            3: Map({
              id: 1,
              price: 9.99
            })
          })
        })
      })

      expect(getCartProducts(state)).toEqual([
        {
          id: 1,
          price: 1.99,
          quantity: 4
        },
        {
          id: 1,
          price: 4.99,
          quantity: 2
        },
        {
          id: 1,
          price: 9.99,
          quantity: 1
        }
      ])
    })
  })

  describe('getCartProductsQuantity', () => {
    it('should return cart product quantities', () => {
      const state = Map({
        cart: ({
          addedIds: [ 1, 2, 3 ],
          quantityById: Map({
            1: 4,
            2: 2,
            3: 1
          })
        }),
        products: Map({
          byId: Map({
            1: Map({
              id: 1,
              price: 1.99
            }),
            2: Map({
              id: 1,
              price: 4.99
            }),
            3: Map({
              id: 1,
              price: 9.99
            })
          })
        })
      })

      expect(getCartProductsQuantity(state)).toEqual({
        1: 4,
        2: 2,
        3: 1
      })
    })
  })
})
