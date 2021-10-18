// import React, { Component } from "react";
// import "./classroom.scss";

// import AttendanceIcon from "../../../assets/icons/sub-book.svg";
// import SubjectsIcon from "../../../assets/icons/sub-subject.svg";
// import WebinarIcon from "../../../assets/icons/sub-webinar.svg";
// import Classmates from "../../../assets/img/classroom/backpack.png";
// import Teachers from "../../../assets/img/classroom/briefcase.png";
// import MaleProfile from "../../../assets/img/male-profile.png";
// import FemaleProfile from "../../../assets/img/female-profile.png";
// import SortIcon from "@material-ui/icons/Sort";
// import SearchIcon from "@material-ui/icons/Search";
// import SmsIcon from "@material-ui/icons/Sms";
// import TodayIcon from "@material-ui/icons/Today";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import LoadingModel from "../../../components/LoadingModal/LoadingModal";
// import SubjectBook from "../../../components/SubjectBook/SubjectBook";
// import { ColorPalette } from "./../../../styles/colorPalette.js";
// import ClassBlock from "../../../components/ClassBlock/ClassBlock";

// import AuthServices from "../../../services/auth.services";
// import { ThreeSixty } from "@material-ui/icons";

// class Classroom extends Component {
//   state = {
//     selectedTab: 0,
//     loading: true,
//     currentSubjects: [],
//     subjects: [],
//     classmates: [],
//     attendance: [],
//     nextLecture: [],
//   };

//   async componentWillMount() {
//     console.log(this.props);
//     await this.updateClassRooms();
//   }

//   async updateClassRooms() {
//     await this.getClassroomSubjects();
//     await this.getClassroomData();
//     await this.getNextLectureStudentId();
//     this.setState({ loading: false });
//   }

//   getClassroomSubjects = async (id) => {
//     const subject = await AuthServices.getSubjectsByClassroomId(this.props.student.classroom_id);
//     this.setState({ currentSubjects: subject });
//     console.log("subject", subject);
//     this.setState({ screen: "details", currentClassRoomId: this.props.student.classroom_id });
//   };

//   getClassroomData = async () => {
//     // const allData = await AuthServices.getClassmatesPercentageByStudentId(this.props.student.id, this.props.student.classroom_id);
//     // console.log("allData", allData);
//     // this.setState({ subjects: allData.subjects.subjects });
//     // this.setState({ classmates: allData.classmates });
//     // this.setState({ attendance: allData.result });

//     const dummyResponse = {
//       success: true,
//       status: true,
//       subjects: {
//         success: true,
//         status: true,
//         subjects: [
//           {
//             student_id: 2,
//             classroom_subject_id: 1,
//             createdAt: "2020-11-18T08:05:25.115Z",
//             updatedAt: "2020-11-18T08:05:25.115Z",
//             classroom_subjects: {
//               id: 1,
//               subject_id: 1,
//               classroom_id: 15,
//               section: "A",
//               color_code: 0,
//               createdAt: "2020-11-18T08:00:47.986Z",
//               updatedAt: "2020-11-18T08:00:47.986Z",
//               subjects: {
//                 id: 1,
//                 institute_id: 1,
//                 universal_subject_id: 1,
//                 name: "Marathi",
//                 standard: 7,
//                 graphics: null,
//                 createdAt: "2020-11-18T08:00:47.959Z",
//                 updatedAt: "2020-11-18T08:00:47.959Z",
//               },
//             },
//           },
//           {
//             student_id: 2,
//             classroom_subject_id: 3,
//             createdAt: "2020-11-18T08:05:25.123Z",
//             updatedAt: "2020-11-18T08:05:25.123Z",
//             classroom_subjects: {
//               id: 3,
//               subject_id: 2,
//               classroom_id: 15,
//               section: "A",
//               color_code: 4,
//               createdAt: "2020-11-18T08:00:48.039Z",
//               updatedAt: "2020-11-18T08:00:48.039Z",
//               subjects: {
//                 id: 2,
//                 institute_id: 1,
//                 universal_subject_id: 2,
//                 name: "Hindi",
//                 standard: 7,
//                 graphics: null,
//                 createdAt: "2020-11-18T08:00:48.012Z",
//                 updatedAt: "2020-11-18T08:00:48.012Z",
//               },
//             },
//           },
//         ],
//       },
//       classmates: [
//         {
//           id: 2,
//           user_id: 5,
//           username: "Stu1605686724911",
//           classroom_id: 15,
//           standard: 7,
//           section:
//             "A                                                                                                                                                                                                                                                              ",
//           admission_no: 18166,
//           user: {
//             id: 5,
//             name: "StudentUser 2",
//             lastname: "test 2",
//             profile_pic_url: null,
//             thumbnail_url: null,
//             email: "kg12v@gmail.com",
//             gender: "male",
//           },
//         },
//         {
//           id: 92,
//           user_id: 136,
//           username: "Ket1605783248625",
//           classroom_id: 15,
//           standard: 7,
//           section:
//             "A                                                                                                                                                                                                                                                              ",
//           admission_no: 100001,
//           user: {
//             id: 136,
//             name: "Ketan",
//             lastname: "Walunjkar",
//             profile_pic_url: null,
//             thumbnail_url: null,
//             email: "keta1n341@daxta.tech",
//             gender: "male",
//           },
//         },
//       ],
//       result: [
//         {
//           student: {
//             student_data: {
//               id: 2,
//               user_id: 11,
//               username: "Stu1605686724911",
//               classroom_id: 15,
//               standard: 7,
//               section:
//                 "A                                                                                                                                                                                                                                                              ",
//               admission_no: 18166,
//               user: {
//                 id: 5,
//                 name: "StudentUser 2",
//                 lastname: "test 2",
//                 profile_pic_url: null,
//                 thumbnail_url: null,
//                 email: "kg12v@gmail.com",
//                 gender: "male",
//               },
//             },
//             student_percentage: {
//               student_id: 2,
//               total_lecture: 1,
//               attended_lecture: 0,
//               attendance_percentage: 0,
//               quiz_percentage: 0,
//             },
//           },
//         },
//         {
//           student: {
//             student_data: {
//               id: 92,
//               user_id: 136,
//               username: "Ket1605783248625",
//               classroom_id: 15,
//               standard: 7,
//               section:
//                 "A                                                                                                                                                                                                                                                              ",
//               admission_no: 100001,
//               user: {
//                 id: 136,
//                 name: "Ketan",
//                 lastname: "Walunjkar",
//                 profile_pic_url: null,
//                 thumbnail_url: null,
//                 email: "keta1n341@daxta.tech",
//                 gender: "male",
//               },
//             },
//             student_percentage: {
//               student_id: 92,
//               total_lecture: 1,
//               attended_lecture: 0,
//               attendance_percentage: 0,
//               quiz_percentage: 0,
//             },
//           },
//         },
//       ],
//     };

//     this.setState({ subjects: dummyResponse.subjects.subjects });
//     this.setState({ classmates: dummyResponse.classmates });
//     this.setState({ attendance: dummyResponse.result });
//   };

//   getNextLectureStudentId = async () => {
//     await AuthServices.getNextLectureStudentId(this.props.user.id).then((data) => {
//       const result = data;
//       console.log("result NextLecture", result);
//       this.setState({ nextLecture: result.lectures });
//     });
//   };

//   navigateToSubjectDetails = (subject) => {
//     this.props.navigate(4, { subject });
//   };

//   render() {
//     return (
//       <>
//         <div className="studentClassroom">
//           <div className="whiteBox">
//             <div className="heading">My Classroom</div>
//             <div className="tabs">
//               <div
//                 className={this.state.selectedTab === 0 ? "box active" : "box"}
//                 onClick={() => this.setState({ selectedTab: 0 })}
//               >
//                 <img src={SubjectsIcon} alt="" className="box-icon" />
//                 <div className="title">Subjects</div>
//               </div>
//               <div
//                 className={this.state.selectedTab === 1 ? "box active" : "box"}
//                 onClick={() => this.setState({ selectedTab: 1 })}
//               >
//                 <img src={AttendanceIcon} alt="" className="box-icon" />
//                 <div className="title">My Attendance</div>
//               </div>
//               <div
//                 className={this.state.selectedTab === 2 ? "box active" : "box"}
//                 onClick={() => this.setState({ selectedTab: 2 })}
//               >
//                 <img src={WebinarIcon} alt="" className="box-icon" />
//                 <div className="title">Webinar</div>
//               </div>
//               <div
//                 className={this.state.selectedTab === 3 ? "box active" : "box"}
//                 onClick={() => this.setState({ selectedTab: 3 })}
//               >
//                 <img src={Classmates} alt="" className="box-icon" width="39px" height="50px" />
//                 <div className="title">My Classmates</div>
//               </div>
//               <div
//                 className={this.state.selectedTab === 4 ? "box active" : "box"}
//                 onClick={() => this.setState({ selectedTab: 4 })}
//               >
//                 <img src={Teachers} alt="" className="box-icon" width="50px" height="47px" />
//                 <div className="title">My Teachers</div>
//               </div>
//             </div>
//             <div className="tab-content">
//               {this.state.selectedTab === 0 ? (
//                 <div className="content-subject">
//                   {this.state.currentSubjects.map((subject, i) => (
//                     <div className="subject-book" key={i}>
//                       {/* <SubjectBook
//                         style={{ width: "109px", height: "130px" }}
//                         color="#19a886"
//                         subjectName={subject.subjects.name}
//                         onClick={() => this.navigateToSubjectDetails(subject)}
//                         color={ColorPalette[subject.color_code]}
//                       /> */}
//                       <SubjectBook
//                         clickable={true}
//                         onClick={()=>this.props.navigate(4,{subject})}
//                         name={subject.subjects.name}
//                         style={{ height: "130px" }}
//                         color={ColorPalette[subject.color_code]}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ) : this.state.selectedTab === 1 ? (
//                 <div className="content-attendance">
//                   <div className="attendance-table">
//                     <div className="table-header">
//                       <div className="title name">
//                         Name <SortIcon className="sort-icon" />
//                       </div>
//                       <div className="title">No. Of lectures conducted</div>
//                       <div className="title">Quiz</div>
//                       <div className="title">Total attendance (%)</div>
//                     </div>
//                     {this.state.attendance.map((data, i) => (
//                       <Attendance key={i} studentAttendance={data} currentUserId={this.props.user.id} />
//                     ))}
//                   </div>
//                 </div>
//               ) : this.state.selectedTab === 2 ? (
//                 <div className="content-webinar">
//                   <div className="webinar-head">
//                     <TodayIcon className="calendar-icon" />
//                     <div className="day-dropdown">
//                       Today <ExpandMoreIcon className="expand-icon" />
//                     </div>
//                   </div>
//                   {this.state.nextLecture.map((nextLecture, i) => (
//                     <div className='lecture-block-wrapper'>
//                       <ClassBlock                      
//                         classData={nextLecture}
//                         beginHour={this.startTime}
//                         type={"student"}
//                         goToClass={this.props.goToClass}
//                         display={this.state.displayMode}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ) : this.state.selectedTab === 3 ? (
//                 <div className="content-student">
//                   <div className="search-student">
//                     <label htmlFor="studentSearch">
//                       <div className="search-box">
//                         <SearchIcon className="search-icon" />
//                         <input type="text" className="search-box-input" placeholder="Search Student" id="studentSearch" />
//                       </div>
//                     </label>
//                   </div>
//                   <div className="student-table">
//                     <div className="table-header">
//                       <div className="title name">
//                         Name <SortIcon className="sort-icon" />
//                       </div>
//                       <div className="title">Email</div>
//                       <div className="title">Contact No.</div>
//                       <div className="title">Gender</div>
//                       <div className="title">Roll No.</div>
//                       <div className="title">Chat</div>
//                     </div>
//                     {this.state.classmates.map((data, i) => (
//                       <MyClassmates key={i} classmates={data} />
//                     ))}
//                   </div>
//                 </div>
//               ) : this.state.selectedTab === 4 ? (
//                 <div className="content-teacher">
//                   <div className="search-teacher">
//                     <label htmlFor="teacherSearch">
//                       <div className="search-box">
//                         <SearchIcon className="search-icon" />
//                         <input type="text" className="search-box-input" placeholder="Search Teacher" id="teacherSearch" />
//                       </div>
//                     </label>
//                   </div>
//                   <div className="teacher-table">
//                     <div className="table-header">
//                       <div className="title name">
//                         Name <SortIcon className="sort-icon" />
//                       </div>
//                       <div className="title">Subject</div>
//                       <div className="title">Email</div>
//                       <div className="title">Contact No.</div>
//                       <div className="title">Gender</div>
//                     </div>
//                     <MyTeachers />
//                     <MyTeachers />
//                     <MyTeachers />
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Classroom;

// class Attendance extends Component {
//   state = {};

//   render() {
//     return (
//       <div
//         className={
//           this.props.currentUserId === this.props.studentAttendance.student.student_data.user_id
//             ? "table-content me"
//             : "table-content"
//         }
//       >
//         <div className="table-col">
//           <img
//             src={
//               this.props.studentAttendance.student.student_data.user.thumbnail_url
//                 ? this.props.studentAttendance.student.student_data.user.thumbnail_url
//                 : this.props.studentAttendance.student.student_data.user.gender === "female"
//                 ? FemaleProfile
//                 : MaleProfile
//             }
//             alt=""
//             className="profile-img"
//           />
//           <div className="table-values">{this.props.studentAttendance.student.student_data.user.name}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">
//             <span>{this.props.studentAttendance.student.student_percentage.attended_lecture}</span>/
//             {this.props.studentAttendance.student.student_percentage.total_lecture} classes
//           </div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">{this.props.studentAttendance.student.student_percentage.quiz_percentage}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">{this.props.studentAttendance.student.student_percentage.attendance_percentage}</div>
//         </div>
//       </div>
//     );
//   }
// }

// class MyClassmates extends Component {
//   state = {};

//   render() {
//     return (
//       <div className="table-content">
//         <div className="table-col">
//           <img
//             src={
//               this.props.classmates.user.thumbnail_url
//                 ? this.props.classmates.user.thumbnail_url
//                 : this.props.classmates.user.gender === "female"
//                 ? FemaleProfile
//                 : MaleProfile
//             }
//             alt=""
//             className="profile-img"
//           />
//           <div className="table-values">{this.props.classmates.user.name}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">{this.props.classmates.user.email}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">+91 987654321</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">{this.props.classmates.user.gender}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">{this.props.classmates.id}</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">
//             <SmsIcon />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class MyTeachers extends Component {
//   state = {};

//   render() {
//     return (
//       <div className="table-content">
//         <div className="table-col">
//           <img src={MaleProfile} alt="" className="profile-img" />
//           <div className="table-values">Rajanikant Sornam</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">English</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">Neel@daxta.tech</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">+91 987654321</div>
//         </div>
//         <div className="table-col">
//           <div className="table-values">M</div>
//         </div>
//       </div>
//     );
//   }
// }
