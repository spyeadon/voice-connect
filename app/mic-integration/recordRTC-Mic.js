const RecordRTC = require('recordrtc');
import axios from 'axios';

const startButton = document.getElementById('btn-start-recording');
const stopButton = document.getElementById('btn-stop-recording');
const audio = document.getElementById('audioNode');

let recordRTC = null;

let session = {
  audio: true,
  video: false
};

function error (err) {
  console.error(err);
}

function recording (mediaStream) {
  recordRTC = RecordRTC(mediaStream, {type: 'audio'});
  recordRTC.startRecording();
}

stopButton.onclick = function () {
    recordRTC.stopRecording(function (audioWebMURL) {
        audio.src = audioWebMURL;
        console.log("recordRTC is: ", recordRTC);

        recordRTC.getDataURL(function(dataURL){
          let recordedBlob = recordRTC.getBlob();
          let encodedData = dataURL.split(',')[1];
          let decodedData = window.atob(encodedData);
          console.log("recorded blob is: ", recordedBlob);
          console.log("encoded data is: ", encodedData);
          // console.log("decoded data is: ", decodedData);

          axios.post('/api/mail', encodedData)
          // axios.post('/api/mail', decodedData)
          // axios.post('/api/mail', recordedBlob, {headers: {'Content-Type': 'application/octet-stream'}})
          .then(res => console.log("response from server is: ", res.data))
          .catch(err => console.error(err));
        });
    });
};

startButton.onclick = function () {
  navigator.mediaDevices.getUserMedia(session)
  .then(recording)
  .catch(error);
}
