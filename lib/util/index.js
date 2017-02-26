
module.exports = {
  rand:  () => {
    return Math.random();
  },

  randInt: (min, max) => {
    return Math.floor(rand() * (max-min) + min);
  }
}
