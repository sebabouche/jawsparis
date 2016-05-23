import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './reducers/'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

export default function() {
  const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )

  return store
}
