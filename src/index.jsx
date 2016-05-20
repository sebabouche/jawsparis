import React from 'react';
import ReactDOM from 'react-dom';

import days from './api/days'
import {initializeDays, initializeCart} from './actions'

import createStore from './create-store'
const store = createStore()
store.dispatch(initializeDays(days))
store.dispatch(initializeCart())

import App from './components/App';

let $ = require('jquery');
window.jQuery = $;
window.$ = $;

require('uikit/dist/js/uikit.min.js');
require('uikit/dist/js/components/sticky.js');
require('uikit/dist/js/components/slideshow.js');

require('./styles.scss');

ReactDOM.render(<App store={store} />, document.getElementById("app"));
