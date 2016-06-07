import {Map, List} from 'immutable'
import expect from 'expect'
import reducers from '../../src/reducers'

import initialState from '../../src/reducers/initialState'

describe('reducers', () => {
  context('main reducer', () => {
    it('handles ADD_TO_CART', () => {
      const state = Map({
        shop: Map({
          products: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            }),
            "B": Map({
              title: "Courgettes"
            })
          }),
          cartProducts: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            })
          })
        })
      })
      const nextState = reducers(state, { type: 'ADD_TO_CART', productId: 'B'})

      expect(nextState).toEqual(
        Map({
          shop: Map({
            products: Map({
              "A": Map({
                title: "Radis",
                quantity: 1
              }),
              "B": Map({
                title: "Courgettes",
                quantity: 1
              })
            }),
            cartProducts: Map({
              "A": Map({
                title: "Radis",
                quantity: 1
              }),
              "B": Map({
                title: "Courgettes",
                quantity: 1
              })
            })
          }),
          "routing": Map ({
            "locationBeforeTransitions": null
          })
        })
      )
    })
  })
})
