#!/usr/bin/env node

const constants = require('./constants');
const intervals = constants.intervalMap;
const pcDiff = require('./pcDiff');
const pcShift = require('./PCShift');
const spnToFreq = require('./spnToFreq');
const util = require('./util');
const freqOfNthKey = require('./freqOfNthKey');
const ipnSetToFreqs = require('./ipnSetToFreqs');

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
  for (var i = 0; i < tess; i++) {
    let setIndex = i % 12;
    if (set[setIndex] === 'C' && i !== 0) startOctave++;
    resTess.push(set[setIndex] + startOctave);
  }
  return resTess;
}



var set = genSetFromTess('C4', 20);
console.log(set);
console.log(ipnSetToFreqs(set));
