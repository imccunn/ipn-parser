const pcDiff = require('../lib/pcDiff');
const chai = require('chai');
const expect = chai.expect;

describe('pcDiff specification - ', () => {
  it('should return a difference of 5 with input C4 and F4', () => {
    expect(pcDiff('C4', 'F4')).to.eql(5);
  });

  it('should return a difference of 5 with input C4 and F3', () => {
    expect(pcDiff('C4', 'F3')).to.eql(-7);
  });

  it('should return a difference of 0 with input C5 and C5', () => {
    expect(pcDiff('C5', 'C5')).to.eql(0);
  });

  it('should return a difference of 11 with input A3 and G#4', () => {
    expect(pcDiff('A3', 'G#4')).to.eql(11);
  });

  it('should return a difference of 14 with input B3 and C#5', () => {
    expect(pcDiff('B3', 'C#5')).to.eql(14);
  });

  it('should return a difference of 19 with input B3 and F#5', () => {
    expect(pcDiff('B3', 'F#5')).to.eql(19);
  });

  it('should return a difference of -19 with input F#5 and B3', () => {
    expect(pcDiff('F#5', 'B3')).to.eql(-19);
  });

});
