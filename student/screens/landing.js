import React, { Component } from 'react';
import {Text} from "react-native"
const config = require('../config/config')
const HOST = config.host
const API = config.api

// class LandingScreen extends Component {
//     state = { 
//         institutes:[]
//      }

//     async componentDidMount(){
//         let instituteName = this.props.match.params.institute;
//         // alert(instituteName)
//         let user = localStorage.getItem('user')
//         if(user){
//             this.props.history.push('/student')
//         }
//         const params = window.location.search.substr(1).split("&");
//         const fparamData = params[0].split('=');
//         if(fparamData[0] == 'institute'){
//         console.log('should load ',fparamData[1]);
//         const iurl = `${HOST}/${API}/institute/uname/${fparamData[1]}`
//         fetch(iurl).then(res=>res.json())
//             .then((data)=>{
//             console.log(data);
//             if(data){
//                 this.props.history.push('/auth/'+fparamData[1])
//             }
//             }).catch((e)=>console.log(e))
//             .catch((e)=>console.log(e))
//         // return <Redirect to={'/auth/'+fparamData[1]} />
//         }
        


//         this.getAllInstitutes()
//     }

//     getAllInstitutes=()=>{
//         const url = `${HOST}/${API}/institute/`;
//         console.log(url)
//         fetch(url)
//         .then(res=>res.json())
//         .then((data)=>{
//             console.log(data)
//             this.setState({institutes:data})
//         })
//     }
//     onSelect=(e)=>{
//         console.log(e.value)
//         if(e.value !== ''){
//             this.props.history.push('/auth/'+e.value)
//         }
        
//     }

//     render() { 
//         return ( 
//             // <div style={{display: 'flex',flex:'1',flexDirection:'column',height:'100vh',alignItems:'center', justifyContent:'center',backgroundColor:'#fbaf1e'}}>
//             //     <h1>Welcome to Student's portal</h1>
//             //     <div style={{display:'block',marginTop:'100px'}}>
//             //         <div><h3>please select an institute</h3></div>
//             //         <select style={{height:'40px',width:'500px',borderRadius:'10px',backgroundColor:'white'}} onChange={(e)=>{this.onSelect(e.target)}}>
//             //             <option value="">Please select your institute</option>
//             //             {this.state.institutes.map((institute,index)=>(
//             //                 <option value={institute.unique_name}>{institute.name}</option>
//             //             ))}
//             //         </select>
//             //     </div>
//             // </div>
//             <Text>
//                 Ok
//             </Text>
//          );
//     }
// }
 
// export default LandingScreen;