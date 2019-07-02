const constants = require('./constants');
const PC = constants.PC;

/**
 * Returns a PC array whose first element is the passed PC.
 *
 * i.e.
 * Given: C => ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
 * Given: F# => ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F']
 * Given: Gb => ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F']
 */
const PCShift = (rootPitch) => {
  let re;
  if (rootPitch.length === 1) re = new RegExp(rootPitch + '(?!#|b)', 'g');
  else re = new RegExp(rootPitch, 'g');
  let newPCSet = PC.slice();
  for (let i = 0; i < PC.length; i++) {
    let check = re.exec(PC[i]);
    if (check) {
      return newPCSet;
    }
    newPCSet.push(newPCSet.shift());
  }
  return newPCSet;
};

module.exports = PCShift;
