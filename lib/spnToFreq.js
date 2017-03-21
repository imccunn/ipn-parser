const pcDiff = require('./pcDiff');
const freqOfPitchFromA = require('./freqOfPitchFromA');

module.exports = SPNtoFreq;

function SPNtoFreq(spn) {
  var stepsFrom440 = pcDiff('A4', spn);
  return freqOfPitchFromA(stepsFrom440);
}
