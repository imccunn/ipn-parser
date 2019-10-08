
module.exports = {

  rand: () => {
    return Math.random();
  },

  randInt: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  },

	fuzzyCompare: (a, b) => {
    var a = parseFloat(a.toFixed(2));
    return a === b;
  }
};
