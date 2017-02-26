const chai = require('chai');
const expect = chai.expect;

const freqOfNthKey = require('../lib/freqOfNthKey');

describe('freqOfNthKey tests - ', () => {
  it('should return correct frequency given key number - 86:3729.310', () => {
    expect(freqOfNthKey(86)).to.eql(3729.31);
  });

  it('should return correct frequency given key number - 50:466.164', () => {
    expect(freqOfNthKey(50)).to.eql(466.164);
  });
});
