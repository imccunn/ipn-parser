const constants = require('./constants');
const PC = constants.PC;

/**
 * Returns a PC array whose first element is the passed PC.
 */
module.exports = function PCShift(rootPitch) {
  var re;
  if (rootPitch.length === 1) re = new RegExp(rootPitch + "(?!#|b)", "g");
  else re = new RegExp(rootPitch, "g");
  var newPCSet = PC.slice();
  for (var i = 0; i < PC.length; i++) {
    var check = re.exec(PC[i]);
    if (check) {
      return newPCSet;
    }
    newPCSet.push(newPCSet.shift());
  }
  return newPCSet;
}
