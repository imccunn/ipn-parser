const pcDiff = require('./pcDiff');
const freqOfPitchFromA = require('./freqOfPitchFromA');

const SPNtoFreq = (spn) => {
  var stepsFrom440 = pcDiff('A4', spn);
  return Math.round(freqOfPitchFromA(stepsFrom440) * 100) / 100;
};

module.exports = SPNtoFreq;
