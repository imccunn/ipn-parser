const setIndex = require('./setIndex');
const PCShift = require('./PCShift');
const CSet = PCShift('C');

module.exports = pcDiff;

function pcDiff(pc1, pc2) {
  if (pc1.length > 3 || pc1.length === 0 ||
      pc2.length > 3 || pc2.length === 0) {
    return 'bad input';
  }
  if (pc1 === pc2) return 0;

  var pc1 = pc1.split('');
  var pc2 = pc2.split('');

  pc1 = pc1.length === 2 ? {pc: pc1[0], o: parseInt(pc1[1])} : {pc: pc1[0] + pc1[1], o: parseInt(pc1[2])};
  pc2 = pc2.length === 2 ? {pc: pc2[0], o: parseInt(pc2[1])} : {pc: pc2[0] + pc2[1], o: parseInt(pc2[2])};
  console.log(pc1, pc2);

  var octDiff = -(pc1.o - pc2.o);
  console.log(octDiff);
  var pci1 = pc1.cIndex = setIndex(pc1.pc, CSet);
  var pci2 = pc2.cIndex = setIndex(pc2.pc, CSet);
  console.log(pc1.cIndex, pc2.cIndex);
  var ic = pc1.cIndex + pc2.cIndex;
  if (octDiff > 0) ic = (12 - pci1) + pci2 + (12 * (octDiff - 1));
  // console.log(pci1, (12 - pci2), (12 * (octDiff + 1)))
  if (octDiff < 0) ic = -(pci1 + (12 - pci2) - (12 * (octDiff + 1)));

  console.log(ic);


  return ic;
}
