
module.exports = {
  rand: function rand() {
    return Math.random();
  },

  randM: function randM(min, max) {
    return Math.floor(rand() * (max-min) + min);
  }
}
