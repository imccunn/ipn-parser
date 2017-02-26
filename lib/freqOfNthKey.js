
module.exports = feqOfNthKey;

function feqOfNthKey(n) {
  let p = Math.pow(2, 1/12);
  let pFreq = Math.pow(p, n - 49) * 440;
  return Number(pFreq.toFixed(3));
}
