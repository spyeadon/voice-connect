import React from 'react';
import {connect} from 'react-redux';
import Record from './Record.jsx';
const Tone = require('Tone');

class RecordMidContainer extends React.Component {
  constructor(props){
    super();
    this.startRecording = this.startRecording.bind(this);
  }

  startRecording(event) {
    event.preventDefault();

    const mic = new Tone.UserMedia();
    mic.open().then( function() {
      console.log("mic Tone instance is: ", mic)
      // mic.start();
    })
  }

  render() {
    return (
      <Record
        startRecording={this.startRecording}
      />
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

const RecordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(RecordMidContainer);

export default RecordContainer;
