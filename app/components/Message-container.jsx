import React from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx';
import {submitMessage} from '../action-creators/message.jsx';

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
    this.subjectLineChange = this.subjectLineChange.bind(this);
    this.bodyContentChange = this.bodyContentChange.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const fromAddress = this.state.fromAddress;
    const toAddress = this.state.toAddress;
    const subjectLine = this.state.subjectLine;
    const bodyContent = this.state.bodyContent;
    let message = {fromAddress, toAddress, subjectLine, bodyContent}
    this.props.sendEmail(message);
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


const mapDispatchToProps = (dispatch) => {
  return {
    sendEmail(message){
      dispatch(submitMessage(message));
    }
  }
}

const MessagePreContainer = connect(
  null,
  mapDispatchToProps
  )(MessageContainer);

export default MessagePreContainer;
