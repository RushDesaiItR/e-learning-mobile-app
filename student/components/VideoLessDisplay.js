import React, { Component } from 'react';

class VideoLessDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    render() { 
        let thumbnail
        let style={display:'flex',height:'150px',width:'150px'}
        let cstyle={display:'flex'}
        if(this.props.type === 'student'){
            style={height:'50px',width:'50px',fontSize:'26px'};
            cstyle={height:'calc(100% - 29px)'}
        }
        if(this.props.user){
            thumbnail = this.props.user.thumbnail_url?<img src={this.props.user.thumbnail_url} style={style} />:
                                <div>{this.props.user.name[0]}</div>
        }else{
            thumbnail = <div>T</div>
        }
        return ( 
            <div className="center voice-circle-container" style={cstyle}>
                <div className="voice-circle" style={style}>
                    {thumbnail}
                </div>
            </div>
         );
    }
}
 
export default VideoLessDisplay;