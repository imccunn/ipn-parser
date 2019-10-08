const freqOfNthKey = require('./freqOfNthKey');

const getKeysToFreq = () => {
  let hash = {};
  for (let i = 1; i <= 88; i++) {
    hash[i] = freqOfNthKey(i);
  }
  return hash;
};

module.exports = getKeysToFreq();
