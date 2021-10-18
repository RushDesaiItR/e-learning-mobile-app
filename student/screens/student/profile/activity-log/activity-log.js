// import React, { Component } from "react";
// import "./activity-log.scss";

// import TimerIcon from "@material-ui/icons/Timer";

// import AuthServices from "../../../../services/auth.services";
// import LoadingModal from "../../../../components/LoadingModal/LoadingModal";
// import { SIGN_IN, SIGN_OUT } from "../../../../constants/activityStrings";

// import moment from "moment";

// class ActivityLog extends Component {
//   state = {
//     activityLog: [],
//     loading: true,
//   };

//   componentWillMount() {
//     const user = localStorage.getItem("user");
//     this.user = JSON.parse(user);
//     const student = localStorage.getItem("student");
//     this.student = JSON.parse(student);
//     this.updateAnnouncementList();
//   }

//   async updateAnnouncementList() {
//     await this.getAllActivityLogByStudentId();
//     await this.stopLoading();
//   }

//   async getAllActivityLogByStudentId() {
//     await AuthServices.getAllActivityLogByStudentId(this.student.id).then((data) => {
//       const activityLog = data;
//       this.setState({ activityLog });
//     });
//   }

//   stopLoading() {
//     this.setState({ loading: false });
//   }

//   render() {
//     return (
//       <>
//         <LoadingModal stopLoading={this.state.loading} />
//         <div className="activity">
//           <div className="timeLine">
//             {this.state.activityLog.map((activity, i) => (
//               <Activity key={i} activityData={activity} />
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default ActivityLog;

// class Activity extends Component {
//   state = {};
//   render() {
//     const activityColor =
//       this.props.activityData.activity === SIGN_IN ? "green" : this.props.activityData.activity === SIGN_OUT ? "red" : "blue";
//     return (
//       <div className={"content " + activityColor}>
//         <div className="activity-title">
//           {this.props.activityData.activity} : {this.props.activityData.to_type}
//         </div>
//         <div className="subContent">
//           <TimerIcon className="timerIcon" />
//           <p className="date">{moment(this.props.activityData.createdAt).format("ddd, Do MMM")}</p>
//           <h6 className="time">{moment(this.props.activityData.createdAt).format("h:mm A")}</h6>
//         </div>
//       </div>
//     );
//   }
// }
