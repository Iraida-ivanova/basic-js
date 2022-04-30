const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
   if (!Array.isArray(arr)) { 
     throw new Error("'arr' parameter must be an instance of the Array!");
   }
  return sliceArray(arr);
  function sliceArray(arr) {
      let prevArr = [];
      for (let i = 0; i <arr.length; i++){
          if (arr[i] === '--double-next') {
              prevArr = arr.slice(0, i);
              let nextArr = arr.slice(i+1);
              if (i < arr.length - 1) {
                nextArr.unshift(nextArr[0]);
              }
              return prevArr.concat(sliceArray(nextArr));
          }
          if (arr[i] === '--double-prev') {
              prevArr = arr.slice(0, i);
              if (i > 0) {
                prevArr.push(prevArr[prevArr.length - 1]);
            }
              let nextArr = arr.slice(i+1);
              return prevArr.concat(sliceArray(nextArr));
          }
          if (arr[i] === '--discard-next') {
              prevArr = arr.slice(0, i);
              let nextArr = arr.slice(i+2);
              return prevArr.concat(sliceArray(nextArr));
          }
          if (arr[i] === '--discard-prev') {
            if (i > 0) {
              prevArr = arr.slice(0, i-1);
          }
              let nextArr = arr.slice(i+1);
              return prevArr.concat(sliceArray(nextArr));
          }
          if (i === arr.length - 1) {
              return arr;
          }
      }
      return prevArr;
  }
}


module.exports = {
  transform
};
