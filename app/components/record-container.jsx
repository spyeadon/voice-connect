import React from 'react';
import {connect} from 'react-redux';
import Record from './record.jsx';
const RecordRTC = require('recordrtc');
const b64 = require('base64-js');
import {recording, error, session, endRecording} from '../mic-integration/userRecord.jsx';
import {getRecording} from '../action-creators/message.jsx';

class RecordMidContainer extends React.Component {
  constructor(props){
    super();
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
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
    this.props.mapRtcToState(this.recordRTC);
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
    mapRtcToState (recordRTC) {
      dispatch(getRecording(recordRTC))
    }
  }
}

const RecordContainer = connect(
  null,
  mapDispatchToProps
  )(RecordMidContainer);

export default RecordContainer;
