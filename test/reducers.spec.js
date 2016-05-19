import {expect} from 'chai'

import { reducer } from '../src/reducers'

describe("reducer",() => {
  it ("handles add to cart",()=>{
    const state = {
      cart: [4, 7]
    }
    const nextState = reducer(state, {type:"ADD_TO_CART", productId: 10})

    expect(nextState.cart).to.deep.equal([4, 7, 10])
  })
})
