const setIndex = require('./setIndex');
const PCShift = require('./PCShift');
const CSet = PCShift('C');

const pcDiff = (pc1, pc2) => {

  const pcR = /(([A-G]){1}[#|b]?[0-9]+)/;

  if (pc1.length > 3 || pc1.length === 0 ||
      pc2.length > 3 || pc2.length === 0) {
    throw new TypeError('Bad PC supplied. Three characters expected for a single PC.');
  }
  if (pc1 === pc2) return 0;
  if (!pcR.test(pc1) || !pcR.test(pc2)) throw new TypeError('Invalid pitch class.');

  var pc1 = pc1.split('');
  var pc2 = pc2.split('');

  // assuming only a length of two means no accidental
  pc1 = pc1.length === 2 ? {pc: pc1[0], o: parseInt(pc1[1])} : {pc: pc1[0] + pc1[1], o: parseInt(pc1[2])};
  pc2 = pc2.length === 2 ? {pc: pc2[0], o: parseInt(pc2[1])} : {pc: pc2[0] + pc2[1], o: parseInt(pc2[2])};
  
  const octDiff = pc1.o === pc2.o ? 0 : -(pc1.o - pc2.o);

  // Set indices for C-set
  const pci1 = setIndex(pc1.pc, CSet);
  const pci2 = setIndex(pc2.pc, CSet);

  let ic;

  if (octDiff > 0) ic = (12 - pci1) + pci2 + (12 * (octDiff - 1));

  if (octDiff < 0) ic = -(pci1 + (12 - pci2) - (12 * (octDiff + 1)));
  if (octDiff === 0) ic = -(pci1 - pci2);

  return ic;
};

module.exports = pcDiff;
