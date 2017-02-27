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
const pcDiff = require('./pcDiff');
const SPNtoFreq = require('./spnToFreq');

const BASE_FREQ = constants.A4;
const C4 = constants.C4;

var enharmonics = {
};

var qualities = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dim: [0, 3, 6]
};

function stepFromBaseFreq() {}

console.log(pcDiff('C4', 'D#6'));
console.log(pcDiff('C#4', 'G#4'));
console.log(pcDiff('Bb3', 'F3'));
console.log(pcDiff('B5', 'B5'));
console.log(pcDiff('A2', 'A2'));
console.log(SPNtoFreq('A3'));
console.log(SPNtoFreq('A4'));
console.log(SPNtoFreq('A5'));
