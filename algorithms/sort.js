const bubbleSort = (arr) => {
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

// selection sort using Math.min, empty original array
const selectionSort = (arr) => {
  const sortedArray = [];
  const arrLength = arr.length;
  for(let i = 0; i < arrLength; i++) {
    let min = Math.min(...arr);
    let minIndex = arr.indexOf(min);
    [arr[minIndex], arr[arr.length-1]] = [arr[arr.length-1], arr[minIndex]];
    sortedArray.push(arr.pop());
  }
  return sortedArray;
}
 
// insertion sort
const insertionSort = (arr) => {
  const sortedArray = [];
  while(arr.length > 0) {
    let last = arr.pop();
    if(sortedArray.length === 0 || last > sortedArray[sortedArray.length -1]) {
      sortedArray.push(last);
    } else {
      for(let i = 0; i < sortedArray.length; i++) {
        if(last <= sortedArray[i]) {
          sortedArray.splice(i, 0, last);
          break;
        }
      }
    }
  }
  return sortedArray;
}

module.exports = {bubbleSort, selectionSort, insertionSort};



// const mergeSortedArray = (arr1, arr2) => {
//   let index1 = 0;
//   let index2 = 0;
//   const mergedArray = [];
//   do {
//     if(arr1[index1] < arr2[index2] || !arr2[index2]) {
//       mergedArray.push(arr1[index1]);
//       index1++;
//     } else {
//       mergedArray.push(arr2[index2]);
//       index2++;
//     }
//   } while (mergedArray.length < arr1.length + arr2.length);
//   return mergedArray;
// }
