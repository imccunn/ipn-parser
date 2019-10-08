const spnToFreq = require('./spnToFreq');

const ipnSetToFreqs = (set) => {
  return set.map((ipn) => {
    if (ipn.length > 3) ipn = ipn.split('').splice(3, ipn.length - 1).join('');
    return spnToFreq(ipn);
  });
};

module.exports = ipnSetToFreqs;
