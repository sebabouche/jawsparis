import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ShoppingBagSummary from '../../src/components/ShoppingBagSummary'
import Checkout from '../../src/components/Checkout';
import ShoppingBagFields from '../../src/components/ShoppingBagFields'
import DeliveryFields from '../../src/components/DeliveryFields'
import PaymentFields from '../../src/components/PaymentFields'
describe('Checkout', () => {
  it('shows actual bag', () => {
    const component = shallow(<Checkout />);
    expect(component.find(ShoppingBagSummary).length).to.equal(1);
  });

  it('shows delivery information if shopping bag is valid only', () => {
    const component = shallow(<Checkout />);
    component.setState({editShoppingBag: true});
    expect(component.find(DeliveryFields).length).to.equal(0);
  });
  it('shows paiment information if everything is valid only', () => {
    const component = shallow(<Checkout />);
    component.setState({editShoppingBag: false,
    showPayment:true})
    expect(component.find(PaymentFields).length).to.equal(1);
  });


  it('renders the button "Modify the bag"', () => {
    const component = shallow(<Checkout />);
    expect(component.text()).to.contain("Modifier mon cabas");
  });

  it('display bag field modification if pressed on the button Modify', () => {
    const component = shallow(<Checkout />);
    expect(component.text()).to.contain("Modifier mon cabas");
  });



});
