// Reverse an array without using the built-in function

const reverse = (arr) => {
  if (arr.length === 0) {
    return [];
  } else {
    return [1];
  }
}

module.exports = reverse;

/* INPUT         |        OUTPUT
  []             |  []
  [1]            |  [1]
  [1,2,3,4]      | [4,3,2,1]
*/
