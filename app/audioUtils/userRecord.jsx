const RecordRTC = require('recordrtc');
const b64 = require('base64-js');
const Tone = require('Tone');

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

export function b64toToneBuffer (b64string) {
  const byteArr = b64.toByteArray(b64string);
  const float32 = new Float32Array(byteArr);
  const toneBuff = new Tone.Buffer().fromArray(float32);
  return toneBuff;
}

export function toneBufferToB64 (toneBuffer) {
  const float32 = toneBuffer.toArray();
  const byteArr = new Uint8Array(float32);
  const b64String = b64.fromByteArray(byteArr);
  return b64String;
}
