import React from 'react';

const Message = (props) => {

  return (
    <div id="message-container">

      <form
        className='form-group'
        onSubmit={props.handleSubmit}
      >
        <input
          value={props.fromAddress}
          onChange={props.fromAddressChange}
          className='form-control'
          id="fromAddress"
          placeholder="From Email Address"
        />
        <input
          value={props.toAddress}
          onChange={props.toAddressChange}
          className='form-control'
          id="toAddress"
          placeholder="Recipient Email Address"
        />
        <input
          value={props.subjectLine}
          onChange={props.subjectLineChange}
          className='form-control'
          id="subjectLine"
          placeholder="Subject line"
        />
        <textarea
          value={props.bodyContent}
          onChange={props.bodyContentChange}
          rows="8"
          type="text"
          className='form-control'
          id="bodyContent"
          placeholder="Email Body"
        />
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
