const RecordRTC = require('recordrtc');

let recordRTC = null;

export const session = {
  audio: true,
  video: false
}

export function error (err) {
  console.error(err);
}

export function recording (mediaStream) {
  recordRTC = RecordRTC(mediaStream, {type: 'audio'});
  recordRTC.startRecording();
}

export function endRecording (component) {
  recordRTC.stopRecording(function () {});
  component.recordRTC = recordRTC;
}
