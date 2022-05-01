const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options = {}) {
  let resultString = "";
  if (typeof str !== "string") {
      str = String(str);
  }
  if (!options.hasOwnProperty("repeatTimes")) {
      options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty("separator")) {
      options.separator = "+";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
      options.additionSeparator = "|";
  }
  if (!options.hasOwnProperty("addition")) {
      while (options.repeatTimes > 1) {
          resultString += str + options.separator;
          options.repeatTimes--;
      }
      resultString += str;
  } else if (!options.hasOwnProperty("additionRepeatTimes")) {
      while (options.repeatTimes > 1) {
          resultString += str + options.addition + options.separator;
          options.repeatTimes--;
      }
      resultString += str + options.addition;
  } else {
      let additionString = "";
      while (options.additionRepeatTimes > 1) {
          additionString += options.addition + options.additionSeparator;
          options.additionRepeatTimes--;
      }
      additionString += options.addition;
      while (options.repeatTimes > 1) {
          resultString += str + additionString + options.separator;
          options.repeatTimes--;
      }
      resultString += str + additionString;
  }
  return resultString;
}

module.exports = {
  repeater
};
