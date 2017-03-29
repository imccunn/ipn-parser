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
module.exports = function PCShift(rootPitch) {
  var re;
  if (rootPitch.length === 1) re = new RegExp(rootPitch + '(?!#|b)', 'g');
  else re = new RegExp(rootPitch, 'g');
  var newPCSet = PC.slice();
  for (var i = 0; i < PC.length; i++) {
    var check = re.exec(PC[i]);
    if (check) {
      return newPCSet;
    }
    newPCSet.push(newPCSet.shift());
  }
  return newPCSet;
};
