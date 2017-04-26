import React from 'react';
import {connect} from 'react-redux';
import Record from './Record.jsx';
const Pizzicato = require('pizzicato');

class RecordMidContainer extends React.Component {
  constructor(props){
    super()
    this.startRecording = this.startRecording.bind(this);
  }

  startRecording(event) {
    console.log('Pizzicato instance is: ', Pizzicato);
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
