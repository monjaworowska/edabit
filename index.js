/* Create a function which returns the number of true values there are in an array. */
const countTrue = (arr) => arr.filter((el) => el).length;
document.write(
  countTrue([true, false, false, false, true, true, false]) + "<br>"
);

/* Create a function that takes an array containing only numbers and return the first 
element. */
const getFirstValue = (arr) => arr.shift();
document.write(getFirstValue([5, 9, 99, 89, 12]) + "<br>");

/* Create a function that finds the maximum range of a triangle's third edge. 
(side1 + side2) - 1 = maximum range of third edge.  */
const nextEdge = (a, b) => a + --b;
document.write(nextEdge(10, 9) + "<br>");

/* Write a function that converts an object into an array, where each element 
represents a key-value pair in the form of an array. */
const toArray = (obj) => Object.entries(obj);
console.log(toArray({ a: 1, b: 2, c: 3 })); //[['a', 1], ['b', 2], ['c', 3]]

/* Create a function that takes a number as an argument, 
increments the number by +1 and returns the result. */
const addition = (a) => ++a;
document.write(addition(10));

/* Length of a Nested Array */
const getLength = (arr) => arr.flat(Infinity).length;

/* Tower of Hanoi - Create a function that takes a number discs as an argument 
and returns the minimum amount of steps needed to complete the game.*/
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
