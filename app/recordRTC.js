const RecordRTC = require('recordrtc');

var session = {
  audio: true,
  video: false
};

var recordRTC = null;

function stopCallback(audioURL) {
  //audio.src = audioURL;

  var recordedBlob = recordRTC.getBlob();
  recordRTC.getDataURL(function(dataURL) { });
}


export function recording(mediaStream = new MediaStream()) {
  var audioContext = window.AudioContext;
  var context = new audioContext();
  var audioInput = context.createMediaStreamSource(mediaStream)

  console.log("is it still recorindg?: ", mediaStream.active);

  recordRTC = RecordRTC(mediaStream, {type: 'audio'});
  recordRTC.startRecording();
  recordRTC.stopRecording(stopCallback);
}


navigator.getUserMedia(session, recording, console.error)
