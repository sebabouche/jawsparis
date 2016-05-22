import jsdom from 'jsdom'
import expect from 'expect'
import { shallow, mount } from 'enzyme'

import register from 'ignore-styles'
register(['.css', '.sass', '.scss', '.png', '.svg', '.jpg'])

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
})
