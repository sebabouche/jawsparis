import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import CartShow from '../../src/components/CartShow'
import Checkout from '../../src/components/Checkout'
import Cart from '../../src/components/Cart'
import DeliveryFields from '../../src/components/DeliveryFields'
import PaymentFields from '../../src/components/PaymentFields'

describe('Checkout', () => {
  it('shows actual bag', () => {
    const component = shallow(<Checkout />)

    expect(component.find(CartShow).length).to.equal(1)
  })

  it('shows delivery information if shopping bag is valid only', () => {
    const component = shallow(<Checkout />)
    component.setState({editCart: true})

    expect(component.find(DeliveryFields).length).to.equal(0)
  })

  it('shows paiment information if everything is valid only', () => {
    const component = shallow(<Checkout />)
    component.setState({editCart: false,
    showPayment:true})

    expect(component.find(PaymentFields).length).to.equal(1)
  })


  it('renders the button "Modify the bag"', () => {
    const component = shallow(<Checkout />)

    expect(component.text()).to.contain("Modifier mon cabas")
  })

  it('display bag field modification if pressed on the button Modify', () => {
    const component = shallow(<Checkout />)

    expect(component.text()).to.contain("Modifier mon cabas")
  })
})
