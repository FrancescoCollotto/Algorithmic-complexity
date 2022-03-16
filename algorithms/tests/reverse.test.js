const { expect } = require('@jest/globals');
const reverse = require('../reverse');

describe('reverse', () => {
  it('return []', () => {
    expect(reverse([])).toEqual([]);
  })
})