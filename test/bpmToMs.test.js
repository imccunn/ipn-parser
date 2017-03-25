const chai = require('chai');
const expect = chai.expect;

const bpmToMs = require('../lib/bpmToMs').bpmToMs;
const noteLengthToMs = require('../lib/bpmToMs').noteLengthToMs;

describe('bpmToMs spec', () => {
  it('120 BPM should equal 500ms', () => {
    expect(bpmToMs(120)).to.eql(500);
  });

  it('noteLengthToMs 1/4 at 120BPM should be 500', () => {
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
});
