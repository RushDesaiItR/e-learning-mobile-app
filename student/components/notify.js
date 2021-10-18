import React, { Component } from 'react';
import './comp.scss'

const success ={
    backgroundColor: '#c3f486',
    color: '#117711',
    border: 'solid 1px #117711'
}
const error ={
    backgroundColor: '#ff8888',
    color: '#551111',
    border: 'solid 1px #551111'
}

class NotifyUser extends Component {
    constructor(props) {
        super(props);
        this.type = props.type
        this.text = props.text
        this.state = { 
            type: props.type,
            text: props.text
         }
    }
    render() { 
        return ( 
            <div className="notify" style={this.type === 'success'?success:error}>
                {this.props.type + ": " + this.props.text}
            </div>
         );
    }
}
 
export default NotifyUser;