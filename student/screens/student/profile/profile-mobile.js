// import React, { Component } from "react";
// import "./profile-mobile.scss";

// import Grid from "@material-ui/core/Grid";

// import FemaleProfile from "../../../assets/img/female-profile.png";
// import MaleProfile from "../../../assets/img/male-profile.png";

// import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// import EditIcon from "@material-ui/icons/Edit";
// import TimerIcon from "@material-ui/icons/Timer";
// import SchoolIcon from "@material-ui/icons/School";
// import CloseIcon from "@material-ui/icons/Close";

// import AuthServices from "../../../services/auth.services";

// import moment from "moment";

// class AdminProfileMobile extends Component {
//   state = {
//     tab: 0,
//     activityLog: [],
//     selectedProfileImageFile: null,
//     imagePreview: null,
//     addressPopUp: false,
//     guardianPopUp: false,
//   };

//   // constructor(props) {
//   //   super(props);
//   // }

//   changeTab = (tabId) => {
//     if (this.state.tab === tabId) {
//       this.setState({ tab: 0 });
//     } else {
//       this.setState({ tab: tabId });
//     }
//   };

//   componentWillMount() {
//     const user = localStorage.getItem("user");
//     this.user = JSON.parse(user);
//     const student = localStorage.getItem("student");
//     this.student = JSON.parse(student);
//     this.updateAnnouncementList();
//   }
//   updateAnnouncementList() {
//     this.getAllActivityLogByStudentId();
//   }

//   getAllActivityLogByStudentId(type) {
//     AuthServices.getAllActivityLogByStudentId(this.user.id).then((data) => {
//       const activityLog = data;
//       this.setState({ activityLog });
//     });
//   }

//   updateData = () => {
//     AuthServices.getUserInfoByUserId(this.user.id).then((data) => {
//       let userString = JSON.stringify(data);
//       localStorage.setItem("user", userString);
//       this.user = data;
//       this.forceUpdate();
//     });
//   };

//   chooseFile = (e) => {
//     let fileObject = e.target.files[0];
//     this.setState({ selectedProfileImageFile: fileObject });

//     let reader = new FileReader();
//     reader.onload = (event) => {
//       this.setState({ imagePreview: event.target.result });
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   profileImageUpload = () => {
//     let formData = new FormData();
//     formData.append("user_id", this.user.id);
//     formData.append("file", this.state.selectedProfileImageFile);
//     AuthServices.uploadProfileImageByStudentId(formData).then((data) => {
//       this.updateData();
//       this.setState({ selectedProfileImageFile: null });
//       this.setState({ imagePreview: null });
//     });
//   };

//   toggleEditPopUp = (selectPopup, value) => {
//     if (selectPopup === 0) {
//       if (value === true) {
//         this.setState({ addressPopUp: true });
//       } else {
//         this.setState({ addressPopUp: false });
//       }
//     } else {
//       if (value === true) {
//         this.setState({ guardianPopUp: true });
//       } else {
//         this.setState({ guardianPopUp: false });
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="adminProfileMobile">
//         <div className="header-section">
//           <div className="your-photo">Your Photo</div>
//           <div className="profile-img">
//             {this.state.selectedProfileImageFile ? (
//               <img src={this.state.imagePreview} alt="" />
//             ) : this.user.profile_pic_url ? (
//               this.user.gender === "male" ? (
//                 <img src={MaleProfile} alt="" />
//               ) : (
//                 <img src={FemaleProfile} alt="" />
//               )
//             ) : (
//               <img src={this.user.profile_pic_url} alt="" />
//             )}
//             <PhotoCameraIcon className="photo-icon" onClick={(e) => this.upload.click()} />
//             <input
//               id="myInput"
//               type="file"
//               accept="image/gif, image/jpeg, image/png"
//               onChange={this.chooseFile}
//               ref={(ref) => (this.upload = ref)}
//               style={{ display: "none" }}
//             />
//           </div>
//           {this.state.imagePreview ? (
//             <button className="photo-button" onClick={this.profileImageUpload}>
//               Apply Changes
//             </button>
//           ) : null}
//           <div className="user-name">
//             {this.user.name} {this.user.lastname}
//           </div>
//           {/* <div className="user-class">4th A</div> */}
//         </div>
//         <div className="tab-section first" onClick={() => this.changeTab(1)}>
//           <div className="left-side">
//             <AccountCircleIcon className="icon" />
//             Profile Details
//           </div>
//           {this.state.tab === 1 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 1 ? (
//           <div className="content-section">
//             <form>
//               <div className="profile-details">
//                 <div className="field-title">First Name</div>
//                 <input type="text" placeholder={this.user.name} className="form-input" readOnly />
//                 <div className="field-title">Middle Name</div>
//                 <input type="text" placeholder="Ahmad" className="form-input" />
//                 <div className="field-title">Last Name</div>
//                 <input type="text" placeholder={this.user.lastname} className="form-input" readOnly />
//                 <div className="field-title">Gender</div>
//                 <select type="text" className="form-select">
//                   <option value="" disabled selected>
//                     {this.user.gender}
//                   </option>
//                 </select>
//               </div>
//             </form>
//           </div>
//         ) : null}
//         <div className="tab-section" onClick={() => this.changeTab(2)}>
//           <div className="left-side">
//             <SchoolIcon className="icon" />
//             Academic Info
//           </div>
//           {this.state.tab === 2 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 2 ? (
//           <div className="content-section">
//             <div className="academic-info">
//               <div className="content">
//                 <FiberManualRecordIcon className="circleIcon" />
//                 <div className="key">User name:</div>
//                 <div className="value">{this.student.username}</div>
//               </div>
//               <div className="content">
//                 <FiberManualRecordIcon className="circleIcon" />
//                 <div className="key">Standard:</div>
//                 <div className="value">{this.student.standard}</div>
//               </div>
//               <div className="content">
//                 <FiberManualRecordIcon className="circleIcon" />
//                 <div className="key">Student Roll Number:</div>
//                 <div className="value">{this.student.class_roll_no}</div>
//               </div>
//               <div className="content">
//                 <FiberManualRecordIcon className="circleIcon" />
//                 <div className="key">Division:</div>
//                 <div className="value">{this.student.section}</div>
//               </div>
//               <div className="content">
//                 <FiberManualRecordIcon className="circleIcon" />
//                 <div className="key">Board:</div>
//                 <div className="value">CBSC</div>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         <div className="tab-section" onClick={() => this.changeTab(3)}>
//           <div className="left-side">
//             <PermContactCalendarIcon className="icon" />
//             Contact Info
//           </div>
//           {this.state.tab === 3 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 3 ? (
//           <div className="content-section">
//             <div className="contact-info">
//               <div className="content">
//                 <p>Your registered mobile no is</p>
//                 <a href={"tel:" + this.user.contact_no} className="grey">
//                   {this.user.contact_no}
//                 </a>
//               </div>
//               <div className="content">
//                 <p>Your email address is </p>
//                 <a href={"mailto:" + this.user.email} className="green">
//                   {this.user.email}
//                 </a>
//               </div>
//               <div className="content-paragraph">
//                 <p>
//                   Please note, that contact information have created by admin department. You may want to make any changes you
//                   need to
//                   <a href="#"> request changes</a> or <a href="#">contact coordinator</a>.
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         <div className="tab-section" onClick={() => this.changeTab(4)}>
//           <div className="left-side">
//             <LocationOnIcon className="icon" />
//             Address Info
//           </div>
//           {this.state.tab === 4 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 4 ? (
//           <div className="content-section">
//             <div className="address-info">
//               <div className="header">
//                 <h3>Residential Address</h3>
//                 <EditIcon className="editIcon" onClick={() => this.toggleEditPopUp(0, true)} />
//               </div>
//               <div className="body">{this.user.address}</div>
//               <div className="footer">
//                 <Grid container spacing={3}>
//                   <Grid item xs={6}>
//                     <div className="row">
//                       <div className="key">City:</div>
//                       <div className="value">{this.user.city}</div>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="row">
//                       <div className="key">Pincode:</div>
//                       <div className="value">{this.user.pincode}</div>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="row">
//                       <div className="key">State:</div>
//                       <div className="value">{this.user.state}</div>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="row">
//                       <div className="key">Country:</div>
//                       <div className="value">{this.user.country}</div>
//                     </div>
//                   </Grid>
//                 </Grid>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         {this.state.addressPopUp ? (
//           <div className="popup-overlay">
//             <div className="popup">
//               <div className="popup-header">
//                 <h3>Edit Address Details</h3>
//                 <CloseIcon className="close-icon" onClick={() => this.toggleEditPopUp(0, false)} />
//               </div>
//               <div className="popup-body">
//                 <div className="title">Address</div>
//                 <textarea className="input text-area">{this.user.address}</textarea>
//                 <div className="title">City</div>
//                 <input type="text" className="input" placeholder={this.user.city} />
//                 <div className="title">Pin Code</div>
//                 <input type="text" className="input" placeholder={this.user.pincode} />
//                 <div className="title">State</div>
//                 <input type="text" className="input" placeholder={this.user.state} />
//                 <div className="title">Country</div>
//                 <input type="text" className="input" placeholder={this.user.country} />
//               </div>
//               <div className="popup-footer">
//                 <div className="button-grp">
//                   <button className="cancel-btn" onClick={() => this.toggleEditPopUp(0, false)}>
//                     Cancel
//                   </button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         <div className="tab-section" onClick={() => this.changeTab(5)}>
//           <div className="left-side">
//             <SupervisorAccountIcon className="icon" />
//             Parents/Guardian Details
//           </div>
//           {this.state.tab === 5 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 5 ? (
//           <div className="content-section">
//             <div className="parents-guardian">
//               <div className="box">
//                 <div className="title">Guardian 1</div>
//                 <div className="content">
//                   <div className="key">Relation with Pupil :</div>
//                   <div className="value">Father</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Full Name :</div>
//                   <div className="value">Azim Shaikh</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Adhar Card :</div>
//                   <div className="value">1848 8998 89565</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Occupation :</div>
//                   <div className="value">Scientist</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Qualification ;</div>
//                   <div className="value">Doctor</div>
//                 </div>
//               </div>
//               <div className="box top">
//                 <div className="title">Guardian 2</div>
//                 <div className="content">
//                   <div className="key">Relation with Pupil :</div>
//                   <div className="value">Mother</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Full Name :</div>
//                   <div className="value">Salma Azim Shaikh</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Adhar Card :</div>
//                   <div className="value">1848 8998 89565</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Occupation :</div>
//                   <div className="value">Scientist</div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Qualification ;</div>
//                   <div className="value">Doctor</div>
//                 </div>
//               </div>
//               <div className="box top">
//                 <div className="title">Contact details</div>
//                 <div className="content">
//                   <div className="key">Your registered mobile no is</div>
//                   <div className="value">
//                     <a href="tel:+91 952715015" className="call">
//                       +91 952715015
//                     </a>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Emergency contact number is</div>
//                   <div className="value">
//                     <a href="tel:+91 952715015" className="call">
//                       +91 952715015
//                     </a>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <div className="key">Your email address is </div>
//                   <div className="value">
//                     <a href="mailto:student@gmaail.com" className="mail">
//                       student@gmaail.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="content">
//                   <p>
//                     Please note, that contact information have created by admin department. You may want to make any changes you
//                     need to <a>request changes</a> or <a>contact coordinator</a>.
//                   </p>
//                 </div>
//               </div>
//               <div className="addNew-guardian">
//                 <AccountCircleIcon className="person-icon" />
//                 <button className="btn" onClick={() => this.toggleEditPopUp(1, true)}>
//                   Add New Guardian
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         {this.state.guardianPopUp ? (
//           <div className="popup-overlay">
//             <div className="popup">
//               <div className="popup-header">
//                 <h3>Add New Guardian</h3>
//                 <CloseIcon className="close-icon" onClick={() => this.toggleEditPopUp(1, false)} />
//               </div>
//               <div className="popup-body">
//                 <div className="title">Relation</div>
//                 <input type="text" className="input" placeholder="Father" />
//                 <div className="title">Full Name</div>
//                 <input type="text" className="input" placeholder="Enter full name" />
//                 <div className="title">Occupation</div>
//                 <input type="text" className="input" placeholder="Business" />
//                 <div className="title">Birthdate</div>
//                 <input type="text" className="input" placeholder="25/02/2020" />
//                 <div className="title">Gender</div>
//                 <input type="text" className="input" placeholder="Male" />
//                 <div className="title">Email</div>
//                 <input type="text" className="input" placeholder="Example@gmail.com" />
//                 <div className="title">Contact No</div>
//                 <input type="text" className="input" placeholder="1234567890" />
//               </div>
//               <div className="popup-footer">
//                 <div className="button-grp">
//                   <button className="cancel-btn" onClick={() => this.toggleEditPopUp(1, false)}>
//                     Cancel
//                   </button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}
//         <div className="tab-section" onClick={() => this.changeTab(6)}>
//           <div className="left-side">
//             <PermContactCalendarIcon className="icon" />
//             Activity Log
//           </div>
//           {this.state.tab === 6 ? <ExpandMoreIcon className="arrowIcon" /> : <KeyboardArrowRightIcon className="arrowIcon" />}
//         </div>
//         {this.state.tab === 6 ? (
//           <div className="content-section">
//             <div className="activity-log">
//               <div className="time-line">
//                 {this.state.activityLog.map((activity, i) => (
//                   <div className="content">
//                     <h3 className="blue">
//                       {activity.activity}: {activity.to_type}
//                     </h3>
//                     <div className="subContent">
//                       <TimerIcon className="timerIcon" />

//                       <p className="date">{moment(activity.createdAt).format("ddd, Do MMM")}</p>
//                       <h6 className="time">{moment(activity.createdAt).format("h:mm A")}</h6>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default AdminProfileMobile;
