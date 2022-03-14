

const timeFramework = (testFunc) => {
  const start = Date.now();
  testFunc();
  const end = Date.now();
  const result = end - start;
  return result;
}

const numbers = Array.from(Array(100000000).keys())

const timing = timeFramework(() => numbers.reverse());
console.log(timing)

