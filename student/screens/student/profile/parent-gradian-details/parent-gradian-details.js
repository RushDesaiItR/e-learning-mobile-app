// import React, { Component } from "react";
// import "./parent-gradian-details.scss";

// import Grid from "@material-ui/core/Grid";

// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
// import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import CloseIcon from "@material-ui/icons/Close";

// // import AuthServices from "../../../../services/auth.services";

// class ParentGradianDetails extends Component {
//   state = {
//     popUp: false,
//   };

//   toggleEditPopUp = (value) => {
//     if (value === true) {
//       this.setState({ popUp: true });
//     } else {
//       this.setState({ popUp: false });
//     }
//   };

//   render() {
//     return (
//       <>
//         <div className="parentGradianDetails">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={12} lg={6}>
//               <div className="box">
//                 <div className="header">
//                   <SupervisorAccountIcon className="header-icon" />
//                   <div className="header-title">Gardian 1 </div>
//                 </div>
//                 <div className="body">
//                   <Grid container spacing={1}>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Relation with Pupil :</div>
//                         <div className="value">Father</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Occupation :</div>
//                         <div className="value">Scientist</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Full Name :</div>
//                         <div className="value">Azim Shaikh</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Qualification :</div>
//                         <div className="value">Doctor</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Adhar Card :</div>
//                         <div className="value">1848 8998 89565</div>
//                       </div>
//                     </Grid>
//                   </Grid>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12} lg={6}>
//               <div className="box">
//                 <div className="header">
//                   <SupervisorAccountIcon className="header-icon" />
//                   <div className="header-title">Gardian 2 </div>
//                 </div>
//                 <div className="body">
//                   <Grid container spacing={1}>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Relation with Pupil :</div>
//                         <div className="value">Mother</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Occupation :</div>
//                         <div className="value">Scientist</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Full Name :</div>
//                         <div className="value">Salma Azim Shaikh</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Qualification :</div>
//                         <div className="value">Doctor</div>
//                       </div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <div className="content">
//                         <FiberManualRecordIcon className="circle-Icon" />
//                         <div className="key">Adhar Card :</div>
//                         <div className="value">1848 8998 89565</div>
//                       </div>
//                     </Grid>
//                   </Grid>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12} lg={6}>
//               <div className="box">
//                 <div className="header">
//                   <PermContactCalendarIcon className="header-icon" />
//                   <div className="header-title">Contact Info</div>
//                 </div>
//                 <div className="body">
//                   <div className="details blue">
//                     <p>Your registered mobile no is</p>
//                     <a href="tel:+91 952715015">+91 952715015</a>
//                   </div>
//                   <div className="details green">
//                     <p>Your email address is </p>
//                     <a href="mailto:parent@gmaail.com">parent@gmaail.com</a>
//                   </div>
//                   <div className="para">
//                     Please note, that contact information have created by admin department. You may want to make any changes you
//                     need to
//                     <a href="#"> request changes</a> or <a href="#">contact coordinator.</a>
//                   </div>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12} lg={6}>
//               <div className="box">
//                 <div className="header">
//                   <PhoneInTalkIcon className="header-icon" />
//                   <div className="header-title">Emergency Contact Number</div>
//                 </div>
//                 <div className="body">
//                   <div className="details blue">
//                     <p>Your emergency contact number</p>
//                     <a href="tel:+91 952715015">+91 952715015</a>
//                   </div>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12} lg={12}>
//               <div className="addNew-gardian">
//                 <AccountCircleIcon className="person-icon" />
//                 <button onClick={() => this.toggleEditPopUp(true)}>Add New Gardian</button>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//         {this.state.popUp ? (
//           <div className="popup-overlay">
//             <div className="popup">
//               <div className="popup-header">
//                 <h3>Add New Guardian</h3>
//                 <CloseIcon className="close-icon" onClick={() => this.toggleEditPopUp(false)} />
//               </div>
//               <div className="popup-body">
//                 <div className="title">Relation</div>
//                 <input type="text" className="input" placeholder="Father" />
//                 <div className="title">Full Name</div>
//                 <input type="text" className="input" placeholder="Enter full name" />
//                 <div className="title">Occupation</div>
//                 <input type="text" className="input" placeholder="Business" />
//                 <Grid container spacing={4}>
//                   <Grid item xs={12} md={6} lg={6}>
//                     <div className="title">Birthdate</div>
//                     <input type="text" className="input" placeholder="25/02/2020" />
//                   </Grid>
//                   <Grid item xs={12} md={6} lg={6}>
//                     <div className="title">Gender</div>
//                     <input type="text" className="input" placeholder="Male" />
//                   </Grid>
//                 </Grid>
//                 <div className="title">Email</div>
//                 <input type="text" className="input" placeholder="Example@gmail.com" />
//                 <div className="title">Contact No</div>
//                 <input type="text" className="input" placeholder="1234567890" />
//               </div>
//               <div className="popup-footer">
//                 <div className="button-grp">
//                   <button className="cancel-btn" onClick={() => this.toggleEditPopUp(false)}>
//                     Cancel
//                   </button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </>
//     );
//   }
// }

// export default ParentGradianDetails;
