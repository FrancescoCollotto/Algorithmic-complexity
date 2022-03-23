const {reverse} = require('../reverse');

describe('reverse', () => {
  it('return []', () => {
    expect(reverse([])).toEqual([]);
  })

  it('return original array if length equal 1', () => {
    expect(reverse([1])).toEqual([1]);
  })

  it('reverse the array elements position', () => {
    expect(reverse([1,2,3,4])).toEqual([4,3,2,1]);
  })
})