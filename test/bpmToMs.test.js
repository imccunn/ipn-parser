const chai = require('chai');
const expect = chai.expect;

const bpmToMs = require('../lib/bpmToMs');

describe('bpmToMs spec', () => {
  it('120 BPM should equal 500ms', () => {
    expect(bpmToMs(120)).to.eql(500);
  });
});

