// import React, { Component } from 'react';
// import AuthServices from '../../services/auth.services'

// class Done extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             type:''
//          }
//     }
//     componentDidMount(){
//         let user = localStorage.getItem('user')
//         if(user){
//             let teacher = localStorage.getItem('teacher')
//             let admin = localStorage.getItem('admin')
//             if(admin){
//                 this.props.history.push('/admin')
//             }else if(teacher){
//                 this.props.history.push('/teacher')
//             }            
//         }
//         let instituteName = this.props.match.params.institute;
//         let type = this.props.match.params.type;
//         console.log(type)
//         this.setState({type})
//         this.processInstituteName(instituteName)
//         if(this.state.type === 'reset_password'){
//             setTimeout(()=>{this.navigateTo('auth/'+instituteName+'/login')},2000)
//         }
//     }
//         processInstituteName = (iname)=>{
//             AuthServices.getInstituteDetails(iname)
//             .then((data)=>{
//                 console.log(data)
//                 if(data.success){
//                     this.setState({institute: data.instituteInfo.name,instituteId:data.instituteInfo.id})
//                 }
//             })

//         }

//     navigateTo=(portal)=>{
//         // this.setState({userLoggedIn: true})
//         this.props.history.push('/'+portal)
//         // BrowserRouter.pu
        
//      }
//      goToLogin=()=>{        
//         let instituteString = localStorage.getItem('institute')
//         if(instituteString){
//             let institute = JSON.parse(instituteString)
//             this.props.history.push('/auth/'+institute.unique_name+'/login')
//         }else{
//             this.props.history.push('/')
//         }  
//     }
//     render() { 
//         const title = this.state.type === 'reset_password'?'Your password has changed Successfully':'Email Link Send'
//         return ( 
            
//             <div>
//                 <div className="center">
//                     <div className="auth-institute-name">                                
//                         {this.state.institute !== ''?this.state.institute:''}
//                     </div>
//                 </div>
//                 <div className="login-fields">                            
//                     <div className="center" style={{flexDirection:'column'}}>
//                         <div style={{fontSize:'14px',fontWeight:'bold'}}>{title}</div>
//                         <div className="light-text" style={{fontSize:'12px',fontWeight:'600',marginTop:'3px'}}>Return to institute login screen</div>
//                         <img style={{height:'77px',marginTop:'22px'}} src={require('../../assets/icons/tick.svg')} alt="a"/>
//                         <div className="daxta-button" style={{marginTop:'37px'}} onClick={()=>this.goToLogin()} >
//                         {/* <img style={{height:'9px',marginRight:'12px'}} src={require('../../assets/img/users.png')} alt="a"/> */}
//                             Go To Login Page                           
//                         </div>                               
//                     </div>
//                     <div className="center" style={{width:'100%',marginTop:'23px'}}>
//                         <div  className="light-text copy-right-text" style={{width:'202px'}}>
//                         &copy;2020 Daxta. All rights reserved.<br/>
                           
//                         </div>
//                     </div>
//                 </div>

//             </div>
//          );
//     }
// }
 
// export default Done;