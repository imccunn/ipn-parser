
module.exports = {
  bpmToMs,
  noteLengthToMs,
  measureDurationMs
}

function bpmToMs(bpm) {
  return 60000 / bpm;
}

function noteLengthToMs(noteLength, tempo) {
  var raw = bpmToMs(tempo) * 4 * noteLength;
  return parseFloat(raw.toFixed(2));
}

function measureDurationMs(timeSignature, bpm) {
  var raw = bpmToMs(bpm) * timeSignature[0];
  return parseFloat(raw.toFixed(2));
}
