/**
 * Simple demos for "How to style console.log() output with CSS - Part 2"
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */

// Create a main logColor function
function logColor(color, args) {
  console.log("%c" + args.join(" "), "color:" + color);
}

// Create a generic log object
const log = {
  green: (...args) => logColor("green", args),
  red: (...args) => logColor("red", args),
  blue: (...args) => logColor("blue", args),
};

// Here we have simple console log which shows output in default style
console.log("Simple console log");

// Same console output, but with orange color using `CSS format specifier` - "%c"
console.log("%cHello World in orange\n\n", "color: orange");

// Call log methods here
// You can use these methods anywhere in your project
// without typing %c and color part everytime
log.green("Hello World in green using green() method");
log.red("Hello World in red using red() method");
log.blue("Hello World in blue using blue() method");
