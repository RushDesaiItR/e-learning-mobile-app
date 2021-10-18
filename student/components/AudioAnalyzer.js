import React, { Component } from 'react';
import VoiceIndicator from './VoiceIndicator';
import { MicOff } from '@material-ui/icons';

class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        audioData: new Uint8Array(0),
        mute: false 
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    
    this.audioContext = new (window.AudioContext ||  window.webkitAudioContext)();
    console.log('audio ',this.audioContext,this.props.audio)
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    const stream = this.props.audio;
    let audioTrack = stream.getAudioTracks()[0];
    if(!audioTrack.enabled){this.setState({mute:true})}
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }
  

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    // this.analyser.disconnect();
    // this.source.disconnect();
  }

  render() {
      
    return(
        <div className="center" style={{marginLeft:'10px',marginRight:'5px'}}>
            {!this.props.mute?<VoiceIndicator audioData={this.state.audioData} mute={this.state.mute}/>:
            <MicOff style={{fontSize:'16px',color:'#fff'}}/>}
        </div>
    )
  }
}

export default AudioAnalyser;