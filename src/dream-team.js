const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  let result = [];
  array.forEach(el => {
    if (typeof el === 'string') {
      result.push(el.trim().slice(0, 1).toUpperCase());
    }
  });
  return result.sort().join("");
}

module.exports = {
  createDreamTeam
};
