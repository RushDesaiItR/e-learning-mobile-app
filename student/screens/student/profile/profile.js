// import React, { Component } from "react";
// import "./profile.scss";
// import ProfileDetails from "./profile-details/profile-details";
// import ProfileAddress from "./address info/address-info";
// import ActivityLog from "./activity-log/activity-log";
// import ParentGradianDetails from "./parent-gradian-details/parent-gradian-details";

// import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// class StudentProfile extends Component {
//   state = {
//     page: 0,
//   };

//   changeTab = (pageId) => {
//     this.setState({ page: pageId });
//   };

//   render() {
//     return (
//       <>
//         <div className="studentProfile">
//           <div className="backToDashboard">
//             <KeyboardBackspaceIcon className="arrow-icon" onClick={() => this.props.navigate(0)} />
//             <div className="content" onClick={() => this.props.navigate(0)}>
//               Back to Dashboard
//             </div>
//           </div>
//           <div className="whiteBox">
//             <div className="subMenu">
//               <ul>
//                 <li onClick={() => this.changeTab(0)} className={this.state.page === 0 ? "active" : null}>
//                   Profile Details
//                 </li>
//                 <li onClick={() => this.changeTab(1)} className={this.state.page === 1 ? "active" : null}>
//                   Address Info
//                 </li>
//                 <li onClick={() => this.changeTab(2)} className={this.state.page === 2 ? "active" : null}>
//                   Parents/Gradian Details
//                 </li>
//                 <li onClick={() => this.changeTab(3)} className={this.state.page === 3 ? "active" : null}>
//                   Activity Log
//                 </li>
//               </ul>
//             </div>
//             {this.state.page === 0 ? <ProfileDetails /> : null}
//             {this.state.page === 1 ? <ProfileAddress /> : null}
//             {this.state.page === 2 ? <ParentGradianDetails /> : null}
//             {this.state.page === 3 ? <ActivityLog /> : null}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default StudentProfile;
