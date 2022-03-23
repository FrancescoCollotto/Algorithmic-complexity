// Reverse an array without using the built-in function

const reverse = (arr) => {
  const reversedArray = [];
  for(let i = arr.length -1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// slower
const reverseInPlace = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let lastEl = arr.pop();
    // splice is a memory costly operation
    arr.splice(i, 0, lastEl)
  }
  return arr;
}

const reverseWithMap = (arr) => {
  return arr.map((el, i) => {
    return arr[arr.length-1-i];
  })
}

module.exports = {reverse, reverseInPlace, reverseWithMap};
