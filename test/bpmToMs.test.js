const chai = require('chai');
const expect = chai.expect;

const bpmToMs = require('../src/temporalConverter').bpmToMs;
const noteLengthToMs = require('../src/temporalConverter').noteLengthToMs;
const measureDurationMs = require('../src/temporalConverter').measureDurationMs;

describe('bpmToMs spec', () => {
  it('120 BPM should equal 500ms', () => {
    expect(bpmToMs(120)).to.eql(500);
  });

  it('noteLengthToMs 1/4 at 120BPM should be 500ms', () => {
    expect(noteLengthToMs(1/4, 120)).to.eql(500);
  });

  it('noteLengthToMs 1/2 at 120BPM should be 1000ms', () => {
    expect(noteLengthToMs(1/2, 120)).to.eql(1000);
  });

  it('noteLengthToMs 1 at 120BPM should be 2000ms', () => {
    expect(noteLengthToMs(1, 120)).to.eql(2000);
  });

  it('noteLengthToMs 1/8 at 120BPM should be 250ms', () => {
    expect(noteLengthToMs(1/8, 120)).to.eql(250);
  });

  it('noteLengthToMs 1/16 at 120BPM should be 125ms', () => {
    expect(noteLengthToMs(1/16, 120)).to.eql(125);
  });

  it('noteLengthToMs 1/32 at 120BPM should be 62.5ms', () => {
    expect(noteLengthToMs(1/32, 120)).to.eql(62.5);
  });

  it('noteLengthToMs 1/4 at 110BPM should be 545.45ms', () => {
    expect(noteLengthToMs(1/4, 110)).to.eql(545.45);
  });

  describe('measureDurationMs spec', () => {
    it('shoud give a measure duration of 2000ms when given [1, 4] time sig and 120bpm', () => {
      expect(measureDurationMs([4, 4], 120)).to.eql(2000);
    });

    it('shoud give a measure duration of 500ms when given [1, 2] time sig and 120bpm', () => {
      expect(measureDurationMs([1, 2], 120)).to.eql(500);
    });

    it('shoud give a measure duration of 1500ms when given [3, 4] time sig and 120bpm', () => {
      expect(measureDurationMs([3, 4], 120)).to.eql(1500);
    });

    it('shoud give a measure duration of 2727.27ms when given [6, 8] time sig and 132bpm', () => {
      expect(measureDurationMs([6, 8], 132)).to.eql(2727.27);
    });
  });
});
