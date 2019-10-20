#!/usr/bin/env node

const pcShift = require('./PCShift');
const util = require('./util');
const freqOfNthKey = require('./freqOfNthKey');
const ipnSetToFreqs = require('./ipnSetToFreqs');

const generatePeriod = require('./generatePeriod');
const bpmToMs = require('./temporalConverter').bpmToMs;
const scales = {
  maj: [0, 2, 4, 5, 7, 9, 11]
}
var qualities = {
  maj: [0, 4, 15],
  min: [0, 3, 7],
  dim: [0, 3, 6]
};

function genScale(basePitch, quality) {
  let pcSet = pcShift(basePitch);
  let scale = [];
  for (let i = 0; i < quality.length; i++) {
    scale.push(pcSet[quality[i]])
  }
  return scale;
}

function rGenPitchesTessitura(tess, startKey, n) {
  var rPitches = [];
  for (var i = 0; i < n; i++) {
    let rNum = util.randInt(startKey, startKey + tess);
    rPitches.push(freqOfNthKey(rNum));
  }
  return rPitches;
}

var p = rGenPitchesTessitura(20, 30, 5);

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
  var tessitura = quality[0] + quality[quality.length-1];
  var ipnSet = genSetFromTess(rootIpn, tessitura);
  let pitches = [];
  for (var i = 0; i < quality.length; i++) {
    pitches.push(ipnSet[quality[i]]);
  }
  return ipnSetToFreqs(pitches);
}

// function rGenSparseQuality(quality) {
//   return quality.map((v, i) => {
//     return v
//   });
// }

// var set = genSetFromTess('C4', 20);
// console.log('genSetFromTess: ', set);
// console.log(ipnSetToFreqs(set));

// console.log('Freq chord: ');
// var q1 = qualities.maj;
// var rootIpn = 'C4';
// console.log('Quality: ', q1);
// console.log('Root IPN: ', rootIpn);
// console.log(genFreqChordFromIpnSet(q1, rootIpn));

// // Phrase/Period Generation
// let period = generatePeriod(7, 1, 4);
// let sBPM = 120;
// let ms = bpmToMs(120);

// console.log('BPM: ', sBPM);
// console.log('Period: ', period);
// let numBeats = period.reduce((p,c) => p + c, 0);
// let numSeconds = ms * numBeats / 1000;
// console.log('Num Beats: ', numBeats);
// console.log('Length in mins: ',  numBeats / sBPM);
// console.log('length in seconds: ', numSeconds);


const scalePitches = genScale('C#', scales.maj);
console.log('scale pitches: ', scalePitches);
