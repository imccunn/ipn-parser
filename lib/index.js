#!/usr/bin/env node

const constants = require('./constants');
const intervals = constants.intervalMap;
const pcDiff = require('./pcDiff');
const pcShift = require('./PCShift');
const spnToFreq = require('./spnToFreq');
const util = require('./util');
const freqOfNthKey = require('./freqOfNthKey');
const ipnSetToFreqs = require('./ipnSetToFreqs');
const keyFreqHash = require('./keyFreqHash');
const BASE_FREQ = constants.A4;
const C4 = constants.C4;

var qualities = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dim: [0, 3, 6]
};

function rGenPitchesTessitura(tess, startKey, n) {
  var rPitches = [];
  for (var i = 0; i < n; i++) {
    let rNum = util.randInt(startKey, startKey + tess);
    rPitches.push(freqOfNthKey(rNum));
  }
  return rPitches;
}

var p = rGenPitchesTessitura(20, 30, 5);
console.log(p);

function genSetFromTess(startIpn, tess) {
  var startOctave = startIpn[startIpn.length-1];
  var pc = startIpn.split('').splice(0, startIpn.length - 1);
  var set = pcShift(pc);
  var resTess = [];
  for (var i = 0; i <= tess; i++) {
    let setIndex = i % 12;
    if (set[setIndex] === 'C' && i !== 0) startOctave++;
    resTess.push(set[setIndex] + startOctave);
  }
  return resTess;
}

function genFreqChordFromIpnSet(quality, rootIpn) {
  console.log(quality, rootIpn);
  var tessitura = quality[0] + quality[quality.length-1];
  var ipnSet = genSetFromTess(rootIpn, tessitura);
  let pitches = [];
  for (var i = 0; i < quality.length; i++) {
    console.log(quality[i]);
    pitches.push(ipnSet[quality[i]]);
  }
  return ipnSetToFreqs(pitches);
}

// function rGenSparseQuality(quality) {
//   return quality.map((v, i) => {
//     return v
//   });
// }

var set = genSetFromTess('C4', 20);
console.log(set);
console.log(ipnSetToFreqs(set));

console.log('Freq chord: ');
var q1 = qualities.maj;
var rootIpn = 'C4';
console.log('Quality: ', q1);
console.log('Root IPN: ', rootIpn);
console.log(genFreqChordFromIpnSet(q1, rootIpn));
console.log('hashFreqKey: ', keyFreqHash);
