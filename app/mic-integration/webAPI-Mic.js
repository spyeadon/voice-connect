var constraints = {
  audio: true,
  video: false
};

//function recording(mediaStream = new MediaStream()) {
function recording(mediaStream) {
  var audio = document.getElementById('audioNode');
  audio.srcObject = mediaStream;
  // audio.onloadedmetadata = function(event) {
  //   audio.play();
  //  };

}


function error (err) {
  console.error(err);
}


navigator.mediaDevices.getUserMedia(constraints)
.then(recording)
.catch(error);
