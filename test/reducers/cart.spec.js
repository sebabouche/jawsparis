import {Map, List} from 'immutable'
import expect from 'expect'
import cart from '../../src/reducers/cart'

import initialState from '../../src/reducers/initialState'

describe('reducers', () => {
  describe('cart', () => {
    it('provides the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('handles CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('handles CHECKOUT_FAILURE action', () => {
      expect(cart({}, { type: 'CHECKOUT_FAILURE', cart: 'cart state' })).toEqual('cart state')
    })

    context('when ADD_TO_CART action', () => {
      it('when not in cart, it should add quantities', () => {
        const state = Map({
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
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 'B'})

        expect(nextState).toEqual(
          Map({
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
          })
        )
      })

      it('when in cart (≥1), it should increment quantitites', () => {
        const state = Map({
          products: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            }),
            "B": Map({
              title: "Courgettes",
            })
          }),
          cartProducts: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            })
          })
        })
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 'A'})

        expect(nextState).toEqual(
          Map({
            products: Map({
              "A": Map({
                title: "Radis",
                quantity: 2
              }),
              "B": Map({
                title: "Courgettes",
              })
            }),
            cartProducts: Map({
              "A": Map({
                title: "Radis",
                quantity: 2
              })
            })
          })
        )
      })
    })

    context('when REMOVE_FROM_CART action', () => {
      it('when not in cart, should do nothing', () => {
        const state = Map({
          products: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            }),
            "B": Map({
              title: "Courgettes",
            })
          }),
          cartProducts: Map({
            "A": Map({
              title: "Radis",
              quantity: 1
            })
          })
        })
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'C'})

        expect(nextState).toEqual(state)
      })

      it('when in cart (1), should remove product in cartProducts, quantity in products', () => {
        const state = Map({
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
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'A'})

        expect(nextState).toEqual(Map({
            products: Map({
              "A": Map({
                title: "Radis"
              }),
              "B": Map({
                title: "Courgettes"
              })
            }),
            cartProducts: Map({})
          })
        )
      })

      it('when in cart (>1), should decrement quantities', () => {
        const state = Map({
          products: Map({
            "A": Map({
              title: "Radis",
              quantity: 2
            }),
            "B": Map({
              title: "Courgettes"
            })
          }),
          cartProducts: Map({
            "A": Map({
              title: "Radis",
              quantity: 2
            })
          })
        })
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'A'})

        expect(nextState).toEqual(
          Map({
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
        )
      })
    })
  })
})
