import React, { Component } from 'react';

export default class Call extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Let's run some lines!</h1>

        <video id="localVideo" autoPlay playsInline></video>
        <video id="remoteVideo" autoPlay playsInline></video>

        <div>
          <button id="startButton">Start</button>
          <button id="callButton">Call</button>
          <button id="hangupButton">Hang Up</button>
        </div>
      </div>
    )
  }
}

