const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix) {
  let resultArr = []
  for (let i = 0; i < matrix.length; i++) {
      resultArr[i] = [];
      for (let j = 0; j < matrix[i].length; j++) {
          if (i === 0 && j === 0) {
              resultArr[i][j] = [matrix[i][j+1], matrix[i+1][j+1], matrix[i+1][j]].filter(el => el === true).length;
          }
          else if (i === 0 && j === matrix[i].length - 1){
              resultArr[i][j] = [matrix[i+1][j], matrix[i+1][j-1],matrix[i][j-1]].filter(el => el === true).length;
          }
          else if (j === 0 && i === matrix.length - 1){
              resultArr[i][j] = [matrix[i-1][j+1], matrix[i][j+1], matrix[i-1][j]].filter(el => el === true).length;
          }
          else if (j === matrix[i].length - 1 && i === matrix.length -1){
              resultArr[i][j] = [matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j]].filter(el => el === true).length;
          } else {
              if (i === 0) {
                  resultArr[i][j] = [matrix[i][j+1], matrix[i+1][j+1], matrix[i+1][j], matrix[i+1][j-1],matrix[i][j-1]].filter(el => el === true).length;
              }
              else if (j === 0) {
                  resultArr[i][j] = [matrix[i-1][j+1], matrix[i][j+1], matrix[i+1][j+1], matrix[i+1][j], matrix[i-1][j]].filter(el => el === true).length;
              }
              else if ( i === matrix.length - 1) {
                  resultArr[i][j] = [matrix[i-1][j+1], matrix[i][j+1],matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j]].filter(el => el === true).length;
              }
              else if ( j === matrix[i].length - 1) {
                  resultArr[i][j] = [matrix[i+1][j], matrix[i+1][j-1],matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j]].filter(el => el === true).length;
              }
              else resultArr[i][j] = [matrix[i-1][j+1], matrix[i][j+1], matrix[i+1][j+1], matrix[i+1][j], matrix[i+1][j-1],matrix[i][j-1], matrix[i-1][j-1], matrix[i-1][j]].filter(el => el === true).length;

          }
      }
  }
  return resultArr;
}

module.exports = {
  minesweeper
};
