const sort = require('../sort');

describe('sort', () => {

  it('return []', () => {
    expect(sort([])).toEqual([]);
  })

  it('return [1]', () => {
    expect(sort([1])).toEqual([1]);
  })

  it('return the array sorted in ascending order', () => {
    expect(sort([2,5,1,4])).toEqual([1,2,4,5]);
  })

})