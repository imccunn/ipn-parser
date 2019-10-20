const util = require('./util');

module.exports = (numSections, minPhraseLength, maxPhraseLength) => {
  const mod = 4;
  const sections = [];
  for (let i = 0; i < numSections; i++) {
    sections.push(util.randInt(minPhraseLength, maxPhraseLength) * mod);
  }
  return sections;
};
