const RecordRTC = require('recordrtc');
import axios from 'axios';

const startButton = document.getElementById('btn-start-recording');
const stopButton = document.getElementById('btn-stop-recording');
// const audio = document.getElementById('audioNode');
const submitButton = document.getElementById('submitButton');
const fromAddress = document.getElementById('fromAddress');
const toAddress = document.getElementById('toAddress');
const subjectLine = document.getElementById('subjectLine');
const bodyContent = document.getElementById('bodyContent');

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
    recordRTC.stopRecording(function () {});
};

startButton.onclick = function () {
  navigator.mediaDevices.getUserMedia(session)
  .then(recording)
  .catch(error);
}

submitButton.onclick = function (event) {
    let fromStr = fromAddress.value;
    let toStr = toAddress.value;
    let subLStr = subjectLine.value;
    let bodyStr = bodyContent.value;

    recordRTC.getDataURL(function(dataURL){
      let recordedBlob = recordRTC.getBlob();
      let encodedData = dataURL.split(',')[1];
      let decodedData = window.atob(encodedData);

      // console.log("data URL is: ", dataURL);
      // console.log("recorded blob is: ", recordedBlob);
      // console.log("encoded data is: ", encodedData);
      // console.log("decoded data is: ", decodedData);

      if (toStr && subLStr && bodyStr && fromStr) {
        axios.post('/api/mail', {data: encodedData, fromAddress: fromStr, toAddress: toStr, subjectLine: subLStr, bodyContent: bodyStr })
        .then(res => console.log("response from server is: ", res.data))
        .then( () => {
          fromAddress.value = '';
          toAddress.value = '';
          subjectLine.value = '';
          bodyContent.value = '';
        })
        .catch(err => console.error(err));
      }
      else {
        console.log('try again');
      }
    });

}
