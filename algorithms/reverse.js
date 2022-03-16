// Reverse an array without using the built-in function

const reverse = (arr) => {
  const reversedArray = [];
  for(let i = arr.length -1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

const reverseInPlace = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let lastEl = arr.pop();
    arr.splice(i, 0, lastEl)
  }
  return arr;
}

module.exports = {reverse, reverseInPlace};
