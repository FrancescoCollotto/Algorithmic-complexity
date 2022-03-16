// Reverse an array without using the built-in function

const reverse = (arr) => {
  const reversedArray = [];
  if (arr.length <= 1) {
    return arr;
  } else {
    for(let i = arr.length -1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
}

module.exports = reverse;

/* INPUT         |        OUTPUT
  []             |  []
  [1]            |  [1]
  [1,2,3,4]      | [4,3,2,1]
*/

