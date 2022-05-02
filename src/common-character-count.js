const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
      let elIndex = arr2.indexOf(arr1[i]);
      if(elIndex !== -1) {
          res.push(arr1[i]);
          arr2[elIndex] = "";
      }
  }
  return res.length;
}

module.exports = {
  getCommonCharacterCount
};
