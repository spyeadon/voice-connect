import React from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx';
import {submitMessage, submitMsgWithAudio} from '../action-creators/message.jsx';
import {toneBufferToB64} from '../audioUtils/userRecord.jsx';

class MessageContainer extends React.Component {
  constructor(props){
    super();
    this.state = {
      fromAddress: '',
      toAddress: '',
      subjectLine: '',
      bodyContent: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fromAddressChange = this.fromAddressChange.bind(this);
    this.toAddressChange = this.toAddressChange.bind(this);
    this.bodyContentChange = this.bodyContentChange.bind(this);
    this.subjectLineChange = this.subjectLineChange.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const toneBuff = this.props.toneBuff;
    const fromAddress = this.state.fromAddress;
    const toAddress = this.state.toAddress;
    const subjectLine = this.state.subjectLine;
    const bodyContent = this.state.bodyContent;
    this.message = {fromAddress, toAddress, subjectLine, bodyContent}
    if (toneBuff) {
      console.log('should be tone buffer: ', toneBuff);
      this.message.data = toneBufferToB64(toneBuff);
      this.props.sendEmailWithAudio(this.message);
    }
    else {
      this.props.sendEmailNoAudio(this.message);
    }
    this.setState({
      fromAddress: '',
      toAddress: '',
      subjectLine: '',
      bodyContent: ''
    })
  }

  fromAddressChange(evt) {
    this.setState({
      fromAddress: evt.target.value
    })
  }

  toAddressChange(evt) {
    this.setState({
      toAddress: evt.target.value
    })
  }

  subjectLineChange(evt) {
    this.setState({
      subjectLine: evt.target.value
    })
  }

  bodyContentChange(evt) {
    this.setState({
      bodyContent: evt.target.value
    })
  }

  render(){
    return (
    <Message
    fromAddress={this.state.fromAddress}
    toAddress={this.state.toAddress}
    subjectLine ={this.state.subjectLine}
    bodyContent={this.state.bodyContent}
    handleSubmit={this.handleSubmit}
    fromAddressChange={this.fromAddressChange}
    toAddressChange={this.toAddressChange}
    subjectLineChange={this.subjectLineChange}
    bodyContentChange={this.bodyContentChange}
    />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toneBuff: state.message.recordRTC
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendEmailWithAudio(message){
      dispatch(submitMsgWithAudio(message));
    },
    sendEmailNoAudio(message) {
      dispatch(submitMessage(message));
    }
  }
}

const MessagePreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MessageContainer);

export default MessagePreContainer;
