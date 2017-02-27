const pcDiff = require('./pcDiff');

module.exports = SPNtoFreq;

function SPNtoFreq(spn) {
  var stepsFrom440 = pcDiff('A4', spn);
  // console.log('stepsFrom440 > ', stepsFrom440);
  return freqOfPitchFromA(stepsFrom440);
}

function freqOfPitchFromA(stepsFrom440) {
  return 440 * Math.pow(Math.pow(2, (1/12)), stepsFrom440);
}
