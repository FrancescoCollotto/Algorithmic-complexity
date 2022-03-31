const filter = require('../filter');

describe('filter', () => {

  it('return []', () => {
    expect(filter([], (el) => true)).toEqual([]);
  })

  it('return same array as the original if the function provided is always true', () => {
    expect(filter([1,2,3,4,5], (el) => true)).toEqual([1,2,3,4,5]);
  })

  it('return an empty array if the function provided is always false', () => {
    expect(filter([1,2,3,4,5], (el) => false)).toEqual([]);
  })

  it('filter even numbers', () => {
    expect(filter([1,2,3,4,5], (el) => el % 2 === 0)).toEqual([2,4]);
  })

})