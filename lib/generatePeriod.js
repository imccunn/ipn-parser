const util = require('./util');

module.exports = (sections, minPhraseLength, maxPhraseLength) => {
  const mod = 4;
  const sections = [];
  for (var i = 0; i < sections; i++) {
    sections.push(util.randInt(minPhraseLength, maxPhraseLength) * mod);
  }
  return sections;
};
