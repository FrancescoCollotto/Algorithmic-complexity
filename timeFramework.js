const { hrtime } = require('process');

const timeFramework = (data) => {
  const result = [];
  for(let arr of data) {
    const start = hrtime.bigint();
    arr.reverse();
    const end = hrtime.bigint();
    const time = end - start;
    result.push({size: arr.length, time});
  }
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

const data = createTestData(5000, 100000);
reverseTimeList = timeFramework(data)
console.log(reverseTimeList)
