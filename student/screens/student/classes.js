// import React, { Component } from 'react';
// import '../../components/comp.scss'
// import * as AuthServices from '../../services/auth.services'

// class Classes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             classes: []
//          }
//     }
//     componentWillMount(){
//         AuthServices.getClassesByClassroom(this.props.student.classroom_id)
//         .then((data)=>{
//             if(data.length){
//                 console.log('Classes',data)
//                 this.setState({classes: data})
//             }
            
//         })
//     }

//     formatTime=(dateString)=>{
//         let dateObj = new Date(dateString)
        
//         let hours = dateObj.getHours()
//         let mins = dateObj.getMinutes()
//         let ampm = 'am'
//         if(hours > 12){
//             hours = hours -12;
//             ampm = 'pm'
//         }
//         return hours+':'+mins+' '+ampm
//     }
//     render() { 
//         return ( 
//             <div>
//                 {this.state.classes.map((cls,i)=>(
//                     <div key={i} className="class-block class-block-active" style={{backgroundColor:'#3cb18e'}} onClick={()=>this.props.goToClass(cls)}>
//                         <div style={{fontSize:'14px',fontWeight:'500'}}>{cls.classroom_subjects.subjects.name}</div>
//                         <div style={{fontSize:'13px'}}>{cls.classroom.standard+'th '+cls.classroom.section}</div>
//                         <div style={{fontSize:'12px'}}>{this.formatTime(cls.start_time)+' to '+this.formatTime(cls.end_time)}</div>
//                     </div>
//                 ))}
//             </div> 
//         );
//     }
// }
 
// export default Classes;