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
            id: 1,
            title: 'Product 1'
          },
          {
            id: 2,
            title: 'Product 2'
          }
        ]
      }
      const initialState = Map({})
      const nextState = products(initialState, action)

      expect(nextState).toEqualImmutable(
        Map({
          byId: Map({
            1: Map({
              id: 1,
              title: 'Product 1'
            }),
            2: Map({
              id: 2,
              title: 'Product 2'
            })
          }),
          visibleIds: List.of( 1, 2 )
        })
      )
    })
  })
})
