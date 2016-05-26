import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import ProductItem from '../../universal/components/ProductItem'

function setup(product) {
  const actions = {
    onAddToCartClicked: expect.createSpy(),
    onRemoveFromCartClicked: expect.createSpy()
  }

  const component = shallow(
    <ProductItem product={product} addedIds="[2, 3, 4]" cartProductsQuantity="{2: 1, 3: 1, 4: 1}" {...actions} />
  )

  return {
    component: component,
    actions: actions,
    addButton: component.find('button.addButton'),
    removeButton: component.find('button.removeButton'),
    cartProductQuantity: component.find('.cartProductQuantity'),
  }
}

let productProps, addedToCartProductProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      id: 1,
      title: 'Product 1',
      price: 9.99,
    },
    addedToCartProductProps = {
      id: 2,
      title: 'Product 1',
      price: 9.99,
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99 })
  })

  it('should render Add To Cart message', () => {
    const { addButton } = setup(productProps)
    expect(addButton.text()).toMatch(/^Add to cart/)
  })

  it('should call Add action on Add button click', () => {
    const { addButton, actions } = setup(productProps)
    addButton.simulate('click')
    expect(actions.onAddToCartClicked).toHaveBeenCalled()
  })

  it('should not display removeButton', () => {
    const { removeButton, product } = setup(productProps)
    expect(removeButton.length).toEqual(0)
  })

  context('when product as been added to cart', () => {
    it('shoud render removeButton', () => {
      const { removeButton, product } = setup(addedToCartProductProps)
      expect(removeButton.length).toEqual(1)
    })

    it('should render cart product quanity', () => {
      const { cartProductQuantity } = setup(addedToCartProductProps)
      expect(cartProductQuantity.length).toEqual(1)
    })
  })

  context('when product as been added more than once', () => {
  })

})
