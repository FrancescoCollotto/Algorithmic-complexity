// Reverse an array without using the built-in function

const reverse = (arr) => {
  const reversedArray = [];
  for(let i = arr.length -1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

module.exports = reverse;
