const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type = true) {
      this.type = type;
  }
  encrypt(message, key) {
      if (arguments.length < 2 || !arguments[0] || !arguments[1]) {
          throw new Error("Incorrect arguments!")
      }
      let indexesOfMessage = this.stringToArrayOfIndexes(message);
      let indexesOfKey = this.stringToArrayOfIndexes(key);
      let length = indexesOfMessage.filter(el => typeof el !== "string").length;
      if (key.length < length) {
          indexesOfKey = this.lengthenKey(indexesOfKey, indexesOfMessage);
      }
      let res = [];
      for (let k = 0; k < indexesOfMessage.length; k++) {
          if (typeof indexesOfMessage[k] === "string") {
              res.push(indexesOfMessage[k]);
              indexesOfKey.unshift(0);
          } else {
              for (let i = 0; i < n; i++) {
                  for (let j = 0; j < n; j++) {
                      if (i === indexesOfMessage[k] && j === indexesOfKey[k] ) {
                          res.push(vigenereSquare[i][j]);
                      }
                  }
              }
          }
      }
      let encryptedMessage = this.getStringOfIndexes(res);
      return encryptedMessage;

  }
  decrypt(encryptedMessage, key) {
      if (arguments.length < 2 || !arguments[0] || !arguments[1]) {
          throw new Error("Incorrect arguments!")
      }
      let indexesOfEncryptedMessage = this.stringToArrayOfIndexes(encryptedMessage);
      let indexesOfKey = this.stringToArrayOfIndexes(key);
      let length = indexesOfEncryptedMessage.filter(el => typeof el !== "string").length;
      if (key.length < length) {
          indexesOfKey = this.lengthenKey(indexesOfKey, indexesOfEncryptedMessage);
      }
      let res = [];
      for (let k = 0; k < indexesOfEncryptedMessage.length; k++) {
          if (typeof indexesOfEncryptedMessage[k] === "string") {
              res.push(indexesOfEncryptedMessage[k]);
              indexesOfKey.unshift(0);
          } else {
              for (let i = 0; i < n; i++) {
                  for (let j = 0; j < n; j++) {
                      if (i === indexesOfKey[k] && vigenereSquare[i][j] === indexesOfEncryptedMessage[k]) {
                          res.push(j);
                      }
                  }
              }
          }
      }
      let decryptedMessage = this.getStringOfIndexes(res);
      return decryptedMessage;
  }

  lengthenKey (key, length) {
      let count =Math.ceil(length / key.length);
      let diff = length % key.length;
      let lengthenKey = [];
      while (count !== 0) {
          lengthenKey.push(key);
          count --;
      }
      return  lengthenKey.flat().slice(0, length);
  }

  getStringOfIndexes (arr) {
      let string = "";
      if (this.type) {
          string = arr.map(el => {
              if (typeof el === "number") {
                  return LETTERS[el];
              } return el
          } ).join("");
      } else {
          string = arr.map(el => {
              if (typeof el === "number") {
                  return LETTERS[el];
              } return el
          } ).reverse().join("");
      }
      return string;
  }

  stringToArrayOfIndexes(str) {
      return str.toUpperCase().split("").map(letter => {
          if (LETTERS.includes(letter)) {
              return LETTERS.indexOf(letter);
          } else return letter;
      })
  }

}
const vigenereSquare = [];
let n = 26;
for (let i = 0; i < n; i++) {
  vigenereSquare[i] = [];
  for (let j = 0; j < n; j++) {
      if (j <= n - i - 1) {
          vigenereSquare[i][j] = i + j;
      } else {
          vigenereSquare[i][j] = i + j - n;
      }
  }
}
const LETTERS = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
module.exports = {
  VigenereCipheringMachine
};
