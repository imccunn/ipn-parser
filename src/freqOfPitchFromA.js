
const freqOfPitchFromA = (stepsFrom440) => {
  var freq = 440 * Math.pow(Math.pow(2, (1/12)), stepsFrom440);
  return +freq.toFixed(3);
};

module.exports = freqOfPitchFromA;
