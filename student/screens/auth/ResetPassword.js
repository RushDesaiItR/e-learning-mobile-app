// import React, { Component } from 'react';
// import DaxtaButton from '../../components/DaxtaButton/DaxtaButton';
// import LoadingModal from '../../components/LoadingModal/LoadingModal';
// import AuthServices from '../../services/auth.services'

// class ResetPassword extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             email: '',
//             password: '',
//             confirmPassword: '',
//             institute:'',
//             jwt: '',
//             uniqueName: '',
//             loading: false
//          }
//     }
//     componentDidMount(){
//         // let user = localStorage.getItem('user')
//         // if(user){
//         //     let teacher = localStorage.getItem('teacher')
//         //     let admin = localStorage.getItem('admin')
//         //     if(admin){
//         //         this.props.history.push('/admin')
//         //     }else if(teacher){
//         //         this.props.history.push('/teacher')
//         //     }            
//         // }
        

//         let instituteName = this.props.match.params.institute;
//         let email = this.props.match.params.email
//         let jwt= this.props.match.params.token
//         console.log(this.props,instituteName,jwt,email)
//         if(email){this.setState({ email, jwt });}
//         this.processInstituteName(instituteName)
//     }
//         processInstituteName = (iname)=>{
//             AuthServices.getInstituteDetails(iname)
//             .then((data)=>{
//                 console.log(data)
//                 if(data.success){
//                     this.setState({institute: data.instituteInfo.name,uniqueName: data.instituteInfo.unique_name,instituteId:data.instituteInfo.id})
//                 }
//             })

//         }

//     navigateTo=(portal)=>{
//         // this.setState({userLoggedIn: true})
//         this.props.history.push('/'+portal)
//         // BrowserRouter.pu
        
//      }

//     validate(){
//         if(this.state.password.length < 6){
//             alert('password should be more than 6 characters')
//             return false
//         }
//         if(this.state.password !== this.state.confirmPassword){
//             alert('password do not match')
//             return false
//         }
//         return true
//     }

//      resetPassword=()=>{        
//         console.log('mounting')
//         if(!this.validate()){
//             return
//         }
//         this.setState({ loading: true });
//         console.log(this.props)
//          let payload={
//              email: this.state.email,
//              password: this.state.password,
//              institute_id: this.state.instituteId
//          }
//          AuthServices.resetPassword(payload, this.state.jwt)
//          .then(data=>{
//              console.log(data)
//              this.setState({ loading: false });
//              if(data.success){  
//                  if(this.state.uniqueName !== ''){
//                     this.navigateTo('auth/'+this.state.uniqueName+'/success/reset_password')
//                  }else{
//                     this.navigateTo('')
//                  }               
                
                 
                 
//              }
             
//          }).catch(e=>{
//              this.setState({ loading: false });
//          })
        

        
        
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
//                     <div>
//                         <form name="login_form" >
//                             <div className="auth-input-name">New Password</div>
//                             <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} ref={el => this.emailInput = el} className="auth-text-input" placeholder="New Password" />
//                             <div style={{display:'flex',justifyContent:'space-between',marginTop:'27px'}}>
//                                 <div className="auth-input-name">Re-Enter Password</div>
//                             </div>
//                             <input type="password"  name="password" onChange={(e)=>{this.setState({confirmPassword:e.target.value})}} ref={el => this.passwordInput = el} className="auth-text-input" placeholder="Confirm Password" />
//                             <div className="center" style={{marginTop:'30px'}}>
//                                 <DaxtaButton content={'Reset Password'} onClick={()=>this.resetPassword()} />                                
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
 
// export default ResetPassword;