const util = require('./util');

module.exports = function(minPhraseLength, maxPhraseLength) {
  let numSections = 6;
  let mod = 4;
  let sections = [];
  for (var i = 0; i < 6; i++) {
    sections.push(util.randInt(minPhraseLength, maxPhraseLength) * mod);
  }
  return sections;
}
