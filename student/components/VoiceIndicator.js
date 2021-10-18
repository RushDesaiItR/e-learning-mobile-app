import React, { Component } from 'react';

class VoiceIndicator extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
      this.height1 = 0;
      this.height2 = 0;
      this.currentAudio1 = 0;
      this.currentAudio2 = 0;
    }
    componentDidUpdate() {
        this.visualize();
    }
    visualize=()=>{
        const data = this.props.audioData;
        // console.log(data[100],data[500],data[750])
        this.height1 = Math.abs((data[500] - 127)/127*20);
        this.height2 = Math.abs((data[800] - 127)/127*20);
        this.currentAudio1 = data[200];
        this.currentAudio2 = data[500];
        
        // console.log(this.height1,this.height2)

    }
    render() { 
        const height1 = 5 + this.height1/2;
        const height2 = 5 + this.height2;
      return ( 
        <div className="voice-indicator">
          <div style={{height:height1+'px',backgroundColor:'#fff',width:'5px',borderRadius:'3px'}}></div>
          <div style={{height:height2+'px',backgroundColor:'#fff',width:'5px',borderRadius:'3px'}}></div>
        </div>
       );
    }
  }
  export default VoiceIndicator