const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
          if (arr[i] === arr[i+1]) {
              let count = 2;
              if (i > 0) {
                  if(typeof arr[i-1] === "number") {
                      count = 1 + +arr[i-1];
                      arr[i-1] = "";
                  }
              }
              arr[i] = count;
          }
      }

  }
  return arr.join("");
}

module.exports = {
  encodeLine
};
