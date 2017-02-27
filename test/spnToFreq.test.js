const PCShift = require('../lib/PCShift');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const spnToFreq = require('../lib/spnToFreq');

describe('spnToFreq specification - ', () => {
  it('should return approximate freq 1864.66 for A#6', () => {
    assert(fuzzyCompare(spnToFreq('A#6'), 1864.66));
  });

  it('should return approximate freq 369.99 for F#4', () => {
    assert(fuzzyCompare(spnToFreq('F#4'), 369.99));
  });
});

function fuzzyCompare(a, b) {
  var a = parseFloat(a.toFixed(2));
  return a === b;
}
