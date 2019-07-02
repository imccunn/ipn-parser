const freqOfNthKey = require('./freqOfNthKey');

function hash() {
  let hash = {};
  for (var i = 1; i <= 88; i++) {
    hash[i] = freqOfNthKey(i);
  }
  return hash
}

module.exports = hash();
