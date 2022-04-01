const {bubbleSort} = require('../sort');

describe('bubbleSort', () => {

  it('return []', () => {
    expect(bubbleSort([])).toEqual([]);
  })

  it('return [1]', () => {
    expect(bubbleSort([1])).toEqual([1]);
  })

  it('return the array sorted in ascending order', () => {
    expect(bubbleSort([2,5,1,4])).toEqual([1,2,4,5]);
  })

})