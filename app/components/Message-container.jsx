import React from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx';

class MessageContainer extends React.Component {
  constructor(props){
    super();
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
