const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      if (arguments.length === 0) {
        this.chain.push("()")
      } else {
        this.chain.push(`( ${value} )`);
      }
      return chainMaker;
  },
  removeLink(position) {
    let newChain = this.chain.filter((el, index) => index !== position - 1);
    if (this.chain.length === newChain.length) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
    }
    this.chain = newChain;
    return chainMaker;
  },
  reverseChain() {
      this.chain = this.chain.reverse();
      return chainMaker;
  },
  finishChain() {
      let res = this.chain.join("~~");
      this.chain = [];
      return res;
  }
};

module.exports = {
  chainMaker
};
