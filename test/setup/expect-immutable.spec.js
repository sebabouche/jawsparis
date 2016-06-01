import expect from 'expect'
import { expect as expectChai } from 'chai'

import {Map, List} from 'immutable'

describe('expect-immutable', () => {
  it('will work', () => {
    expect(Map({ a: 1 })).toEqualImmutable(Map({ a: 1 }))
    expect(Map({ a: 1 })).toNotEqualImmutable(Map({ a: 2 }))

	expect(List([1])).toEqualImmutable(List([1]))
	expect(List([1])).toNotEqualImmutable(List([1, 2]))
  })
})

describe('chai-immutable', () => {
  it('will work', () => {
    expectChai(Map({ a: 1 })).to.equal(Map({ a: 1 }))
    expectChai(Map({ a: 1 })).to.not.equal(Map({ a: 2 }))

	expectChai(List([1])).to.equal(List([1]))
	expectChai(List([1])).to.not.equal(List([1, 2]))
  })
})
