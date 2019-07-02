const util = require('./util');

module.exports = (sections, minPhraseLength, maxPhraseLength) => {
  let mod = 4;
  let sections = [];
  for (var i = 0; i < sections; i++) {
    sections.push(util.randInt(minPhraseLength, maxPhraseLength) * mod);
  }
  return sections;
};
