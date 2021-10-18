// import React, { Component } from "react";
// import "./address-info.scss";

// import Grid from "@material-ui/core/Grid";

// import EditIcon from "@material-ui/icons/Edit";
// // import LocationOnIcon from "@material-ui/icons/LocationOn";
// import CloseIcon from "@material-ui/icons/Close";

// class ProfileAddress extends Component {
//   state = {
//     editPopUp: false,
//     address: "",
//     city: "",
//     pincode: "",
//     state: "",
//     country: "",
//   };

//   componentWillMount() {
//     const user = localStorage.getItem("user");
//     const student = localStorage.getItem("student");
//     this.user = JSON.parse(user);
//     this.student = JSON.parse(student);
//     console.log("user", user);
//     console.log("student", student);
//   }

//   editStudent = async () => {
//     let payload = {
//       address: this.state.address,
//       city: this.state.city,
//       pincode: this.state.pincode,
//       state: this.state.state,
//       country: this.state.country,
//     };

//     console.log("payload", payload);

//     // AuthServices.editStudent(payload).then((res) => {
//     //   console.log("res", res);
//     //   if (res.success) {
//     //     console.log("An student edited Successfully!");
//     //   } else {
//     //     console.error(res.message);
//     //     console.log("error", res.message);
//     //   }
//     // });
//   };

//   render() {
//     return (
//       <>
//         <div className="addressInfo">
//           <div className="box">
//             <div className="title">
//               <h3>Residential Address</h3>
//             </div>
//             <div className="info">
//               <Grid container spacing={3}>
//                 <Grid item xs={4}>
//                   <p className="address">{this.user.address}</p>
//                 </Grid>
//                 <Grid item xs={2}></Grid>
//                 <Grid item xs={2}>
//                   <div className="row">
//                     <p className="key">City:</p>
//                     <p className="value">{this.user.city}</p>
//                   </div>
//                   <div className="row">
//                     <p className="key">State:</p>
//                     <p className="value">{this.user.state}</p>
//                   </div>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <div className="row">
//                     <p className="key">Pincode:</p>
//                     <p className="value">{this.user.pincode}</p>
//                   </div>
//                   <div className="row">
//                     <p className="key">Country:</p>
//                     <p className="value">{this.user.country}</p>
//                   </div>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <button className="editButton" onClick={() => this.setState({ editPopUp: true })}>
//                     <EditIcon className="editIcon" />
//                     Edit
//                   </button>
//                 </Grid>
//               </Grid>
//             </div>
//           </div>
//           {/* <div className="addNewAddress">
//             <LocationOnIcon className="iconLocation" />
//             <div className="addNewBtn">
//               <button>Add New Address</button>
//             </div>
//           </div> */}
//           {this.state.editPopUp ? (
//             <div className="popup-overlay">
//               <div className="popup">
//                 <div className="popup-header">
//                   <h3>Edit Address Details</h3>
//                   <CloseIcon className="close-icon" onClick={() => this.setState({ editPopUp: false })} />
//                 </div>
//                 <div className="popup-body">
//                   <div className="title">Address</div>
//                   <textarea
//                     className="input text-area"
//                     placeholder={this.user.address}
//                     value={this.state.address}
//                     onChange={(e) => {
//                       this.setState({ address: e.target.value });
//                     }}
//                   >
//                     {this.user.address}
//                   </textarea>
//                   <div className="title">City</div>
//                   <input
//                     type="text"
//                     className="input"
//                     placeholder={this.user.city}
//                     value={this.state.city}
//                     onChange={(e) => {
//                       this.setState({ city: e.target.value });
//                     }}
//                   />
//                   <div className="title">Pin Code</div>
//                   <input
//                     type="text"
//                     className="input"
//                     placeholder={this.user.pincode}
//                     value={this.state.pincode}
//                     onChange={(e) => {
//                       this.setState({ pincode: e.target.value });
//                     }}
//                   />
//                   <div className="title">State</div>
//                   <input
//                     type="text"
//                     className="input"
//                     placeholder={this.user.state}
//                     value={this.state.state}
//                     onChange={(e) => {
//                       this.setState({ state: e.target.value });
//                     }}
//                   />
//                   <div className="title">Country</div>
//                   <input
//                     type="text"
//                     className="input"
//                     placeholder={this.user.country}
//                     value={this.state.country}
//                     onChange={(e) => {
//                       this.setState({ country: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <div className="popup-footer">
//                   <div className="button-grp">
//                     <button className="cancel-btn" onClick={() => this.setState({ editPopUp: false })}>
//                       Cancel
//                     </button>
//                     <button className="save-btn">Save</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : null}
//         </div>
//       </>
//     );
//   }
// }

// export default ProfileAddress;
