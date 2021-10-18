// import React, { Component } from 'react';
// import * as AuthServices from '../../../services/auth.services'

// const dumyClass = {
//                     subject:{name:'English'},
//                     classroom:{
//                         standard: 7,
//                         section: 'A'
//                     }
//                 }

// class DisconnectScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//         this.classData = this.props.classData.subject?this.props.classData: dumyClass;
//         console.log(this.classData,dumyClass)
//     }
//     componentDidMount(){
//         console.log('disconnected screen',this.props.classData)
//     }
//     rejoin=()=>{
//         console.log('rejoining....')
//         AuthServices.getClasses().then((data)=>{
//             console.log(data)
//             if(data.length && this.props.classData.subject){
//                 this.props.navigate(11)
//             }
            
//         })
//         .catch((e)=>{
//             console.warn(e);
//             alert('you are not connected')
//         })
        
//     }
//     render() { 
//         return ( 
//             <div className="center" style={{flex:'1',alignItems:'flex-start'}}>
//                 <div className="center" style={{flexDirection:'column'}}>
//                     <div style={{fontSize:'30px',fontWeight:600, color:'#00132e',padding:'10px'}}>
//                          You are disconnected
//                     </div>
//                     <div style={{fontSize:'20px',fontWeight:400, color:'#00132e',padding:'10px'}}>
//                         {this.classData.subject.name+' '+this.classData.classroom.standard+'th '+this.classData.classroom.section}
//                     </div>
//                     <div className="daxta-button" style={{backgroundColor:'#0ea785'}} onClick={this.rejoin}>REJOIN</div>
//                     <div>
//                         <img src={require('./../../../assets/img/disconnect.png')} style={{height:'250px',width:'250px'}} alt="disconnect" />
//                     </div>
                   
//                 </div>
                
//             </div> 
//         );
//     }
// }
 
// export default DisconnectScreen;