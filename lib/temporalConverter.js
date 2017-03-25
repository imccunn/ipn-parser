
module.exports = {
  bpmToMs,
  noteLengthToMs
}

function bpmToMs(bpm) {
  return 60000/bpm;
}

function noteLengthToMs(noteLength, tempo) {
  var raw = bpmToMs(tempo) * 4 * noteLength;
  return parseFloat(raw.toFixed(2));
}
