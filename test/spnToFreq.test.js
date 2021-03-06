const chai = require('chai');
const PCShift = require('../src/PCShift');
const util = require('../src/util');
const expect = chai.expect;
const assert = chai.assert;

const spnToFreq = require('../src/spnToFreq');

describe('spnToFreq specification - ', () => {
  it('should return approximate freq 1864.66 for A#6', () => {
    console.log(spnToFreq('A#6'))
    assert(util.fuzzyCompare(spnToFreq('A#6'), 1864.66));
  });

  it('should return approximate freq 369.99 for F#4', () => {
    assert(util.fuzzyCompare(spnToFreq('F#4'), 369.99));
  });
});
