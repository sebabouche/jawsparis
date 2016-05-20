import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import Thankyou from '../../src/components/Thankyou'

describe('Thankyou', () => {
  it('shows the logo', () => {
    const component = shallow(<Thankyou />)
    expect(component.find('img').length).to.equal(1)
  })

  it('renders the title', () => {
    const component = shallow(<Thankyou />)
    expect(component.text()).to.contain("Merci!")
  })


})
