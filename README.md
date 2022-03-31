# Algorithmic Complexity

This application is an assignment from The algorithmic complexity course, the part of computer science that deals with how efficient programmes are.   
I have implemented a simple time framework app to check how much time algorithms takes to run and how they scale when dealing with increasing array sizes.  
The results are shown in a google sheet chart.

## How to use
- clone this repo, run `npm install` to install dependencies  
- create a `data.txt` file in the root folder, the results will be written on this file.
- in `timeFramework.js` replace `addFunctionToTestHere` on line 48 with the function you want to test
- in the terminal run `node timeFramework.js`, the results will be saved on data.txt
- you can now import the data in a google sheet and create a chart
- you can change the array sizes as you like by changing inputs in createTestData function

## Findings
I have tested 3 javascript built-in functions and they all show linear behaviour when increasing array size:

![Javascript built-in functions](./charts/JSmethods.png?raw=true)

I tested my own implementation of the same functions (available in the algorithms folder):
- my sort() show quadratic behaviour:

![My sort function](./charts/mySort.png?raw=true)

- my reverse() show a linear behaviour but has big irregularities:

![My reverse function](./charts/myReverse.png?raw=true)

- my filter() show a linear behaviour with small irregularities:

![My filter function](./charts/myFilter.png?raw=true)
