const reverse = require('../reverse');

describe('reverse', () => {
  it('return []', () => {
    expect(reverse([])).toEqual([]);
  })

  it('return original array if length equal 1', () => {
    expect(reverse([1])).toEqual([1]);
  })
})