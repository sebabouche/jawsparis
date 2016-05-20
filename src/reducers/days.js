import { Map, fromJS } from 'immutable'
import { initialize } from '../actions/index'
import {INITIALIZE} from '../actions'

export const initializeReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE:
      return fromJS(action.data)

    default:
      return state
  }
}
