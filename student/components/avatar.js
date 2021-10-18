import React, { Component } from 'react';

import UserIcon from './../assets/icons/person.svg';

class Avatar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chat-avatar">
                <img src={this.props.imgUrl? this.props.imgUrl:UserIcon} style={{height: '40px',width: '40px'}} alt="imagedads" />
            </div>
         );
    }
}

export default Avatar;