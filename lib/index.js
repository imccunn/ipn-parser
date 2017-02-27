#!/usr/bin/env node

const util = require('./util');
const rand = util.rand;
const randInt = util.randInt;
const setIndex = require('./setIndex');
const constants = require('./constants');
const intervals = constants.intervalMap;
const PC = constants.PC;
const PCShift = require('./PCShift');
const CSet = PCShift('C');

const BASE_FREQ = constants.A4;
const C4 = constants.C4;

var enharmonics = {
};

var qualities = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dim: [0, 3, 6]
};

function freqOfPitchFromA(stepsFrom440) {
  return BASE_FREQ * Math.pow(Math.pow(2, (1/12)), stepsFrom440);
}

function stepFromBaseFreq() {}

// SPN (Scientific Pitch Notation)
function SPNtoFreq(spn) {
  var stepsFrom440 = pcDiff('A4', spn);
  return freqOfPitchFromA(stepsFrom440);
}

function pcDiff(pc1, pc2) {

  if (pc1.length > 3 || pc1.length === 0 ||
      pc2.length > 3 || pc2.length === 0) {
    return 'bad input';
  }

  var pc1 = pc1.split('');
  var pc2 = pc2.split('');

  pc1 = pc1.length === 2 ? {pc: pc1[0], o: parseInt(pc1[1])} : {pc: pc1[0] + pc1[1], o: parseInt(pc1[2])};
  pc2 = pc2.length === 2 ? {pc: pc2[0], o: parseInt(pc2[1])} : {pc: pc2[0] + pc2[1], o: parseInt(pc2[2])};

  var octDiff = pc1.o - pc2.o;
  pc1.cIndex = setIndex(pc1.pc, CSet);
  pc2.cIndex = setIndex(pc2.pc, CSet);
  var ic = pc1.cIndex - pc2.cIndex;

  return octDiff === 0 ? ic : (octDiff * 11) + ic;
}

console.log(pcDiff('C4', 'D#6'));
console.log(pcDiff('C#4', 'G#4'));
console.log(pcDiff('Bb3', 'F3'));
console.log(pcDiff('B5', 'B5'));
console.log(pcDiff('A2', 'A2'));
console.log(SPNtoFreq('A3'));
console.log(SPNtoFreq('A4'));
console.log(SPNtoFreq('A5'));