/**
 * Simple demos to Create an Array Sequence in JavaScript
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */

console.clear();
console.log("\n");

// #1 Using Array from() & keys() methods
console.group("#1 Using Array from() & keys() methods");
const arr1 = Array.from(Array(5).keys());
console.log(arr1);
console.groupEnd();

// #2a Using Array.from() and arrow function
console.group("#2a Using Array.from() and arrow function");
const arr2 = Array.from({ length: 5 }, (v, i) => i);
console.log(arr2);
console.groupEnd();

// #2b You can also start the sequence from 1 instead of 0
console.group("#2b Start the sequence from `1` instead of `0`");
const arr3 = Array.from({ length: 5 }, (v, i) => ++i);
console.log(arr3);
console.groupEnd();

// #3a Using Spread operator
console.group("#3a Using Spread operator");
const arr4 = [...Array(5).keys()];
console.log(arr4);
console.groupEnd();

// #3b You can also start the sequence from 1 instead of 0
console.group("#3b Start the sequence from `1` instead of `0`");
const arr5 = [...Array(5).keys()].map((v) => ++v);
console.log(arr5);
console.groupEnd();
