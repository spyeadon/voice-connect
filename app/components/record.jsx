import React from 'react';

const Record = (props) => {

  return (
    <div id="record-container">
      <button id="btn-start-recording">Start Recording</button>
      <button id="btn-stop-recording">Stop Recording</button>

      <span>Available Tones</span>
        <ul>
          <li>example</li>
          <li>example</li>
          <li>example</li>
          <li>example</li>
          <li>example</li>
        </ul>

      <span>Tones added</span>
        <ul>
          <li>example</li>
          <li>example</li>
        </ul>
    </div>
  )
}

export default Record;
