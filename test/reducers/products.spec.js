import {Map, List} from 'immutable'
import expect from 'expect'
import products from '../../src/reducers/products'

import initialState from '../../src/reducers/initialState'

describe('reducers', () => {
  describe('products', () => {
    it('should handle SET_IS_FETCHING action', () => {
      const state = initialState
      const action = {
        type: 'SET_IS_FETCHING'
      }
      const nextState = products(state, action)

      expect(nextState.get('isFetching')).toEqual(true)
    })

    it('should handle FETCH_PRODUCTS_SUCCESS action', () => {
      const state = initialState

      const action = {
        type: 'FETCH_PRODUCTS_SUCCESS',
        products: [
          {
            "title":"Concombre",
            "category":{"name":"Plats"},
            "merchant":{"name":"La boucherie Sanzot"}
          },
          {
            "title":"Radis",
            "category":{"name":"Entrées"},
            "merchant":{"name":"La boucherie Sanzot"}
          },
          {
            "title":"Salade",
            "category":{"name":"Entrées"},
            "merchant":{"name":"La boucherie Sanzot"}
          }
        ]
      }

      const nextState = products(state, action)

      expect(nextState).toEqualImmutable(Map({
        fetchProductsError: null,
        isFetching: false,
        products: List.of(
          Map({ title: "Concombre", "category": Map ({ "name": "Plats" }), "merchant": Map ({ "name": "La boucherie Sanzot" }) }),
          Map({ title: "Radis", "category": Map ({ "name": "Entrées" }), "merchant": Map ({ "name": "La boucherie Sanzot" }) }),
          Map({ title: "Salade", "category": Map ({ "name": "Entrées" }), "merchant": Map ({ "name": "La boucherie Sanzot" }) })
        ),
        cartProducts: Map({})
      }))
    })

    it('should handle FETCH_PRODUCTS_FAILURE', () => {
      const state = undefined
      const action = {
        type: 'FETCH_PRODUCTS_FAILURE',
        error: {
          status: '404',
          statusText: 'Not Found'
        }
      }

      const nextState = products(state, action)

      expect(nextState).toEqualImmutable(Map({
        products: Map({}),
        fetchProductsError: Map({
          status: '404',
          statusText: 'Not Found'
        }),
        isFetching: false,
        cartProducts: Map({}),
      }))
    })
  })
})
