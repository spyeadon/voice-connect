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
        //recordRTC.getDataURL(function(dataURL) { });
        console.log("recordRTC is: ", recordRTC);

        let recordedBlob = recordRTC.getBlob();
        let formData = new FormData();
        formData.append('edition[audio]', recordedBlob)

        axios.post('/api/mail', {audio: audio.src})
        .then(res => console.log("response from server is: ", res.data))
    });
};

startButton.onclick = function () {
  navigator.mediaDevices.getUserMedia(session)
  .then(recording)
  .catch(error);
}
