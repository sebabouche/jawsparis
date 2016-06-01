import expect from 'expect'
import { expect as expectChai} from 'chai'

import products from '../../src/reducers/products'

import {Map, List} from 'immutable'

describe('reducers', () => {
  describe('products', () => {
    it('should handle RECEIVE_PRODUCTS action', () => {
      const action = {
        type: 'RECEIVE_PRODUCTS',
        products: [
          {
            id: 'A',
            title: 'Product 1',
            available: true
          },
          {
            id: 'B',
            title: 'Product 2',
            available: false
          }
        ]
      }
      const initialState = Map({})
      const nextState = products(initialState, action)

      expect(nextState).toEqualImmutable(
        Map({
          'A': Map({
            id: 'A',
            title: 'Product 1',
            available: true
          }),
          'B': Map({
            id: 'B',
            title: 'Product 2',
            available: false
          })
        })
      )
    })
  })
})
