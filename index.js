/* 1 Create a function which returns the number of true values there are in an array. */
const countTrue = (arr) => arr.filter((el) => el).length;
document.write(
  countTrue([true, false, false, false, true, true, false]) + "<br>"
);

/* 2 Create a function that takes an array containing only numbers and return the first 
element. */
const getFirstValue = (arr) => arr.shift();
document.write(getFirstValue([5, 9, 99, 89, 12]) + "<br>");

/* 3 Create a function that finds the maximum range of a triangle's third edge. 
(side1 + side2) - 1 = maximum range of third edge.  */
const nextEdge = (a, b) => a + --b;
document.write(nextEdge(10, 9) + "<br>");

/* 4 Write a function that converts an object into an array, where each element 
represents a key-value pair in the form of an array. */
const toArray = (obj) => Object.entries(obj);
console.log(toArray({ a: 1, b: 2, c: 3 })); //[['a', 1], ['b', 2], ['c', 3]]

/* 5 Create a function that takes a number as an argument, 
increments the number by +1 and returns the result. */
const addition = (a) => ++a;
document.write(addition(10) + "</br>");

/* 6 Length of a Nested Array */
const getLength = (arr) => arr.flat(Infinity).length;

/* 7 Tower of Hanoi - Create a function that takes a number discs as an argument 
and returns the minimum amount of steps needed to complete the game.*/
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}

/* 8 Create a function that concatenates n input arrays, where n is variable. */
//const concat = (...args) => [...args].reduce((arr, el) => arr.concat(el));
//const concat = (...args) => [].concat(...args);
const concat = (...args) => args.flat(Infinity);
console.log(concat([1, 2, 3, [99, 99]], [4, 5], [6, 7]));

/* 9 Create a function that takes two numbers as arguments (num, length) and 
returns an array of multiples of num until the array length reaches length.
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35] */
const arrayOfMultiples = (num, length) =>
  [...Array(length).keys()].map((el) => (el + 1) * num);

/* 10 Create a function that takes an array of numbers and returns the second 
largest number.*/
const secondLargest = (a) => a.sort((a, b) => b - a)[1];
