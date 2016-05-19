import {Map, fromJS, toJS} from 'immutable'
import {expect} from 'chai'

import { initializeReducer } from '../../src/reducers/initialize-reducer'
import * as actions from '../../src/actions'

import { data } from '../../src/data/data.js'

describe('initializeReducer', () => {

  it('handles INITIALIZE', () => {
    const state = {}
    const action = {type: actions.INITIALIZE, data: data}
    const nextState = initializeReducer(state, action)

    console.log("nextState::::", nextState.get('categories').size)

    expect(nextState.get('categories').size).to.equal(2)
  })
})
