const sort = (arr) => {
  let done = false;
  while(!done) {
    done = true;
    for(let i = 1; i < arr.length; i++) {
      if(arr[i-1] > arr[i]) {
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
        done = false;
      }
    }
  }
  return arr;
}

// Alternative using Math.min (sort of cheating!), empty original array
const alternativeSort = (arr) => {
  const sortedArray = [];
  const arrLength = arr.length;
  for(let i = 0; i < arrLength; i++) {
    let min = Math.min(...arr);
    minIndex = arr.indexOf(min);
    [arr[minIndex], arr[arr.length-1]] = [arr[arr.length-1], arr[minIndex]];
    sortedArray.push(arr.pop())
  }
  return sortedArray;
}

module.exports = {sort, alternativeSort};

