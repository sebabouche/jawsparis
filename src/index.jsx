import React from 'react';
import {render} from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'

import App from './containers/App'

/*
 * jQuery & styles
 */
let $ = require('jquery');
window.jQuery = $;
window.$ = $;
require('uikit/dist/js/uikit.min.js');
require('uikit/dist/js/components/sticky.js');
require('uikit/dist/js/components/slideshow.js');
require('./styles.scss');

/*
 * Redux store creation and hydration
 */
const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware))
store.dispatch(getAllProducts())

render(<App store={store} />, document.getElementById("app"))
