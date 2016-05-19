import {Map, List} from 'immutable'
import {expect} from 'chai'

import { cartReducer } from '../../src/reducers/cart-reducer'

describe("cartReducer",() => {
  it ('returns state if unkonw action', () => {
    const state = Map({
      cart: List.of("00001", "00002")
    })

    const nextState = cartReducer(state, {type:'UNKOWN_ACTION', some: "data"})

    expect(nextState).to.equal(state)
  })

  it ("handles add to cart",()=>{
    const state = Map({
      person: List.of("Sacha", "Seb"),
      cart: List.of("00001", "00002")
    })
    const nextState = cartReducer(state, {type:"ADD_TO_CART", productId: "00003"})

    expect(nextState).to.equal(Map({
      cart: List.of("00001", "00002", "00003"),
      person: List.of("Sacha", "Seb")}
    ))
    expect(state.get('cart')).to.equal(List.of("00001", "00002"))
  })

/*
  it ("handles remove from cart",()=>{
    const state = {
      cart: ["00001", "00002","00003"]
    }
    const nextState = reducer(state, {type:"REMOVE_FROM_CART", productId: "00003"})

    expect(nextState.cart).to.deep.equal(["00001", "00002"])
    expect(state.cart).to.deep.equal(["00001", "00002", "00003"])
  })
*/


})
