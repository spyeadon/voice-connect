import React from 'react';

const Record = () => {

  function startClick (event){

  }

  function stopClick (event) {

  }

  return (
    <div>
    <audio> </audio>

    <button onClick={startClick} id="btn-start-recording">Start Recording</button>
    <button onClick={stopClick} id="btn-stop-recording" disabled="">Stop Recording</button>

    </div>
  )
}

export default Record;
