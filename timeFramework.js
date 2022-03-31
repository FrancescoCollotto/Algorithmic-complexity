const { hrtime } = require('process');
const fs = require('fs');
const path = require('path');
const {reverse, reverseInPlace, reverseWithMap} = require('./algorithms/reverse');
const {sort, alternativeSort} = require('./algorithms/sort');
const filter = require('./algorithms/filter');
const dataFile = path.join(path.dirname(__filename), 'data.txt');

const timeFramework = (data, testFunction) => {
  const result = [];
  for(let arr of data) {
    const start = hrtime.bigint();
    testFunction(arr);
    const end = hrtime.bigint();
    const time = end - start;
    result.push({size: arr.length, microseconds: time/1000n});
  }
  return result;
}

// create array of arrays increasing in size by step
const createTestData = (step, limit) => {
  const listOfArrays = [];
  for(let i = step; i <= limit; i += step) {
    const arrayOfNumbers = Array.from({length: i}, () => Math.floor(Math.random() * limit));
    listOfArrays.push(arrayOfNumbers);
  }
  return listOfArrays;
}

const formatData = (dataList) => {
  return dataList.map((data) => {
    return `${data['size']}, ${data['microseconds']}`;
  }).join('\n');
}

const writeFile = (content) => {
  try {
    fs.writeFileSync(dataFile, content);
    console.log('written data successfully');
  } catch (err) {
    console.error(err);
  }
}

try {
  const data = createTestData(5000, 100000);
  const dataList = timeFramework(data, addFunctionToTestHere);
  const content = formatData(dataList);
  writeFile(content);
} catch(e) {
  console.log('Have you added a function to test?');
}
