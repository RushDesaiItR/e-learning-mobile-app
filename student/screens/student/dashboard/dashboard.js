import React, { Component } from "react";
import DaxtaButton from "../../../components/DaxtaButton/DaxtaButton"
import { MainColorPalette, ColorPalette } from "../../../styles/colorPalette"
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, BackgroundImage, ImageBackground } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import Chemistry from "../../../assets/icons/chemistry.svg";
import ChemistryPng from "../../../assets/img/PngChemistry.png"
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
// import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
// import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
// import PeopleIcon from "@material-ui/icons/People";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DashBoardBg from "../../../assets/img/dashboard/notice-background.png"
import WelcomeImg from "../../../assets/img/dashboard/welcome.png";
import FemaleProfile from "../../../assets/img/female-profile.png";
import GroupPeople from "../../../assets/img/dashboard/group-people.png";
import NoLecture from "../../../assets/img/dashboard/no-lecture.png";
import NoAnnouncements from "../../../assets/img/dashboard/no-announcements.png";

import moment from "moment";

import AuthServices from "../../../services/auth.services";
import * as UtilityServices from "../../../services/util.services";
// // import { CalendarToday } from "@material-ui/icons";
// import SubjectBook from "../../../components/SubjectBook/SubjectBook";
// import LoadingModal from "../../../components/LoadingModal/LoadingModal";
import { SIGN_IN, SIGN_OUT } from "../../../constants/activityStrings";
import { Sizes } from "../../../styles/sizes";
const config = require("../../../config/config");
const HOST = config.host;
const API = config.api;

class StudentDashboard extends Component {
  state = {
    nextLecture: [],
    mySubject: [],
    attendanceStudent: [],
    subjectAttendance: [],
    studentLectures: [],
    announcements: [],
    activityLog: [],
    currentLecture: null,
    currentLectureAction: "Waiting",
    missedLectureSlider: 0,
    missedLectures: [],
    attendancePercent: 0,
    attendancePieChartValue: 0,
    quizzPercent: 0,
    quizzPieChartValue: 0,
    calendarMonth: moment(),
    calendar: [],
    loading: true,
    noticeBoard: 0,
    userData: [],
    instituteData: []

  };
    async componentWillMount() {
    let attendancePercent = 35;
    let quizzPercent = 80;

    this.setState({
      attendancePercent: attendancePercent,
      attendancePieChartValue: this.setPieChartValue(attendancePercent),
      quizzPercent: quizzPercent,
      quizzPieChartValue: this.setPieChartValue(quizzPercent),
    });

    if (attendancePercent <= 60) {
      this.attendanceMessage = "Poor attendance, Improve yourself!";
    } else if (attendancePercent > 60 && attendancePercent <= 80) {
      this.attendanceMessage = "Average attendance, you can perform better!";
    } else {
      this.attendanceMessage = "Good Job, Keep it up!";
    }

    const institute = await AsyncStorage.getItem("institute");
    const user = await AsyncStorage.getItem("user");
    this.institute = JSON.parse(institute);
    this.setState({ instituteData: this.institute })

    this.user = JSON.parse(user);
    this.setState({ userData: this.user })
    this.student = this.props.student;
    console.log("student  data in student dasboard",this.props.student);
    // this.socket.on('lecture-started',data=>{ 
    //   this.updateLectures()
    // })
    this.updateData();
    this.calendar();
  }
  stopLoading() {
    this.setState({ loading: false });
  }
  async updateLectures() {
    this.getClasses()
    this.setCurrentLecture(this.state.studentLectures)
  }
  async updateData() {
    await this.getDashboardData();
    this.stopLoading();
    // await this.getClassesByClassroom()
    // await this.getNextLectureStudentId();
    // await this.getSubjectByStudentId();
    // await this.getAttendancePerSubject();
    // await this.getAttendanceByStudentId();
    await this.getAllActivityLogByStudentId();
    await this.getAllAnnouncementByInstituteId();
    // await this.getQuizAttendanceByStudentId();
  }

  async getDashboardData() {
    await AuthServices.getDashboardData(this.student.id).then((data) => {
      const result = data;
  
      this.setState({
        attendanceStudent: result.quizAttendancesPercent.quizAttendancesPercent,
        studentLectures: result.lectures.lectures,
        // missedLectures: result.missLectures.lectures,
        mySubject: result.subjects.subjects,
        // subjectAttendance: [],//result.studentSubjectsPercentage.resultPercentageSubject,
      });
      this.setCurrentLecture(result.lectures.lectures);

      // this.setState({ nextLecture: result.lectures });
    });
  }

  getClasses = () => {
    AuthServices.getClassesByClassroom(this.props.student.classroom_id)
      .then((data) => {
        if (data.length) {
          console.log("Classes", data);
          this.setState({ studentLectures: data })
          this.setCurrentLecture(data)
        }

      })
  }
  // async getNextLectureStudentId() {
  //   await AuthServices.getNextLectureStudentId(this.user.id).then((data) => {
  //     const result = data;
  //     console.log("result NextLecture");
  //     console.log(result);
  //     this.setState({ nextLecture: result.lectures });
  //   });
  // }

  async getSubjectByStudentId() {
    await AuthServices.getSubjectByStudentId(this.props.student.id).then((data) => {
      const result = data;
      this.setState({ mySubject: result.subjects });
    
    });
  }

  async getAttendanceByStudentId() {
    await AuthServices.getAttendanceByStudentId(this.student.id).then((data) => {
      const result = data;
     
      this.setState({ attendanceStudent: result.resultPercentage.attendance_percentage });
    });
  }

  async getAllAnnouncementByInstituteId(type) {
    await AuthServices.getAllAnnouncementByInstituteId(this.state.instituteData.id).then((data) => {
      const announcements = data;
      console.log("result getAllAnnouncementByInstituteId", data);
      this.setState({ announcements });
    });
  }

  async getAllActivityLogByStudentId(type) {
    await AuthServices.getAllActivityLogByStudentId(this.student.id).then((data) => {
      const activityLog = data.data;
     
      this.setState({ activityLog });
    });
  }

  async getQuizAttendanceByStudentId(type) {
    await AuthServices.getQuizAttendanceByStudentId(this.student.id).then((data) => {
      const quizAttendance = data;
    
    });
  }
  async getClassesByClassroom() {
    await AuthServices.getClassesByClassroom(this.props.student.classroom_id).then((data) => {
      const result = data;
    
      this.setState({ studentLectures: result });
      this.setCurrentLecture(result);
    });
  }
  async setCurrentLecture(lectures) {
  

    const today = new Date();
    let currentLecture = null;
    let currentLectureAction = "Waiting";
    let mintime = 10000000;
    let nextIndex = 0;
    // let currIndex = 0;
    this.nextLectures = [];
    for (let l in lectures) {
      const lecture = lectures[l];
      const date = new Date(lecture.start_time);
      if (date.getDate() === today.getDate()) {
        if (UtilityServices.checkInBetween(lecture.start_time, lecture.end_time)) {
          if (lecture.actual_start !== null && lecture.actual_end === null) {
            currentLecture = lecture;
            currentLectureAction = "Join Now";
            break;
          }
          if (lecture.actual_start === null && lecture.actual_end === null) {
            currentLecture = lecture
            currentLectureAction = 'Get Ready'
            break
          }
        }

        if ((lecture.actual_start === null && lecture.actual_end === null) || true) {
          if (date.getTime() > today.getTime()) {
            const diff = date.getTime() - today.getTime();
            if (diff < mintime) {
              mintime = diff;
              currentLecture = lecture;
              nextIndex = l;
            }
          }
        }
      }
    }
    for (let i = nextIndex; i < lectures.length; i++) {
      if (this.nextLectures.length < 3) {
        this.nextLectures.push(lectures[i]);
      }
    }
    const missedLectures = []

    for (var i = lectures.length - 1; i >= 0; i--) {
      if (missedLectures.length < 3) {
        const lecture = lectures[i]
        if (lecture.actual_start !== null && lecture.actual_end !== null)
          missedLectures.push(lectures[i]);
        if (missedLectures.length === 3) { break; }
      }
    }
    this.setState({ currentLecture, currentLectureAction, nextLecture: this.nextLectures, missedLectures });
    console.log("Next Lecturea", this.state.nextLectures);
   
  }

  changeSlider = (sliderId) => {
    this.setState({ missedLectureSlider: sliderId });
  };

  setPieChartValue = (value) => {
    let result = value * 2.198;
    return result;
  };

  setBarChartValue = (value) => {
    let result = (value * (40 - 300)) / 100 + 300;
    return result;
  };

  calendar = (value) => {
    let month;
    if (value === "next") {
      month = moment(this.state.calendarMonth).add(1, "M");
      this.setState({ calendarMonth: month });
    } else if (value === "prev") {
      month = moment(this.state.calendarMonth).subtract(1, "M");
      this.setState({ calendarMonth: month });
    } else {
      month = this.state.calendarMonth;
    }

    let calendar = [];
    const startDay = moment(month).clone().startOf("month").startOf("week");
    const endDay = moment(month).clone().endOf("month").endOf("week");

    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day")) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => [
            date.add(1, "day").clone().format("DD"),
            moment(month).isSame(date, "month") ? (moment().isSame(date, "day") ? "today" : "noClass") : "oldMonth",
          ]),
      });
    }

    this.setState({ calendar: calendar });
  };

  render() {
    return (
      <ScrollView vertical={true} style={styles.container}>
        {/* <View style={styles.intoPortion}>
             <Image 
             source={WelcomeImg}
             resizeMode="contain"
             style={styles.intoPortionImg}
             />
              <Text style={styles.introName}>Hi {this.state.userData.name}</Text>
              <Text style={styles.intoPortionPara}> Welcome to the Daxta dashboard , you have new 
              <Text style={{fontWeight:"bold"}}> 6 notification.</Text></Text>
         </View> */}

        {
          this.state.currentLecture ? (

            <View style={styles.columnContainer}>
              <View style={styles.column}>
                <View style={styles.row}>
                  <View
                    style={{
                      paddingHorizontal: Sizes.radius,
                      paddingVertical: Sizes.radius,
                      backgroundColor: MainColorPalette.primary_y
                    }}
                  >
                    <Image
                      source={ChemistryPng}
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{ flexDirection: "column", justifyContent: "space-between", marginHorizontal: Sizes.radius }}>
                    <Text style={{ fontFamily: "NunitoSans", fontWeight: "600", fontSize: Sizes.padding, color: MainColorPalette.primary_b }}>

                      {this.state.currentLecture.classroom_subjects.subjects.name}

                    </Text>
                    <Text style={{ fontFamily: "NunitoSans", fontWeight: "600", fontSize: Sizes.radius, color: MainColorPalette.primary_y }}>
                      ({this.state.currentLecture.teacher.user.name})
                   </Text>
                    <View style={[styles.row, { marginTop: 5 }]}>
                      <MaterialCommunityIcons name="timer-outline" color={MainColorPalette.primary_b} size={Sizes.padding} />
                      <Text style={{ color: MainColorPalette.primary_b, size: Sizes.radius }}>
                         {UtilityServices.formatTimeFrom(this.state.currentLecture.start_time)}

                      </Text>
                     
                      <Text style={{ color: MainColorPalette.primary_b, size: Sizes.radius}}>
                         {UtilityServices.formatTimeFrom(this.state.currentLecture.end_time)} 
                      </Text>
                    </View>

                  </View>
                  <TouchableOpacity style={{
                    paddingHorizontal: Sizes.padding,
                    paddingVertical: Sizes.radius,
                    backgroundColor: MainColorPalette.primary_b,
                    borderRadius: Sizes.five,
                  }}
                    onPress={() => this.props.goToClass(this.state.currentLecture)}
                  >
                    <Text style={{ color: MainColorPalette.white, fontSize: Sizes.padding }}>{this.state.currentLectureAction}</Text>
                  </TouchableOpacity>
                 

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: Sizes.radius }}>
                  <Text style={{ fontFamily: "NunitoSans", color: MainColorPalette.primary_b, fontSize: Sizes.fiften }}>Next Lecture</Text>
                  <TouchableOpacity onPress={() => this.props.navigate(3)}>
                    <Text style={{
                      fontSize: Sizes.fiften,
                      fontFamily: "NunitoSans",
                      color: MainColorPalette.primary_b,
                      textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationWidth: 2,
                      textDecorationColor: MainColorPalette.primary_b
                    }}>See All</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: MainColorPalette.primary_b }} />

                 {/* <View style={[styles.column, { paddingTop: Sizes.fiften }]}>

                  {
                    this.state.nextLecture.map((lecture, i) => (
                      <NextLecture key={i} lecturesData={lecture} />
                    ))
                  }
                </View>  */}


              </View>
            </View>
          )
            :
            (
              <>
                <View style={styles.columnContainer}>
                  <Image
                    source={NoAnnouncements}
                    resizeMode="contain"
                    style={styles.intoPortionImg}
                  />

                  <Text style={styles.intoPortionPara}>There is no ongoing lecture right now,
              <Text style={{ fontWeight: "bold" }}> keep studying!.</Text></Text>
                </View>

              </>
            )
        }

        {/* --------------------------------------------------------------Live Lecture completeed---------------------------------------------------------------- */}

        {/* -----------------------------------------------Notice Board----------------------------------------------------------------------------- */}

        {/* <View style={{flexDirection:"column", justifyContent: "center"}}>
              <ImageBackground source={DashBoardBg} style={{height:120, width:"100%"}}>
                  <View style={styles.noticeBoardHeader}>
                       <Text style={{fontFamily:"NunitoSans", fontWeight:"600", color:MainColorPalette.white,  marginTop:15}}>Notice Board</Text>
                       <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",marginTop:30}}>
                        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Image source={GroupPeople} style={{width:Sizes.padding, height:Sizes.padding}} resizeMode="contain"/>
                              <Text  style={{fontFamily:"NunitoSans", fontWeight:"600", color:MainColorPalette.white, marginLeft:Sizes.fiften}}>Institute</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}} >
                              <Image source={GroupPeople} style={{width:Sizes.padding, height:Sizes.padding}} resizeMode="contain"/> 
                               <Text  style={{fontFamily:"NunitoSans", fontWeight:"600", color:MainColorPalette.white, marginLeft:Sizes.fiften}}>Class Room</Text>
                        </TouchableOpacity>
                     
                       </View>
                   </View>

               </ImageBackground>
               {
                 this.state.announcements.length > 0 ?
               <ScrollView vertical={true} style={{height:400}}>
                      {
                        this.state.announcements.length > 0 ? (
                          this.state.announcements.map((announcement, i) => {
                            // <View style={{paddingHorizontal:Sizes.padding, backgroundColor:"red"}}>
                               <Announcement key={i} announcementData={announcement}/>
                            // </View>
                          })
                        )
                        :
                        null
                      }    
              </ScrollView>

              :

              <ScrollView vertical={true} style={{height:100}}>
                    
                      
                          <Text>No Announcement</Text>
                      
                         
              </ScrollView>
              }
         </View> */}
      </ScrollView>


    )
  }
}
export default StudentDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MainColorPalette.d_bg
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnContainer: {
    // marginHorizontal:Sizes.padding,
    alignItems: "center",
    backgroundColor: MainColorPalette.white,
    borderRadius: Sizes.radius,
    paddingHorizontal: Sizes.padding,
    paddingVertical: Sizes.padding,
    marginTop: Sizes.radius
  },
  column: {
    flexDirection: "column",

  },
  intoPortion: {
    // marginHorizontal:Sizes.padding,
    alignItems: "center",
    backgroundColor: MainColorPalette.white,
    borderRadius: Sizes.radius,
    paddingHorizontal: Sizes.padding,
    paddingVertical: Sizes.padding,
    marginTop: Sizes.radius
  },
  intoPortionImg: {
    width: 150,
    height: 150
  },
  intoPortionPara: {
    textAlign: "center",
    fontFamily: "NunitoSans",
    color: MainColorPalette.primary_b,
    fontSize: Sizes.fiften,
    marginTop: Sizes.padding
    // textWrap:"wrap",
  },
  introName: {
    color: MainColorPalette.primary_b,
    paddingVertical: Sizes.radius,
    fontFamily: "NunitoSans",
    fontSize: Sizes.padding
  },
  noticeBoardHeader: {
    height: Sizes.hundread,
    paddingHorizontal: Sizes.padding
  }
})
//      <div className="studentDashboard">
//         <LoadingModal stopLoading={this.state.loading} />
//         <Grid container spacing={2}>
//           <Grid item sm={12} md={9} lg={9}>
//             <Grid container spacing={2}>
//               <Hidden smDown>
//                 <Grid item xs={12} sm={12} md={4} lg={4}>
//                   <div className="whiteBox">
//                     <div className="welcome-section">
//                       <img src={WelcomeImg} alt="" />
//                       <h3>Hi {this.user.name}</h3>
//                       <p>
//                         Welcome to the Daxta dashboard , you have new <span>6 notification.</span>
//                       </p>
//                     </div>
//                   </div>
//                 </Grid>
//               </Hidden>
//               <Grid item xs={12} sm={12} md={4} lg={4}>
//                 <div className="whiteBox">
//                   {this.state.currentLecture ? (
//                     <div className="goLive-section">
//                       <div className="goLive-header">
//                         <div className="goLive-left-side">
//                           <div className="iconPart">
//                             <img src={Chemistry} alt="" />
//                           </div>
//                           <div className="titlePart">
//                             <h3>
//                               {this.state.currentLecture.classroom_subjects.subjects.name}{" "}
//                               <span>({this.state.currentLecture.teacher.user.name})</span>
//                             </h3>
//                             <div className="time">
//                               <TimerIcon className="timerIcon" />
//                               <p>
//                                 {UtilityServices.formatTimeFrom(this.state.currentLecture.start_time) +
//                                   " " +
//                                   UtilityServices.formatTimeFrom(this.state.currentLecture.end_time)}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="buttonPart clickable">
//                           <DaxtaButton style={{width:'150px'}} content={this.state.currentLectureAction} onClick={() => this.props.goToClass(this.state.currentLecture)} />
//                           {/* <button onClick={() => this.props.goToClass(this.state.currentLecture)}>
//                             {this.state.currentLectureAction}
//                           </button> */}
//                         </div>
//                       </div>
//                       <div className="goLive-body">
//                         <p className="next-lecture">Next Lecture</p>
//                         <a>See All</a>
//                       </div>
//                       <div className="goLive-footer">
//                         {this.state.nextLecture.map((lecture, i) => (
//                           <NextLecture key={i} lecturesData={lecture} />
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="no-lecture">
//                       <img src={NoLecture} alt="" className="nolec-img" />
//                       <div className="nolec-content">
//                         There is no ongoing lecture right now, <span>keep studying!</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </Grid>
//               <Hidden mdUp>
//                 <Grid item xs={12}>
//                   <div className="noticeBoard-section">
//                     <div className="whiteBox">
//                       <div className="noticeBoard-header">
//                         <div className="title">
//                           <h3>Notice Board</h3>
//                         </div>
//                         <div className="noticeBoard-subHeader">
//                           <div className="tab active">
//                             <AccountBalanceIcon className="noticeBoard-icon" />
//                             Institute
//                           </div>
//                           <div className="tab">
//                             <img src={GroupPeople} alt="" className="noticeBoard-icon" />
//                             Classroom
//                           </div>
//                         </div>
//                       </div>
//                       <div className="noticeBoard-body">
//                         <div className="institute-tab">
//                           {this.state.announcements.length > 0 ? (
//                             this.state.announcements.map((announcement, i) => (
//                               <Announcement key={i} announcementData={announcement} />
//                             ))
//                           ) : (
//                             <div className="no-announcements">
//                               <img src={NoAnnouncements} alt="" className="no-announcement-img" />
//                               <div className="no-announcement-content">No announcements or notice as of now.</div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Grid>
//               </Hidden>
//               <Grid item xs={12} sm={12} md={4} lg={4}>
//                 <div className="subject-section">
//                   <div className="whiteBox">
//                     <div className="subject-header">
//                       <h3>My Subjects</h3>
//                     </div>
//                     <div className="subject-body-container"> 
//                       {this.state.mySubject.map((subject, i) => (
//                         <SubjectBook
//                           key={i}
//                           style={{
//                             margin: "10px 15px",
//                             width: "78.6px",
//                             height: "93.4px",
//                             display: "inline-flex",
//                           }}
//                           onClick={() => this.props.navigate(4,{subject})}
//                           name={subject.classroom_subjects.subjects.name}
//                           standard={subject.classroom_subjects.subjects.standard}
//                           section={subject.classroom_subjects.section}
//                           clickable={true}
//                           graphic={subject.classroom_subjects.subjects.graphics}
//                           color={ColorPalette[subject.classroom_subjects.color_code]}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </Grid>
//               <Hidden mdUp>
//                 {this.state.missedLectures && false?<Grid item xs={12}>
//                   <div className="missed-lecture">
//                     <div className="slider-content">
//                       <div className="title">Missed Lecture</div>
//                       {this.state.missedLectures.map((lecture,i)=>(
//                         this.state.missedLectureSlider === i ? (
//                           <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                               <div className="subject-details">
//                                 <p>{lecture.classroom_subjects.subjects.name}</p>
//                                 <div className="time">45:00</div>
//                               </div>
//                               <div className="staff-name">{lecture.teacher.user.name}55555</div>
//                             </Grid>
//                             <Grid item xs={6}>
//                               <div className="right-side">
//                                 <div className="teacher-img">
//                                   <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                                 </div>
//                               </div>
//                             </Grid>
//                           </Grid>
//                         ) : null
//                       ))}
//                       {/* {this.state.missedLectureSlider === 0 ? (
//                         <Grid container spacing={2}>
//                           <Grid item xs={6}>
//                             <div className="subject-details">
//                               <p>Math</p>
//                               <div className="time">45:00</div>
//                             </div>
//                             <div className="staff-name">Miss Afreen Shaikh</div>
//                           </Grid>
//                           <Grid item xs={6}>
//                             <div className="right-side">
//                               <div className="teacher-img">
//                                 <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                               </div>
//                             </div>
//                           </Grid>
//                         </Grid>
//                       ) : null} */}
//                       {/* {this.state.missedLectureSlider === 1 ? (
//                         <Grid container spacing={2}>
//                           <Grid item xs={6}>
//                             <div className="subject-details">
//                               <p>Physics</p>
//                               <div className="time">35:00</div>
//                             </div>
//                             <div className="staff-name">Mr. Zeeshan</div>
//                           </Grid>
//                           <Grid item xs={6}>
//                             <div className="right-side">
//                               <div className="teacher-img">
//                                 <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                               </div>
//                             </div>
//                           </Grid>
//                         </Grid>
//                       ) : null}
//                       {this.state.missedLectureSlider === 2 ? (
//                         <Grid container spacing={2}>
//                           <Grid item xs={6}>
//                             <div className="subject-details">
//                               <p>Biology</p>
//                               <div className="time">25:00</div>
//                             </div>
//                             <div className="staff-name">Miss Pallavi</div>
//                           </Grid>
//                           <Grid item xs={6}>
//                             <div className="right-side">
//                               <div className="teacher-img">
//                                 <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                               </div>
//                             </div>
//                           </Grid>
//                         </Grid>
//                       ) : null} */}
//                     </div>
//                     <div className="slider-icon">
//                       <div
//                         className={this.state.missedLectureSlider === 0 ? "circle active" : "circle"}
//                         onClick={() => this.changeSlider(0)}
//                       ></div>
//                       <div
//                         className={this.state.missedLectureSlider === 1 ? "circle active" : "circle"}
//                         onClick={() => this.changeSlider(1)}
//                       ></div>
//                       <div
//                         className={this.state.missedLectureSlider === 2 ? "circle active" : "circle"}
//                         onClick={() => this.changeSlider(2)}
//                       ></div>
//                     </div>
//                   </div>
//                 </Grid>:null}
//                 <Grid item xs={6}>
//                   <div className="your-attendance">
//                     <div>
//                       <figure className="pie-chart">
//                         <svg className="chart">
//                           <circle r="35" cx="40" cy="40" className="pie track" />
//                           <circle
//                             r="35"
//                             cx="40"
//                             cy="40"
//                             style={{
//                               strokeDasharray: this.state.attendancePieChartValue + ", 219.8",
//                             }}
//                             stroke="url(#cl1)"
//                             className="pie"
//                           />
//                           <defs>
//                             <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
//                               <stop stopColor="#185a9d" />
//                               <stop offset="100%" stopColor="#43cea2" />
//                             </linearGradient>
//                           </defs>
//                           <text
//                             x="50%"
//                             y="50%"
//                             textAnchor="middle"
//                             stroke="#29396d"
//                             strokeWidth="1px"
//                             dy=".3em"
//                             transform="translate(80,0) rotate(90)"
//                           >
//                             {this.state.attendancePercent}%
//                           </text>
//                         </svg>
//                       </figure>
//                     </div>
//                     <div>
//                       <div className="title">Your Attendance</div>
//                       <p>This year</p>
//                     </div>
//                   </div>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <div className="whiteBox">
//                     <div className="quizz">
//                       <div>
//                         <figure className="pie-chart">
//                           <circle r="35" cx="40" cy="40" className="pie track" />
//                           <svg className="chart">
//                             <circle
//                               r="35"
//                               cx="40"
//                               cy="40"
//                               style={{
//                                 strokeDasharray: this.state.quizzPieChartValue + ", 219.8",
//                               }}
//                               stroke="#29396d"
//                               className="pie"
//                             />
//                             <text
//                               x="50%"
//                               y="50%"
//                               textAnchor="middle"
//                               stroke="#29396d"
//                               strokeWidth="1px"
//                               dy=".3em"
//                               transform="translate(80,0) rotate(90)"
//                             >
//                               {this.state.quizzPercent}%
//                             </text>
//                           </svg>
//                         </figure>
//                       </div>
//                       <div>
//                         <div className="title">Quizz</div>
//                         <div className="quizz-subSection">
//                           <ChevronLeftIcon className="arrow-icons" />
//                           <div className="content">Math</div>
//                           <ChevronRightIcon className="arrow-icons" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Grid>
//               </Hidden>
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <div className="whiteBox">
//                   <div className="chart-section">
//                     <div className="chart-header">
//                       <div className="title">Attendance summary per subject</div>
//                       <div>
//                         <select>
//                           <option>This year</option>
//                           <option>That</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="chart-body">
//                       <Grid container spacing={2}>
//                         <Grid item xs={12} sm={12} md={9} lg={9}>
//                           <svg className="bar-graph" aria-labelledby="title" role="img">
//                             <g className="grid" id="yGrid">
//                               <line x1="75" x2="705" y1="300" y2="300"></line>
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="260"
//                                 y2="260"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="220"
//                                 y2="220"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="180"
//                                 y2="180"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="140"
//                                 y2="140"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="100"
//                                 y2="100"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g>
//                               <line
//                                 x1="75"
//                                 x2="705"
//                                 y1="60"
//                                 y2="60"
//                                 stroke="#ccd8ff"
//                                 strokeWidth="1"
//                                 strokeLinecap="butt"
//                                 strokeDasharray="10"
//                               />
//                             </g>
//                             <g className="labels x-labels">
//                               {this.state.subjectAttendance.map((subject, i) => (
//                                 <text x={100 + i * 75} y="340" key={i}>
//                                   {subject.subject}
//                                 </text>
//                               ))}
//                             </g>
//                             <g className="labels y-labels">
//                               <text x="25" y="40">
//                                 100%
//                               </text>
//                               <text x="25" y="90">
//                                 80%
//                               </text>
//                               <text x="25" y="140">
//                                 60%
//                               </text>
//                               <text x="25" y="190">
//                                 40%
//                               </text>
//                               <text x="25" y="240">
//                                 20%
//                               </text>
//                               <text x="25" y="290">
//                                 0%
//                               </text>
//                             </g>
//                             {this.state.subjectAttendance.map((subject, i) => (
//                               <g className="bar " style={{ stroke: ColorPalette[0 + i] }}>
//                                 <line
//                                   x1={110 + i * 75}
//                                   x2={110 + i * 75}
//                                   y1={295 - subject.percentage / 3}
//                                   y2="295"
//                                   strokeLinecap="round"
//                                 />
//                                 <line
//                                   x1={110 + i * 75}
//                                   x2={110 + i * 75}
//                                   y1={300 - subject.percentage / 3}
//                                   y2="300"
//                                   strokeLinecap="butt"
//                                 />
//                               </g>
//                             ))}
//                           </svg>
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={3} lg={3}>
//                           <div className="status">
//                             <div className="attendanceMsg">{this.attendanceMessage}</div>
//                             <figure className="pie-chart">
//                               <svg className="chart">
//                                 <circle r="35" cx="40" cy="40" className="pie track" />
//                                 <circle
//                                   r="35"
//                                   cx="40"
//                                   cy="40"
//                                   style={{
//                                     strokeDasharray: this.state.attendancePieChartValue + ", 219.8",
//                                   }}
//                                   stroke="url(#cl1)"
//                                   className="pie"
//                                 />
//                                 <defs>
//                                   <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
//                                     <stop stopColor="#185a9d" />
//                                     <stop offset="100%" stopColor="#43cea2" />
//                                   </linearGradient>
//                                 </defs>
//                                 <text
//                                   x="50%"
//                                   y="50%"
//                                   textAnchor="middle"
//                                   stroke="#29396d"
//                                   strokeWidth="1px"
//                                   dy=".3em"
//                                   transform="translate(80,0) rotate(90)"
//                                 >
//                                   {this.state.attendancePercent}%
//                                 </text>
//                               </svg>
//                             </figure>
//                           </div>
//                         </Grid>
//                       </Grid>
//                     </div>
//                   </div>
//                 </div>
//               </Grid>
//               <Hidden smDown>
//                 <Grid item xs={12} sm={12} md={6} lg={6}>
//                   <div className="noticeBoard-section">
//                     <div className="whiteBox">
//                       <div className="noticeBoard-header">
//                         <div className="title">
//                           <h3>Notice Board</h3>
//                         </div>
//                         <div className="noticeBoard-subHeader">
//                           <div className="tab active">
//                             <AccountBalanceIcon className="noticeBoard-icon" />
//                             Institute
//                           </div>
//                           <div className="tab">
//                             <img src={GroupPeople} alt="" className="noticeBoard-icon" />
//                             Classroom
//                           </div>
//                         </div>
//                       </div>
//                       <div className="noticeBoard-body">
//                         <div className="institute-tab">
//                           {this.state.announcements.length > 0 ? (
//                             this.state.announcements.map((announcement, i) => (
//                               <Announcement key={i} announcementData={announcement} />
//                             ))
//                           ) : (
//                             <div className="no-announcements">
//                               <img src={NoAnnouncements} alt="" className="no-announcement-img" />
//                               <div className="no-announcement-content">No announcements or notice as of now.</div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Grid>
//               </Hidden>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <div className="whiteBox">
//                   <div className="activity-section">
//                     <div className="activity-header">
//                       <h3>Activity Log</h3>
//                       <a>See All</a>
//                     </div>
//                     <div className="activity-body">
//                       <div className="timeLine">
//                         {this.state.activityLog.map((activities, i) => (
//                           <Activity key={i} activityData={activities} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Hidden smDown>
//             <Grid item xs={12} sm={12} md={3} lg={3}>
//               <div className="side-section">
//                 {this.state.missedLectures.length > 0?
//                 <div className="missed-lecture">
//                   <div className="slider-content">
//                     <div className="title">Missed Lecture</div>                    

//                       {this.state.missedLectures.map((lecture,i)=>(
//                         this.state.missedLectureSlider === i ? (
//                           <div className="clickable" onClick={()=>this.props.goToClass(lecture)}>
//                             <Grid  container spacing={2}>
//                               <Grid item xs={6}>
//                                 <div className="subject-details">
//                                   <p>{lecture.classroom_subjects.subjects.name}</p>
//                                   <div className="time">45:00</div>
//                                 </div>
//                                 <div className="staff-name">{lecture.teacher.user.name}</div>
//                               </Grid>
//                               <Grid item xs={6}>
//                                 <div className="right-side">
//                                   <div className="teacher-img">
//                                     <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                                   </div>
//                                 </div>
//                               </Grid>
//                             </Grid>
//                           </div>
//                         ) : null
//                       ))}
//                     {/* {this.state.missedLectureSlider === 0 ? (
//                       <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                           <div className="subject-details">
//                             <p>Math</p>
//                             <div className="time">45:00</div>
//                           </div>
//                           <div className="staff-name">Miss Afreen Shaikh</div>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <div className="right-side">
//                             <div className="teacher-img">
//                               <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                             </div>
//                           </div>
//                         </Grid>
//                       </Grid>
//                     ) : null}
//                     {this.state.missedLectureSlider === 1 ? (
//                       <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                           <div className="subject-details">
//                             <p>Physics</p>
//                             <div className="time">35:00</div>
//                           </div>
//                           <div className="staff-name">Mr. Zeeshan</div>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <div className="right-side">
//                             <div className="teacher-img">
//                               <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                             </div>
//                           </div>
//                         </Grid>
//                       </Grid>
//                     ) : null}
//                     {this.state.missedLectureSlider === 2 ? (
//                       <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                           <div className="subject-details">
//                             <p>Biology</p>
//                             <div className="time">25:00</div>
//                           </div>
//                           <div className="staff-name">Miss Pallavi</div>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <div className="right-side">
//                             <div className="teacher-img">
//                               <img src="https://source.unsplash.com/yQ9mZzBdDAM" alt="" />
//                             </div>
//                           </div>
//                         </Grid>
//                       </Grid>
//                     ) : null} */}
//                   </div>
//                   <div className="slider-icon">
//                     <div
//                       className={this.state.missedLectureSlider === 0 ? "circle active" : "circle"}
//                       onClick={() => this.changeSlider(0)}
//                     ></div>
//                     <div
//                       className={this.state.missedLectureSlider === 1 ? "circle active" : "circle"}
//                       onClick={() => this.changeSlider(1)}
//                     ></div>
//                     <div
//                       className={this.state.missedLectureSlider === 2 ? "circle active" : "circle"}
//                       onClick={() => this.changeSlider(2)}
//                     ></div>
//                   </div>
//                 </div>:null}
//                 <div className="your-attendance">
//                   <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                       <div className="title">Your Attendance</div>
//                       <p>This year</p>
//                       <div className="value">{this.state.attendancePercent}%</div>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <figure className="pie-chart">
//                         <svg className="chart">
//                           <circle r="35" cx="40" cy="40" className="pie track" />
//                           <circle
//                             r="35"
//                             cx="40"
//                             cy="40"
//                             style={{
//                               strokeDasharray: this.state.attendancePieChartValue + ", 219.8",
//                             }}
//                             stroke="url(#cl1)"
//                             className="pie"
//                           />
//                           <defs>
//                             <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
//                               <stop stopColor="#185a9d" />
//                               <stop offset="100%" stopColor="#43cea2" />
//                             </linearGradient>
//                           </defs>
//                           <text
//                             x="50%"
//                             y="50%"
//                             textAnchor="middle"
//                             stroke="#29396d"
//                             strokeWidth="1px"
//                             dy=".3em"
//                             transform="translate(80,0) rotate(90)"
//                           >
//                             {this.state.attendancePercent}%
//                           </text>
//                         </svg>
//                       </figure>
//                     </Grid>
//                   </Grid>
//                 </div>
//                 <div className="whiteBox">
//                   <div className="quizz">
//                     <div className="title">Quizz</div>
//                     <Grid container spacing={2} alignItems="center">
//                       <Grid item xs={6}>
//                         <div className="quizz-subSection">
//                           <ChevronLeftIcon className="arrow-icons" />
//                           <div className="content">Math</div>
//                           <ChevronRightIcon className="arrow-icons" />
//                         </div>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <figure className="pie-chart">
//                           <svg className="chart">
//                             <circle r="35" cx="40" cy="40" className="pie track" />
//                             <circle
//                               r="35"
//                               cx="40"
//                               cy="40"
//                               style={{
//                                 strokeDasharray: this.state.quizzPieChartValue + ", 219.8",
//                               }}
//                               stroke="#29396d"
//                               className="pie"
//                             />
//                             <text
//                               x="50%"
//                               y="50%"
//                               textAnchor="middle"
//                               stroke="#29396d"
//                               strokeWidth="1px"
//                               dy=".3em"
//                               transform="translate(80,0) rotate(90)"
//                             >
//                               {this.state.quizzPercent}%
//                             </text>
//                           </svg>
//                         </figure>
//                       </Grid>
//                     </Grid>
//                   </div>
//                 </div>
//                 <div className="whiteBox">
//                   <div className="calendar-design">
//                     <div className="calendar-header">
//                       <ChevronLeftRoundedIcon className="leftIcon icon" onClick={() => this.calendar("prev")} />
//                       <span className="month">{this.state.calendarMonth.date(1).format("MMMM YYYY")}</span>
//                       <ChevronRightRoundedIcon className="rightIcon icon" onClick={() => this.calendar("next")} />
//                     </div>
//                     <div className="calendar-display">
//                       <div className="calendar-body calendar-title">
//                         <div className="calendar-content">S</div>
//                         <div className="calendar-content">M</div>
//                         <div className="calendar-content">T</div>
//                         <div className="calendar-content">W</div>
//                         <div className="calendar-content">T</div>
//                         <div className="calendar-content">F</div>
//                         <div className="calendar-content">S</div>
//                       </div>
//                       {this.state.calendar.map((item, i) => {
//                         return <Calendar key={i} item={item} />;
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Grid>
//           </Hidden>
//         </Grid>
//       </div>
//     );
//   }
// }



class NextLecture extends Component {
  state = {};
  render() {
    return (
      <View style={styles.row}>
        <Text style={{ fontSize: Sizes.fiften, color: MainColorPalette.primary_b, fontFamily: "NunitoSans" }}>
          {this.props.lecturesData.classroom_subjects.subject.name}
        </Text>
        <Text style={{ fontSize: Sizes.fiften, color: MainColorPalette.primary_b, fontFamily: "NunitoSans" }}>
          {this.props.lecturesData.teacher.user.name}
        </Text>
        <View style={styles.row}>
          <MaterialCommunityIcons name="timer-outline" color={MainColorPalette.primary_b} size={Sizes.padding} />
          <Text style={{ color: MainColorPalette.primary_b, paddingHorizontal: 2 }}>
            {UtilityServices.formatTimeFrom(this.props.lecturesData.start_time)}
          </Text>
          <Text style={{ color: MainColorPalette.primary_b }}>
            3.23pm  {/* {UtilityServices.formatTimeFrom(this.currentLecture.end_time)} */}
          </Text>
        </View>
      </View>
    );
  }
}

// class Announcement extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="border-box">
//         <div className="tab-header">
//           <div className="info">
//             <img src={FemaleProfile} alt="" width="39px" height="39px" className="profileImage" />
//             <div>
//               <div className="details">
//                 <h5>
//                   {this.props.announcementData.admins.user.name} {this.props.announcementData.admins.user.lastname}
//                 </h5>
//                 <span>Teacher</span>
//               </div>
//               <div className="date-time">
//                 <h5>{moment(this.props.announcementData.createdAt).format("	D MMMM [at] H:m a")}</h5>
//                 <FiberManualRecordIcon className="dot-icon" />
//                 <PeopleIcon className="people-icon" />
//               </div>
//             </div>
//           </div>
//           <MoreHorizIcon />
//         </div>
//         <div className="tab-body">
//           <p>{this.props.announcementData.description}</p>
//         </div>
//         {this.props.announcementData.image ? (
//           <div className="tab-footer">
//             <img src={HOST + "/" + API + "/notice-post/image/" + this.props.announcementData.image} className="tab-img" alt="" />
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// class Activity extends Component {
//   state = {};
//   render() {
//     const activityColor =
//       this.props.activityData.activity === SIGN_IN ? "green" : this.props.activityData.activity === SIGN_OUT ? "red" : "blue";

//     return (
//       <div className="content">
//         <h3 className={activityColor}>{this.props.activityData.activity}</h3>
//         <div className="subContent">
//           <TimerIcon className="timerIcon" />
//           <p className="date">{moment(this.props.activityData.createdAt).format("ddd, Do MMM")}</p>
//           <h6 className="time">{moment(this.props.activityData.createdAt).format("h:mm A")}</h6>
//         </div>
//       </div>
//     );
//   }
// }

// class Calendar extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="calendar-body">
//         <div className={"calendar-content " + this.props.item.days[0][1]}>{this.props.item.days[0][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[1][1]}>{this.props.item.days[1][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[2][1]}>{this.props.item.days[2][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[3][1]}>{this.props.item.days[3][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[4][1]}>{this.props.item.days[4][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[5][1]}>{this.props.item.days[5][0]}</div>
//         <div className={"calendar-content " + this.props.item.days[6][1]}>{this.props.item.days[6][0]}</div>
//       </div>
//     );
//   }
// }
// -----------------------------------dummy data----------------------------------------------------