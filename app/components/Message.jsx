import React from 'react';

const Message = (props) => {

  return (
    <div id="message-container">

      {/*<audio id="audioNode" />*/}
      <form>
        <input
          value=''
          className='form-control'
          id="fromAddress"
          placeholder="From Email Address"
        />
        <input
          value=''
          className='form-control'
          id="toAddress"
          placeholder="Recipient Email Address"
        />
        <input
          value=''
          className='form-control'
          id="subjectLine"
          placeholder="Subject line"
        />
        <textarea
          value=''
          rows="8"
          type="text"
          className='form-control'
          id="bodyContent"
          placeholder="Email Body"
        />
        <button id="btn-start-recording">Start Recording</button>
        <button id="btn-stop-recording">Stop Recording</button>
        <button
          type="submit"
          id="submitButton"
          className="btn btn-success">
          Submit Message
        </button>
      </form>

      </div>
  )
}

export default Message;
