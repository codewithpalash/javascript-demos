/**
 * Topic:
 * Count the frequency of each element in an array,
 * Using the Map object
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */

// Clear the console
console.clear();

// #1 Create an array of fruits
const fruits = ["apple", "banana", "apple", "orange", "orange", "apple"];

// #2 Create a function to count the frequency of each element in an array
function countFrequency(arr) {
  // #2.1 Create a new Map object
  const map = new Map();

  // #2.2 Loop through the array using forEach
  arr.forEach((element) => {
    // #2.3 Check if the element exists in the map
    if (map.has(element)) {
      // #2.4 If it exists, increment the value by 1
      map.set(element, map.get(element) + 1);
    } else {
      // #2.5 If it doesn't exist, add it to the map with value 1
      map.set(element, 1);
    }
  });

  // #2.6 Return the map
  return map;
}

// #3 Call the function and log the result
// in a table format
console.group("TABLE FORMAT::");

// Use Array.from to convert the map to an array
console.table(Array.from(countFrequency(fruits)));
console.groupEnd();

// Add a new line
console.log("\n\n");

// Loop through the map and log the result
console.group("LOOP FORMAT::");
console.log("Fruit\tFrequency");

// Use forEach to loop through the map
// and log the key and value of each element
countFrequency(fruits).forEach((value, key) => {
  console.log(`${key}\t${value}`);
});
console.groupEnd();