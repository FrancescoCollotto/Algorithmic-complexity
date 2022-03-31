const filter = (arr, fn) => {
  const filteredArray = [];
  for(let el of arr) {
    if(fn(el)) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
}

module.exports = filter;