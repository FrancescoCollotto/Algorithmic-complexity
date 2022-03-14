

const timeFramework = (testFunc) => {
  const start = Date.now();
  testFunc();
  const end = Date.now();
  const result = end - start;
  return result;
}

// create 2d array of numbers increasing in dimension by step
const createTestData = (step, limit) => {
  const listOfArrays = [];
  for(let i = step; i <= limit; i += step) {
    const arrayOfNumbers = Array.from(Array(i).keys());
    listOfArrays.push(arrayOfNumbers);
  }
  return listOfArrays;
}

// const timing = timeFramework(() => numbers.reverse());
// console.log(timing)
console.log(createTestData(1, 10))

