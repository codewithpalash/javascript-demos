/**
 * Simple demo for using `Promise.any()` in JavaScript
 *
 * @author    Palash Mondal
 * @version   1.0.0
 */

/**
 * Simple function which return resolved or rejected promise
 * based on the `resolvePromise` flag value
 *
 * @param {boolean} resolvePromise
 * @param {string | number} message
 * @param {number} delay
 */
const promiseFn = (resolvePromise, message, delay = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolvePromise ? resolve : reject, delay, message);
  });
};

// Create promises
const pErr = promiseFn(false, 0);
const pFast = promiseFn(true, "Fast", 100);
const pSlow = promiseFn(true, "Slow", 500);

// Store all the promise in an array
const promises = [pErr, pFast, pSlow];

// Call `Promise.any()`
Promise.any(promises)
  .then((value) => {
    console.log("Response --> " + value);
    // Output: "Fast", as that is the value of the first promise that fulfills (pFast)
  })
  .catch((error) => {
    console.log("Error --> " + error);
  });

// Call `Promise.race()`
// Un-comment the below code to test Promise.race()
/*Promise.race(promises)
  .then((value) => {
    console.log("Response --> " + value);
  })
  .catch((error) => {
    console.log("Error --> " + error);
    // Output: "0", as that is the value of the first settled promise (pErr)
  });
*/
