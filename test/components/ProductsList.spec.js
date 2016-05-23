import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from '../../universal/components/ProductsList'

function setup(props) {
  const component = shallow(
    <ProductsList title={props.title}>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(2),
    h3: component.find('h3')
  }
}

describe('ProductsList component', () => {
  it('should render children', () => {
    // TODO write this test
    //const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    //expect(children.text()).toMatch(/^Test Children$/)
  })
})
