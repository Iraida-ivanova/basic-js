const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length) {
            let arrOfArr = arr.filter(Array.isArray);
            if (!arrOfArr.length) {
                return 1;
            }
            else {
                let deeps = [];
                arrOfArr.forEach( el => {
                    let depth = 1;
                    depth += this.calculateDepth(el);
                    deeps.push(depth);
                })
                console.log(deeps)
                return Math.max(...deeps);
            }
        } else {
            return 1;
        }
    }
}

module.exports = {
  DepthCalculator
};
