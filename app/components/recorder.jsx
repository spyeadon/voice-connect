import React from 'react';
import recordRTCScript from '../mic-integration/recordRTC-Mic.js';

const Record = () => {

  return (
    <div>
    <audio id="audioNode"> </audio>

    <button id="btn-start-recording">Start Recording</button>
    <button id="btn-stop-recording">Stop Recording</button>

    </div>
  )
}

export default Record;
