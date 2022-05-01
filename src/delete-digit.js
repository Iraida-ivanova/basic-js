const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let strOfN = String(n);
  let arr = [];
  for (let i = 0; i < strOfN.length; i++) {
      arr.push(strOfN.replace(strOfN[i], ""));
  }
  return Math.max(...arr.map(str => +str));
}

module.exports = {
  deleteDigit
};
