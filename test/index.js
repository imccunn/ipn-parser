const chai = require('chai');
const expect = chai.expect;

const setIndex = require('../lib/setIndex');

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

  it('should return 2 given input B', () => {
    expect(setIndex('B', set)).to.eql(2);
  });

  it('should return 3 given input C', () => {
    expect(setIndex('C', set)).to.eql(3);
  });

  it('should return 4 given input C# or Db', () => {
    expect(setIndex('C#', set)).to.eql(4);
    expect(setIndex('Db', set)).to.eql(4);
  });

  it('should return 5 given input D', () => {
    expect(setIndex('D', set)).to.eql(5);
  });

  it('should return 6 given input D# or Eb', () => {
    expect(setIndex('D#', set)).to.eql(6);
    expect(setIndex('Eb', set)).to.eql(6);
  });

  it('should return 7 given input E', () => {
    expect(setIndex('E', set)).to.eql(7);
  });

  it('should return 8 given input F', () => {
    expect(setIndex('F', set)).to.eql(8);
  });

  it('should return 9 given input F# Gb', () => {
    expect(setIndex('F#', set)).to.eql(9);
    expect(setIndex('Gb', set)).to.eql(9);
  });

  it('should return 10 given input G', () => {
    expect(setIndex('G', set)).to.eql(10);
  });

  it('should return 11 given input G# or Ab', () => {
    expect(setIndex('G#', set)).to.eql(11);
    expect(setIndex('Ab', set)).to.eql(11);
  });

  it('should return -1 for bad input `Z`', () => {
    expect(setIndex('Z', set)).to.eql(-1);
  });

  it('should return -1 for bad input `123`', () => {
    expect(setIndex(123, set)).to.eql(-1);
  });
});
