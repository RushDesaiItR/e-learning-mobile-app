// import React, { Component } from 'react';
// import AuthServices from './../../services/auth.services'
// import { Redirect, useHistory ,useParams,Route } from 'react-router-dom';


// // import AuthArt from '../../assets/img/auth-art.svg'
// // import InstituteLogo from '../../assets/img/default-institue-logo.png'
// // import Login from './Login';
// // import ResetPassword from './ResetPassword';
// // import Done from './Done';
// // import SendResetEmail from './SendResetEmail';
// import {Text} from "react-native"
// // const HOST = 'http://localhost:8000'
// // const API = 'api/v1'




// class Auth extends Component {
//     state = { 
//         email: '',
//         password: '',
//         userLoggedIn:false,
//         institute: '',
//         instituteLogo: '',
//         instituteId: ''
//      }
     
//      componentDidMount(){
//         //  history = useHistory()
//         let user = localStorage.getItem('user')
//         if(user){
//             let student = localStorage.getItem('student')
            
//             if(student){
//                 this.props.history.push('/student')
//             }
                      
//         }
        
//         let instituteName = this.props.match.params.institute;
//         this.processInstituteName(instituteName)
        
//      }
     
//      processInstituteName = (iname)=>{
//         AuthServices.getInstituteDetails(iname)
//         .then((data)=>{
//             console.log(data)
//             if(data.success){
//                 this.setState({
//                     institute: data.instituteInfo.name,
//                     instituteId:data.instituteInfo.id,
//                     instituteLogo: data.instituteInfo.logo_url,
//                 })
//             }
//         })

//      }

//      navigateTo=(portal)=>{
//         // this.setState({userLoggedIn: true})
//         this.props.history.push('/'+portal)
//         // BrowserRouter.pu
        
//      }
//      login=()=>{
//         //  const {institute} = useParams();
//         console.log('mounting')
//         console.log(this.props)
        
        
         
//          let payload={
//              email: this.state.email,
//              password: this.state.password,
//              institute_id: this.state.instituteId
//          }
//          AuthServices.InstituteLogin(payload)
//          .then(data=>{
//              console.log(data)
//              if(data.success){
//                  if(data.admin){
//                      this.navigateTo('admin')
//                  }else{
//                      this.navigateTo('teacher')
//                  }
                 
//              }
             
//          })

        

        
        
//     }
//     goBack=()=>{
//         this.props.history.goBack()   
//     }
//     render() { 

//         // if(this.state.userLoggedIn === true){
//         //     return <Redirect to="/admin" />
//         // }

//         return ( 
//             // <div className="auth-bg">
//             //     <div className="login-card">
//             //         <div className="auth-top-design">
//             //             <img src={AuthArt} className="auth-art" alt=""/>
//             //         </div>
                    
//             //             <div className="auth-institute-logo">
//             //                 <img
//             //                     src={this.state.instituteLogo ? this.state.instituteLogo : InstituteLogo}
//             //                     style={{height:'61px'}}
//             //                     alt="logo"
//             //                 />
//             //             </div>
//             //             <div className="back" onClick={()=>this.navigateTo('')}>
//             //                 <img src={require('../../assets/icons/left-arrow.svg')} alt="" />
//             //                 Back
//             //             </div>
//             //             <Route path={"/auth/:institute/login/"} component={Login} />
//             //             <Route path={'/auth/:institute/success/:type'} component={Done} />
//             //             <Route path={'/auth/:institute/reset_password/email/:email/token/:token'} component={ResetPassword} />
//             //             <Route path={'/auth/:institute/send_reset_email/'} component={SendResetEmail} />
//                         {/* <div>
//                             <div>
//                                 <div className="auth-institute-name">                                
//                                     {this.state.institute !== ''?this.s tate.institute:''}
//                                 </div>
//                             </div>
//                             <div className="login-fields">                            
//                                 <div>
//                                     <form name="login_form" >
//                                         <div className="auth-input-name">Email</div>
//                                         <input type="text" name="email" onChange={(e)=>{this.setState({email:e.target.value})}} ref={el => this.emailInput = el} className="auth-text-input" placeholder="Enter email" />
//                                         <div style={{display:'flex',justifyContent:'space-between',marginTop:'27px'}}>
//                                             <div className="auth-input-name">Password</div>
//                                             <div className="forgot-password-link">Forgot password</div>

//                                         </div>
//                                         <input type="password"  name="password" onChange={(e)=>{this.setState({password:e.target.value})}} ref={el => this.passwordInput = el} className="auth-text-input" placeholder="Enter Password" />
//                                         <div className="center" style={{marginTop:'30px'}}>
//                                             <div className="daxta-button" onClick={()=>this.login()} >
//                                             <img style={{height:'9px',marginRight:'12px'}} src={require('../../assets/img/users.png')} alt="a"/>
//                                                 Login                            
//                                             </div>
//                                         </div>
//                                     </form>                                
//                                 </div>
//                                 <div className="center" style={{width:'100%',marginTop:'23px'}}>
//                                     <div  className="light-text" style={{width:'202px'}}>
//                                         2020 Daxta. All rights reserved.<br/>
//                                         I agree to Daxta's Terms of services
//                                     </div>
//                                 </div>
//                             </div>

//                         </div> */}
                    
                    
//             //     </div>
//             // </div>
//             <Text>ok</Text>
//          );
//     }
// }
 
// export default Auth;
