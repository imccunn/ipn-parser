const chai = require('chai');
const expect = chai.expect;

const setIndex = require('../setIndex');

describe('setIndex() test', () => {
  let set = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
  console.log(`Assumed set as input ${set}`);
  beforeEach(() => {
    set = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
  });

  it('should return 0 given input A', () => {
    expect(setIndex('A', set)).to.eql(0);
    expect(setIndex('A', set)).to.eql(0);
  });

  it('should return 1 given input A# or Bb', () => {
    expect(setIndex('Bb', set)).to.eql(1);
    expect(setIndex('A#', set)).to.eql(1);
  });

  it('should return 2 given input "B"', () => {
    expect(setIndex('B', set)).to.eql(2);
  });

  it('should return 3 given input C', () => {
    expect(setIndex('C', set)).to.eql(3);
  });

  it('should return 4 given input C# or Db', () => {
    expect(setIndex('C#', set)).to.eql(4);
    expect(setIndex('Db', set)).to.eql(4);
  });

  it('given bad input, should return -1', () => {
    expect(setIndex('Z', set)).to.eql(-1);
  })
})
