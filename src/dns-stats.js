const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let DNSstats = {};
  if (domains.length) {
    for (let i= 0; i < domains.length; i++) {
      let arr = domains[i].split(".").reverse();
      let newArr = [];
      for (let j = 0; j < arr.length; j++) {
          if (j === 0) {
              newArr.push(`.${arr[j]}`);
          } else {
              newArr.push(`${newArr[j-1]}.${arr[j]}`);
          }
      }
      domains[i] = newArr;
  }
  let DNSes = domains.flat().sort();
  
  DNSstats[DNSes[0]] = 1;
  for (let i = 1; i < DNSes.length; i++) {
      if (DNSes[i-1] === DNSes[i]) {
          DNSstats[DNSes[i-1]]++;
      } else {
          DNSstats[DNSes[i]] = 1;
      }
  }
  }
  
  return DNSstats;
}

module.exports = {
  getDNSStats
};
