// import React, { Component } from "react";
// import "./profile-details.scss";

// import Grid from "@material-ui/core/Grid";

// import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
// import SchoolIcon from "@material-ui/icons/School";

// import FemaleProfile from "../../../../../src/assets/img/female-profile.png";
// import MaleProfile from "../../../../../src/assets/img/male-profile.png";

// import LoadingModal from "../../../../components/LoadingModal/LoadingModal";
// import AuthServices from "../../../../services/auth.services";

// import moment from "moment";

// class ProfileDetails extends Component {
//   state = {
//     selectedProfileImageFile: "",
//     imagePreview: null,
//     loading: true,
//   };

//   componentWillMount() {
//     const user = localStorage.getItem("user");
//     console.log("user", user);
//     this.user = JSON.parse(user);
//     const student = localStorage.getItem("student");
//     this.student = JSON.parse(student);
//     console.log("student", student);
//     this.stopLoading();
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
//     console.log(e.target.files);
//     let fileObject = e.target.files[0];
//     this.setState({ selectedProfileImageFile: fileObject });
//     document.getElementById("upload").style.display = "none";
//     document.getElementById("submit").style.display = "block";

//     let reader = new FileReader();
//     reader.onload = (event) => {
//       this.setState({ imagePreview: event.target.result });
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   profileImageUpload = async () => {
//     this.setState({ loading: true });
//     let formData = new FormData();
//     formData.append("user_id", this.user.id);
//     formData.append("file", this.state.selectedProfileImageFile);
//     await AuthServices.uploadProfileImageByStudentId(formData).then(async (data) => {
//       await this.updateData();
//       await this.setState({ selectedProfileImageFile: "" });
//       document.getElementById("upload").style.display = "block";
//       document.getElementById("submit").style.display = "none";
//     });
//     await this.stopLoading();
//   };

//   stopLoading() {
//     this.setState({ loading: false });
//   }

//   render() {
//     return (
//       <>
//         <LoadingModal stopLoading={this.state.loading} />
//         <div className="profileDetails">
//           <Grid container spacing={6}>
//             <Grid item sm={6} md={6} lg={6}>
//               <div className="box">
//                 <div className="title">
//                   <PermContactCalendarIcon className="icon" />
//                   <h3>Personal Details</h3>
//                 </div>
//                 <div className="personal-content">
//                   <div className="data">
//                     <div className="personal-details">
//                       Full Name <span>{this.user.name}</span>
//                     </div>
//                   </div>
//                   <div className="data">
//                     <div className="personal-details">
//                       Gender <span>{this.user.gender}</span>
//                     </div>
//                   </div>
//                   <div className="data">
//                     <div className="personal-details">
//                       Date of Birth<span>{moment(this.user.date_of_birth).format("DD/MM/YYYY")}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item sm={2} md={2} lg={2}></Grid>
//             <Grid item sm={3} md={3} lg={3}>
//               <div className="photo">
//                 <p>Your photo</p>
//                 <img
//                   src={
//                     this.state.selectedProfileImageFile
//                       ? this.state.imagePreview
//                       : this.user.profile_pic_url
//                       ? this.user.profile_pic_url
//                       : this.user.gender === "male"
//                       ? MaleProfile
//                       : FemaleProfile
//                   }
//                   alt="user profile"
//                 />
//                 <p>Note: upload 180px x 180px under 1 Mb. </p>
//                 <div className="btn-grp">
//                   <button id="upload" onClick={(e) => this.upload.click()}>
//                     Change Photo
//                   </button>
//                   <button id="submit" onClick={this.profileImageUpload}>
//                     Upload Image
//                   </button>
//                 </div>
//                 <input
//                   type="file"
//                   accept="image/gif, image/jpeg, image/png"
//                   onChange={this.chooseFile}
//                   ref={(ref) => (this.upload = ref)}
//                 />
//               </div>
//             </Grid>
//             <Grid item sm={1} md={1} lg={1}></Grid>
//           </Grid>
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={6} lg={6} className="flex">
//               <div className="box">
//                 <div className="title">
//                   <SchoolIcon className="icon" />
//                   <h3>Academic Info</h3>
//                 </div>
//                 <Grid container spacing={3}>
//                   <Grid item xs={6}>
//                     <div className="data">
//                       <span className="point">Standard:</span>
//                       <span className="value">{this.student.standard}</span>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="data">
//                       <span className="point">Division:</span>
//                       <span className="value">{this.student.section}</span>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="data">
//                       <span className="point">Student Roll Number:</span>
//                       <span className="value">{this.student.class_roll_no}</span>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="data">
//                       <span className="point">Board:</span>
//                       <span className="value">CBSC</span>
//                     </div>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <div className="data">
//                       <span className="point">user name:</span>
//                       <span className="value">{this.student.username}</span>
//                     </div>
//                   </Grid>
//                 </Grid>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={6} lg={6} className="flex">
//               <div className="box">
//                 <div className="title">
//                   <PermContactCalendarIcon className="icon" />
//                   <h3>Contact Info</h3>
//                 </div>
//                 <div className="data">
//                   <div className="information">
//                     <p>Your registered mobile no is</p>
//                     <h4>{this.user.contact_no}</h4>
//                   </div>
//                   <div className="information">
//                     <p>Your email address is </p>
//                     <h4>
//                       <a href={"mailto:" + this.user.email}>{this.user.email}</a>
//                     </h4>
//                   </div>
//                   <p>
//                     Please note, that contact information have created by admin department. You may want to make any changes you
//                     need to <a href="#">request changes</a> or <a href="#">contact coordinator</a>.
//                   </p>
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//       </>
//     );
//   }
// }

// export default ProfileDetails;
