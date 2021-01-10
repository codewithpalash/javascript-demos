/**
 * Simple demos for "How to style console.log() output with CSS"
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */

// Here we have simple console log which shows output in default style
console.log("Hello World");

// Same console output, but with green color using `CSS format specifier` - "%c"
console.log("%cHello World", "color: green");

// Same console output, but with green color & bold font weight
console.log("%cHello World", "color: green; font-weight: bold;");

// Using multiple `CSS format specifier`
// Here output will have two different colors
console.log(
  "%cHello %cWorld",
  "color: green; font-weight: bold;",
  "color: blue; font-weight: bold;"
);

// Here is another example using multiple CSS style rules
console.log(
  "%cShare on Instagram",

  // Here I am using a Template literals (` `), so that I can use multi-line strings
  `color: #fff;
  background-color: #e145a5;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;`
);

// Here is another example using multiple CSS style rules
console.log(
  "%cShare on Twitter",
  `color: #fff;
  background-color: #1da1f2;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;`
);

// I hope these demos will help you and you can also play around with it
console.log(
  "%cThank You!",
  `color: #f9a222;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 1px 1px 5px #f9a222;`
);
