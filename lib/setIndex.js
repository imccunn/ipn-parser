
module.exports = setIndex;

function setIndex(pc, set) {
  var cRe = pc.length === 2 ? pc : pc + '(?!#|b)';
  var re = new RegExp(cRe, 'g');
  for (var i = 0; i < set.length; i++) {
    if (re.exec(set[i])) return i;
  }
  return -1;
}
