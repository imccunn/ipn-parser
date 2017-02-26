
module.exports = {
  rand: function rand() {
    return Math.random();
  },

  randM: function randInt(min, max) {
    return Math.floor(rand() * (max-min) + min);
  }
}
