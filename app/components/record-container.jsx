import React from 'react';
import {connect} from 'react-redux';
import Record from './record.jsx';
const Tone = require('Tone');
import {recording, error, session, endRecording, b64toToneBuffer} from '../audioUtils/userRecord.jsx';
import {getRecording, submitMsgWithAudio} from '../action-creators/message.jsx';

class RecordMidContainer extends React.Component {
  constructor(props){
    super();
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.audioTypeConverter = this.audioTypeConverter.bind(this);
  }

  startRecording (event) {
    event.preventDefault();
    navigator.mediaDevices.getUserMedia(session)
    .then(recording)
    .catch(error);
  }

  stopRecording (event) {
    event.preventDefault();
    endRecording(this);
    this.recordRTC.getDataURL(this.audioTypeConverter);
  }

  audioTypeConverter (dataURL) {
    this.encodedStr =  dataURL.split(',')[1];
    this.toneBuff = b64toToneBuffer(this.encodedStr);
    console.log('tone buffer is: ', this.toneBuff);
    this.props.mapAudToState(this.toneBuff);
  }

  render() {
    return (
      <Record
        startRecording={this.startRecording}
        stopRecording={this.stopRecording}
      />
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    mapAudToState (recordRTC) {
      dispatch(getRecording(recordRTC))
    },
    sendEmailWithAudio(message){
      dispatch(submitMsgWithAudio(message));
    }
  }
}

const RecordContainer = connect(
  null,
  mapDispatchToProps
  )(RecordMidContainer);

export default RecordContainer;
