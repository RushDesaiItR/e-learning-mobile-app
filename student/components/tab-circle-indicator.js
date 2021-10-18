import React, { Component } from 'react';
import './comp.scss'

class TabCircleIndicator extends Component {
    state = { currentSelection: 0 }
    constructor(props){
        super(props)
        this.circles=[];
        this.circleCount = this.props.count;
        this.state.currentSelection = this.props.currentSelection
        
    }
    UNSAFE_componentWillReceiveProps(props){
        
        this.setState({currentSelection: props.currentSelection})
    }
    render() { 
        let circlesStyle = {
            height : '6px',
            width : '6px',
            borderRadius : '3px',
            marginLeft: '10px',
            backgroundColor: '#6974C8',
            opacity: 0.47
        }
        let circles =[];
        let active={opacity:1}
        for(let i=0; i < this.circleCount; i++){
            if(this.state.currentSelection === i ){                
                circles.push(<div className="circle" style={ active} key={i}></div>);
            }else{
                circles.push(<div className="circle" key={i}></div>);
            }
            // circles.push(<div style={circlesStyle} key={i}></div>);
        }
        return ( 
            <div style={{height:'20px',width:'100px',display:'flex',marginTop:'10px'}}>
                {
                    circles
                }
            </div>
         );
    }
}

export default TabCircleIndicator;