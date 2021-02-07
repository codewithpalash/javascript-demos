/**
 * Simple demo for using String `replaceAll()` Method in JavaScript
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */
const str = "We will, We will rock you";

// Original String
console.group("Original String");
console.log(str);
console.groupEnd();

// Using replace() method
console.group("Using replace() method");
const str1 = str.replace("We", "JS");
console.log(str1);
console.groupEnd();

// Using replace() method with regex
console.group("Using replace() method with Regex");
const str2 = str.replace(/We/g, "JS");
console.log(str2);
console.groupEnd();

// Using replaceAll() method
console.group("Using replaceAll() method");
const str3 = str.replaceAll("We", "JS");
console.log(str3);
console.groupEnd();
