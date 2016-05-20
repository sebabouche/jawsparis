import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import { fromJS } from 'immutable'

import { ProductPage } from '../../src/components/ProductPage'

import { days } from '../../src/api/days.json'

describe('ProductPage', () => {
  it('shows the products', () => {
    const component = shallow(<ProductPage days={fromJS(days)} />)
    expect(component.find('img')).to.have.length(1)
  })
})
