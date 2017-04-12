import React from 'react';
import recordRTCScript from '../mic-integration/recordRTC-Mic.js';

const Record = () => {

  return (
    <div style="width: 25%">

      <audio id="audioNode"> </audio>

        <input
          style="width: 60%"
          value=''
          class='form-control'
          id="fromAddress"
          placeholder="From Email Address"
        />
        <br/><br/>
        <input
          style="width: 60%"
          value=''
          class='form-control'
          id="toAddress"
          placeholder="Recipient Email Address"
        />
        <br/><br/>
        <input
          style="width: 100%"
          value=''
          class='form-control'
          id="subjectLine"
          placeholder="Subject line"
        />
        <br/><br/>
        <textarea
          style="width: 100%"
          value='nothing'
          rows="8"
          type="text"
          class='form-control'
          id="bodyContent"
          placeholder="Email Body"
        ></textarea>
        <br/><br/>
        <button id="btn-start-recording">Start Recording</button>
        <button id="btn-stop-recording">Stop Recording</button>
        <br/><br/><hr/><br/>
        <button
          type="submit"
          id="submitButton"
          class="btn btn-success">
          Submit Message
        </button>
        <br/><br/>

      </div>
  )
}

export default Record;
