const PCShift = require('../lib/PCShift');
const chai = require('chai');
const expect = chai.expect;

describe('PCShift specifications - ', () => {
  it('should return an PC set whose first element is the given pitch class C', () => {
    let expectedResult = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    expect(PCShift('C')).to.eql(expectedResult);
  });

  it('should return an PC set whose first element is the given enharmonic pitch class Gb/F#', () => {
    let expectedResult = ['F#/Gb','G','G#/Ab','A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F'];
    expect(PCShift('Gb')).to.eql(expectedResult);
    expect(PCShift('F#')).to.eql(expectedResult);
  });

  it('should return an PC set whose first element is the given enharmonic pitch class A#/Bb', () => {
    let expectedResult = ['A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A'];
    expect(PCShift('A#')).to.eql(expectedResult);
    expect(PCShift('Bb')).to.eql(expectedResult);
  });

  it('should return an PC set whose first element is the given enharmonic pitch class D#/Eb', () => {
    let expectedResult = ['D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B','C','C#/Db','D'];
    expect(PCShift('D#')).to.eql(expectedResult);
    expect(PCShift('Eb')).to.eql(expectedResult);
  });
});
