const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
      let indexMin = i;
      for (let j = i+1; j <arr.length; j++) {
          if (arr[j] !== -1 && arr[indexMin] > arr[j]) {
              indexMin = j;
          }
      }
      let min = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = min;
  }
  return arr;
}

module.exports = {
  sortByHeight
};
