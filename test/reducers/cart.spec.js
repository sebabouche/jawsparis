import {Map, List} from 'immutable'
import expect from 'expect'
import cart from '../../src/reducers/cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = Map({
      addedIds: List(),
      quantityById: Map({})
    })

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
      it('when product is not in cart, it should add product', () => {
        const state = Map({
          addedIds: List.of('A'),
          quantityById: Map({ 'A': 1 })
        })
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 'B'})

        expect(nextState).toEqual(
          Map({
            addedIds: List.of('A', 'B'),
            quantityById: Map({ 'A': 1, 'B': 1 })
          })
        )
      })

      it('when product is already in cart, it should increment quantitites', () => {
        const state = Map({
          addedIds: List.of('A', 'B'),
          quantityById: Map({ 'A': 1, 'B': 1 })
        })
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 'B'})

        expect(nextState).toEqual(Map({
          addedIds: List.of('A', 'B'),
          quantityById: Map({ 'A': 1, 'B': 2 })
        }))
      })
    })

    context('when REMOVE_FROM_CART action', () => {
      it('when not in cart, should do nothing', () => {
        const state = Map({
          addedIds: List.of('A', 'B'),
          quantityById: Map({ 'A': 1, 'B': 1 })
        })

        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'C'})

        expect(nextState).toEqual(Map({
          addedIds: List.of('A', 'B'),
          quantityById: Map({ 'A': 1, 'B': 1 })
        }))
      })

      it('when product was once in cart, should remove product ', () => {
        const state = Map({
          addedIds: List.of('A', 'B', 'C'),
          quantityById: Map({'A': 1, 'B': 1, 'C': 1})
        })
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'B'})

        expect(nextState).toEqual(Map({
          addedIds: List.of('A', 'C'),
          quantityById: Map({'A': 1, 'C': 1})
        }))
      })

      it('when product is more than once in cart, should substract product quantity ', () => {
        const state = Map({
          addedIds: List.of('A', 'B', 'C'),
          quantityById: Map({'A': 1, 'B': 2, 'C': 1})
        })
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 'B'})

        expect(nextState).toEqual(Map({
          addedIds: List.of('A', 'B', 'C'),
          quantityById: Map({'A': 1, 'B': 1, 'C': 1})
        }))
      })
    })
  })
})
