import React from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx';

class MessageContainer extends React.Component {
  constructor(props){
    super();
    this.state = {
      fromAddress: '',
      toAddress: '',
      subjectLine: '',
      bodyContent: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (evt) {

  }

  render(){
    return (
      <div>
    <Message />
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MessagePreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MessageContainer);

export default MessagePreContainer;
