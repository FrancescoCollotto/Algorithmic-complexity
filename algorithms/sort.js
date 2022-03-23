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

module.exports = sort;
