

var PC = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];

var intervalMap = {
  m2: 1,
  M2: 2,
  m3: 3,
  M3: 4,
  P4: 5,
  TT: 6,
  P5: 7,
  m6: 8,
  M6: 9,
  m7: 10,
  M7: 11
};

module.exports = {
  intervalMap: intervalMap,
  PC: PC,
  frequencies: {
    A4: 440,
    C4: 261.626
  },
  toneRowIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0]
};
