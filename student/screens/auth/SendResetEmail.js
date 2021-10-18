// import React, { Component } from 'react';
// import DaxtaButton from '../../components/DaxtaButton/DaxtaButton';
// import LoadingModal from '../../components/LoadingModal/LoadingModal';
// import AuthServices from '../../services/auth.services'

// class SendResetEmail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             institute: '',
//             instituteId: null,
//             loading: false,
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
//         this.processInstituteName(instituteName)
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

//      sendResetEmail=async ()=>{
//         //  const {institute} = useParams();
//         console.log('mounting')
//         console.log(this.props)
        
//         this.setState({ loading: true });
         
//          let payload={
//              email: this.state.email,
//              institute_id: this.state.instituteId             
//          }

//          const result = await AuthServices.sendResetEmailLink(payload)
//          this.setState({ loading: false });
//         if(result){
//             this.navigateTo(`auth/${this.state.uname}/success/email_sent`)
//         } 
//     }
//     render() { 
//         return ( 
            
//             <div>
//                 <LoadingModal stopLoading={this.state.loading} />
//                 <div className="center">
//                     <div className="auth-institute-name">                                
//                         {this.state.institute !== ''?this.state.institute:''}
//                     </div>
//                 </div>
//                 <div className="login-fields">                            
//                     <div className="center" style={{flexDirection:'column'}}>
//                         <div style={{fontSize:'14px',fontWeight:'bold'}}>Enter your registered address</div>
//                         <div className="light-text" style={{fontSize:'12px',fontWeight:'600',marginTop:'3px'}}>We will send you the reset password link</div>
                        
//                         <form name="login_form" style={{marginTop:'30px'}}>
//                             <div className="auth-input-name" style={{fontWeight:'800',fontSize:'12px'}}>Registered Email</div>
//                             <input type="text" name="email" onChange={(e)=>{this.setState({email:e.target.value})}} ref={el => this.emailInput = el} className="auth-text-input" placeholder="Enter Email" />
//                             {/* <div style={{display:'flex',justifyContent:'space-between',marginTop:'27px'}}>
//                                 <div className="auth-input-name">Password</div>
//                                 <div className="forgot-password-link"><Link to="/auth/reset_password/" >Forgot password</Link></div>

//                             </div>
//                             <input type="password"  name="password" onChange={(e)=>{this.setState({password:e.target.value})}} ref={el => this.passwordInput = el} className="auth-text-input" placeholder="Enter Password" /> */}
//                             <div className="center" style={{marginTop:'30px'}}>
//                                 <DaxtaButton content={'Send reset Link'} onClick={()=>this.sendResetEmail()} />                               
//                             </div>
//                         </form>                                             
//                     </div>
//                     <div className="center" style={{width:'100%',marginTop:'23px'}}>
//                         <div  className="light-text" style={{width:'202px'}}>
//                         &copy;2020 Daxta. All rights reserved.<br/>
                           
//                         </div>
//                     </div>
//                 </div>

//             </div>
//          );
//     }
// }
 
// export default SendResetEmail;