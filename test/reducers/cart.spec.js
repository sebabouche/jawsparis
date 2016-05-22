import expect from 'expect'
import cart from '../../src/reducers/cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {}
    }

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
        const state = {
          addedIds: [ 1 ],
          quantityById: { 1: 1 }
        }
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 2})

        expect(nextState).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        })
      })

      it('when product is already in cart, it should increment quantitites', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        }
        const nextState = cart(state, { type: 'ADD_TO_CART', productId: 2})

        expect(nextState).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 2 }
        })
      })
    })

    context('when REMOVE_FROM_CART action', () => {
      it('when not in cart, should do nothing', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        }

        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 3})

        expect(nextState).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        })
      })

      it('when product was once in cart, should remove product ', () => {
        const state = {
          addedIds: [1, 2, 3],
          quantityById: {1: 1, 2: 1, 3: 1}
        }
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 2})

        expect(nextState).toEqual({
          addedIds: [1, 3],
          quantityById: {1: 1, 3: 1}
        })
      })

      it('when product is more than once in cart, should substract product quantity ', () => {
        const state = {
          addedIds: [1, 2, 3],
          quantityById: {1: 1, 2: 2, 3: 1}
        }
        const nextState = cart(state, { type: 'REMOVE_FROM_CART', productId: 2})
        console.log("nextState", nextState)

        expect(nextState).toEqual({
          addedIds: [1, 2, 3],
          quantityById: {1: 1, 2: 1, 3: 1}
        })
      })
    })
  })
})
