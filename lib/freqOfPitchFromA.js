
module.exports = freqOfPitchFromA;

function freqOfPitchFromA(stepsFrom440) {
  return 440 * Math.pow(Math.pow(2, (1/12)), stepsFrom440);
}
