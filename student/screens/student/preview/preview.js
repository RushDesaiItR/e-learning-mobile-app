// import React, { Component } from "react";
// import "./preview.scss";
// import VideocamIcon from "@material-ui/icons/Videocam";
// import MicIcon from "@material-ui/icons/Mic";
// import TimerIcon from "@material-ui/icons/Timer";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import CheckIcon from "@material-ui/icons/Check";
// import FemaleProfile from "../../../../src/assets/img/female-profile.png";
 import { checkInBetween, formatTimeFrom } from "../../../services/util.services";
// import { ColorPalette } from "../../../styles/colorPalette";
// import SubjectBook from "../../../components/SubjectBook/SubjectBook";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
// import LoadingModal from "../../../components/LoadingModal/LoadingModal";
// import DaxtaButton from "../../../components/DaxtaButton/DaxtaButton";
// // import AuthServices from "../../../../services/auth.services";

// class Preview extends Component {
//   state = {
//     view: 0,
//     localStream: null,
//     mute: false,
//     video: true,
//     shareScreen: false,
//     buttonText: "Waiting",
//     instruction: 'Waiting',
//     joinable: false,
//     classData: this.props.classData,
//     percentValue: 0,
//     pieChartValue: 0,
//     loading:false
//   };

//   constructor(props) {
//     super(props);
//     this.classData = this.props.classData;
//     this.color = ColorPalette[this.state.classData.classroom_subjects.color_code];
//     this.teacherUser = { name: "", lastname: "", thumbnail_url: null, gender: "female", email: "" };
//     // this.video = React.createRef();
//   }

//   async componentDidMount() {
//     if (this.classData.actual_end) {
//       this.setState({ view: 1 });
//     }
//     // const teacherUser = await AuthServices.getUserInfoByUserId(this.classData.teacher.user_id);
//     // this.teacherUser = this.classData.teacher.user
//     // console.log(teacherUser)
//     console.log(this.classData);
//     this.checkClassStatus(this.classData);

//     let studentAttendance = 70;
//     this.setPieChartValue(studentAttendance);
//     this.forceUpdate();
//   }

//   setPieChartValue = (value) => {
//     let ans = (value * 138.16) / 100;
//     this.setState({ percentValue: value, pieChartValue: ans });
//   };

//   checkClassStatus() {
//     if (this.state.classData.actual_start === null && this.state.classData.actual_end === null) {
//       if (checkInBetween(this.state.classData.start_time, this.state.classData.end_time)) {
//         this.setState({ buttonText: "WAITING ...", joinable: false,instruction: 'This lecture hasn’t started yet.' });
//       }
//     } else if (this.state.classData.actual_start !== null && this.state.classData.actual_end === null) {
//       this.setState({ buttonText: "JOIN NOW", joinable: true, instruction: 'This lecture is in progress.' });
//     } else {
//       this.setState({ joinable: false });
//     }
//   }

//   join = () => {
//     const preset = {
//       mic: !this.state.mute,
//       video: this.state.video,
//       screenShare: this.state.shareScreen,
//     };
//     this.props.goToWebinar(this.classData, preset);
//   };

//   render() {
//     return (
//       <>
//       <LoadingModal stopLoading={this.state.loading} />
//         <div className="studentPreview">
//           {this.state.view === 0 ? (
//             <div className="preView-section">
//               <div className="view-one">
//                 <div className="whiteBox">
//                   <div className="box-one">
//                     <div className="header">
//                       <h3>Ready to Join?</h3>
//                       <span>{this.state.instruction}</span>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <div className="img-box">
//                         {/* <div className="name">Anwita Singh</div>
//                         <div className="icon-block">
//                           <VideocamIcon className="icon" />
//                           <MicIcon className="icon" />
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="view-two">
//                 <div className="whiteBox">
//                   <div className="box-two">
//                     <div className="box pink" style={{ borderColor: this.color }}>
//                       <div className="header">
//                         <div className="title">
//                           <img src="" alt="" />
//                           <h3>{this.classData.classroom_subjects.subjects.name}</h3>
//                         </div>
//                         <p>
//                           Lecture Num : <span>006</span>
//                         </p>
//                         <div className="center">
//                           {/* <SubjectBook 
//                         style={{height:'100px'}} 
//                         name={this.state.classData.classroom_subjects.subjects.name} 

//                         clickable={false} 
//                         color={this.color} 
//                       /> */}
//                         </div>

//                         <div className="time-block">
//                           <TimerIcon className="time-icon" />
//                           <div className="time-sec">{"Starting at "}</div>
//                           <div className="time-min">{formatTimeFrom(this.state.classData.start_time)}</div>
//                           {/* <div className="time-min">00 Min</div>
//                         <div className="time-sec">50 Seconds</div> */}
//                         </div>
//                       </div>
//                       {/* <div className="body">
//                       <div className="title">Topic :</div>
//                       <div className="subTitle">Basic Algebra</div>
//                       <div className="content">
//                         1. Preliminaries about the Integers…<span>More</span>
//                       </div>
//                     </div> */}
//                       <div className="footer">
//                         <div className="teacher-box">
//                           <img
//                             src={this.teacherUser.thumbnail_url ? this.teacherUser.thumbnail_url : FemaleProfile}
//                             style={{ borderRadius: "50%" }}
//                             alt=""
//                             className="profile-img"
//                           />
//                           <div className="details">
//                             <div className="key">Name:</div>
//                             <div className="key">User ID:</div>
//                             <div className="key">Email ID:</div>
//                           </div>
//                           <div className="details">
//                             <div className="value">
//                               {this.teacherUser.gender === "male" ? "Mr." : "Miss"}{" "}
//                               {this.teacherUser.name + " " + this.state.classData.teacher.user.name}
//                             </div>
//                             <div className="value">{this.state.classData.teacher.username}</div>
//                             <div className="value">
//                               <a href={"mailto:" + this.state.classData.teacher.user.email}>{this.state.classData.teacher.user.email}</a>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="button-block">
//                           {this.state.view === 0 ? (
//                             <DaxtaButton icon={<PlayCircleOutlineIcon/>} content={this.state.buttonText} disabled={!this.state.joinable} onClick={() => this.join()} />
//                             // <button
//                             //   className={`daxta-button ${!this.state.joinable ? "button-disabled" : ""}`}
//                             //   disabled={!this.state.joinable}
//                             //   onClick={() => this.join()}
//                             // >
//                             //   <PlayCircleOutlineIcon className="button-icon" />
//                             //   {this.state.buttonText}
//                             // </button>
//                           ) : null}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="whiteBox">
//               <div className="postView-section">
//                 <div className="postView-title">
//                   Your {this.state.classData.classroom_subjects.subjects.name} lecture has ended.
//                 </div>
//                 <div className="postView-subtitle">
//                   <TimerIcon className="timer-icon" />
//                   <div className="time-value">
//                     {formatTimeFrom(this.state.classData.actual_start) + " " + formatTimeFrom(this.state.classData.actual_end)}
//                   </div>
//                 </div>
//                 <div className="postView-main">
//                   <div className="main-one">
//                     <div className="play-now-card">
//                       <div className="card-block" style={{ backgroundColor: this.color }}>
//                         <div className="details">
//                           <div className="time">45:00</div>
//                           <div className="subject">{this.classData.classroom_subjects.subjects.name}</div>
//                           <div className="name">
//                             {this.teacherUser.gender === "male" ? "Mr." : "Miss"}{" "}
//                             {this.teacherUser.name + " " + this.teacherUser.lastname}
//                           </div>
//                         </div>
//                         <img
//                           src={this.teacherUser.thumbnail_url ? this.teacherUser.thumbnail_url : FemaleProfile}
//                           alt=""
//                           className="teacher-img"
//                         />
//                       </div>
//                       {/* <div className="play-now-overlay">
//                         <PlayCircleOutlineIcon className="play-now-icon" />
//                         <div className="play-now-text">Play Now</div>
//                       </div> */}
//                     </div>
//                   </div>
//                   <div className="main-two">
//                     <div className="details-box">
//                       <div className="header-book">
//                         <SubjectBook
//                           style={{ height: "87px" }}
//                           name={this.state.classData.classroom_subjects.subjects.name}
//                           clickable={false}
//                           color={this.color}
//                         />
//                       </div>
//                       <div className="body">
//                         <CheckIcon className="tick-icon" />
//                         <p>You have successfully attended this lecture.</p>
//                       </div>
//                       <div className="footer">
//                         <div className="quiz">
//                           <div className="heading">Quiz:</div>
//                           <div className="value">
//                             4/<span>5</span>
//                           </div>
//                         </div>
//                         <figure className="pie-chart">
//                           <svg className="chart">
//                             <circle r="22" cx="26" cy="26" className="pie track" />
//                             <circle
//                               r="22"
//                               cx="26"
//                               cy="26"
//                               style={{
//                                 strokeDasharray: this.state.pieChartValue + ", 138.16",
//                               }}
//                               stroke="url(#cl1)"
//                               className="pie"
//                             />
//                             <defs>
//                               <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
//                                 <stop stopColor="#185a9d" />
//                                 <stop offset="100%" stopColor="#43cea2" />
//                               </linearGradient>
//                             </defs>
//                             <text x="50%" y="-50%" dy=".3em" className="text">
//                               {this.state.percentValue}%
//                             </text>
//                           </svg>
//                         </figure>
//                         <div className="your-attendance">Your Attendance</div>
//                       </div>
//                       <div className="teacher-details">
//                         <img
//                           src={this.teacherUser.thumbnail_url ? this.teacherUser.thumbnail_url : FemaleProfile}
//                           style={{ borderRadius: "50%" }}
//                           alt=""
//                           className="profile-img"
//                         />
//                         <div className="details">
//                           <div className="key">Name:</div>
//                           <div className="key">User ID:</div>
//                           <div className="key">Email ID:</div>
//                         </div>
//                         <div className="details">
//                           <div className="value">
//                             {this.teacherUser.gender === "male" ? "Mr." : "Miss"}{" "}
//                             {this.teacherUser.name + " " + this.teacherUser.lastname}
//                           </div>
//                           <div className="value">{this.classData.teacher.username}</div>
//                           <div className="value">
//                             <a href={"mailto:" + this.teacherUser.email}>{this.teacherUser.email}</a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="footer-next-lecture">
//                       <AccessTimeIcon className="next-lec-timer-icon" />
//                       <div className="next-lec-time">
//                         {" "}
//                         00 Min <span className="active">55</span> Sec
//                       </div>
//                       <div className="next-lec-preview">Preview next lecture</div>
//                       <DoubleArrowIcon className="next-lec-arrow-icon" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </>
//     );
//   }
// }

// export default Preview;

// -------------------------dummy-----------------------------------------------------------

import React, { Component } from "react";
import  AuthServices from "../../../services/auth.services";
import { socket } from '../../../services/socket'
import { MainColorPalette, ColorPalette } from "../../../styles/colorPalette"
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, BackgroundImage, ImageBackground } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ReadyToJoinJpg from "../../../assets/img/preview/ready-to-join.jpg"
import ReadyToJoinJpg2 from "../../../assets/img/classroom-graphic.png"
import { Sizes } from "../../../styles/sizes"
import SvgUri from "react-native-svg-uri"
import SvgData from "../../../assets/icons/board.svg"
// import VideocamIcon from "@material-ui/icons/Videocam";
// import MicIcon from "@material-ui/icons/Mic";
// import TimerIcon from "@material-ui/icons/Timer";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import CheckIcon from "@material-ui/icons/Check";
 import FemaleProfile from "../../../assets/img/female-profile.png";
// import { checkInBetween, formatTimeFrom } from "../../../services/util.services";
// import { ColorPalette } from "../../../styles/colorPalette";
// import SubjectBook from "../../../components/SubjectBook/SubjectBook";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
// import LoadingModal from "../../../components/LoadingModal/LoadingModal";
// import DaxtaButton from "../../../components/DaxtaButton/DaxtaButton";

// // import AuthServices from "../../../../services/auth.services";
class Preview extends Component {
    state = {
        view: 0,
        localStream: null,
        mute: false,
        video: true,
        shareScreen: false,
        buttonText: "Waiting",
        instruction: 'Waiting',
        joinable: false,
        classData: this.props.classData,
        percentValue: 0,
        pieChartValue: 0,
        loading:false
      };
      socket = socket
      constructor(props) {
        super(props);
        // this.state.classData = this.props.classData;
        this.color = ColorPalette[this.state.classData.classroom_subjects.color_code];
        this.teacherUser = { name: "", lastname: "", thumbnail_url: null, gender: "female", email: "" };
        // this.video = React.createRef();
      }
    
      async componentDidMount() {
        await this.updateClassData()
        if (this.state.classData.actual_end) {
          this.setState({ view: 1 });
        }
        this.setUpSockets()
        // const teacherUser = await AuthServices.getUserInfoByUserId(this.state.classData.teacher.user_id);
        // this.teacherUser = this.state.classData.teacher.user
        // console.log(teacherUser)
        console.log(this.state.classData);
        this.checkClassStatus(this.state.classData);
    
        let studentAttendance = 70;
        this.setPieChartValue(studentAttendance);
        this.forceUpdate();
      }
    
      async updateClassData() {
        this.setState({ loading: true });
        const data = await AuthServices.getClassInfo(this.state.classData.id);
        console.log("cd", data);
        if (data.success) {
          this.setState({ classData: data.classData });
          this.checkClassStatus();
        }
        this.setState({ loading:  false });
        return true;
      }
      setUpSockets=()=>{
        this.socket.on('lecture-started',data=>{
          this.updateClassData()
        })
        this.socket.on('lecture-ended',data=>{
          this.updateClassData()
        })
      }
      setPieChartValue = (value) => {
        let ans = (value * 138.16) / 100;
        this.setState({ percentValue: value, pieChartValue: ans });
      };
    
      checkClassStatus() {
        if (this.state.classData.actual_start === null && this.state.classData.actual_end === null) {
          if (checkInBetween(this.state.classData.start_time, this.state.classData.end_time)) {
            this.setState({ buttonText: "WAITING ...", joinable: false,instruction: 'This lecture hasn’t started yet.' });
          }
        } else if (this.state.classData.actual_start !== null && this.state.classData.actual_end === null) {
          this.setState({ buttonText: "JOIN NOW", joinable: true, instruction: 'This lecture is in progress.' });
        } else {
          this.setState({ joinable: false });
        }
      }
    
      join = () => {
        const preset = {
          mic: !this.state.mute,
          video: this.state.video,
          screenShare: this.state.shareScreen,
        };
        console.log("class Data", this.state.classData);
        this.props.goToWebinar(this.state.classData, preset);
      };
    render() {
       
                       {/* <Text>{this.state.instruction}</Text>
 <Text>{this.state.classData.classroom_subjects.subjects.name}</Text>
<Text>{this.state.classData.classroom_subjects.subjects.name}</Text>

 <Text>{this.teacherUser.gender === "male" ? "Mr." : "Miss"}</Text>
<Text>{this.teacherUser.name + " " + this.state.classData.teacher.user.name}</Text>
<Text>{this.state.classData.teacher.username}</Text>
<Text>{this.state.classData.teacher.user.email}</Text>

 <Text>{this.state.classData.classroom_subjects.subjects.name}</Text>
 
<Text>{this.state.classData.classroom_subjects.subjects.name}</Text>



<Text>{this.teacherUser.thumbnail_url}</Text>
<Text>{this.state.classData.classroom_subjects.subjects.name}</Text>

  <Text>{this.state.percentValue}</Text>

  
<Text>{this.teacherUser.name + " " + this.teacherUser.lastname}</Text>
<Text>{this.state.classData.teacher.username}</Text>
<Text>{this.teacherUser.email}</Text>  */}
  

        return ( 
             <>
                <View style={styles.container}> 
                    {
                        this.state.view === 0 ? (
                            <>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontFamily: "NunitoSans",
                                        color: MainColorPalette.primary_text_color,
                                        textAlign: "center",
                                        fontSize: Sizes.padding
                                    }}>
                                        Ready to Join?
                        </Text>
                                    <Text style={{

                                        fontFamily: "NunitoSans",
                                        color: MainColorPalette.primary_text_color,
                                        textAlign: "center",
                                        fontSize: Sizes.fiften
                                    }}>
                                        {this.state.instruction}
                        </Text>
                                    <Image
                                        source={{ uri: 'https://source.unsplash.com/yQ9mZzBdDAM' }}
                                        style={{ height: "75%", width: "100%", marginTop: Sizes.five }}
                                    />
                                </View>
                                {/* <View style={{marginHorizontal:Sizes.padding}}/> */}
                                <View style={{ flex: 2 }}>
                                    <View style={styles.classBook}>
                                        <View style={[styles.row, { alignItems: "center" }]}>
                                            <SvgUri
                                                height={"20"}
                                                width={"20"}
                                                color={"yellow"}
                                                source={require("../../../assets/icons/cross.svg")}
                                            />
                                            <Text style={{ fontSize: Sizes.padding, fontWeight: "bold", marginLeft: Sizes.padding, color: MainColorPalette.primary_text_color }}>
                                                {this.state.classData.classroom_subjects.subjects.name}
                                            </Text>
                                         
                                        </View>

                                        <View style={[styles.row, { alignItems: "center" }]}>
                                            <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.fiften, color: MainColorPalette.classBlockColor }}>Lecture Num :</Text>
                                            <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.fiften, color: MainColorPalette.primary_text_color }}> 006</Text>
                                        </View>
                                        <View style={[styles.row, , { alignItems: "center", marginTop: Sizes.radius, justifyContent: "space-evenly" }]}>
                                            <MaterialCommunityIcons name="timer-outline" size={Sizes.padding} />
                                            <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.fiften, color: MainColorPalette.classBlockColor, marginHorizontal: Sizes.five }}>{formatTimeFrom(this.state.classData.start_time)}</Text>
                                            <Text style={{ fontFamily: "NunitoSans", color: MainColorPalette.primary_text_color, marginLeft: Sizes.radius, marginHorizontal: Sizes.five }}>50</Text>
                                            <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.fiften, color: MainColorPalette.classBlockColor }}>
                                                Seconds
                               </Text>
                                        </View>
                                        <Text style={{
                                            color: MainColorPalette.green_text,
                                            fontWeight: "600",
                                            fontFamily: "NunitoSans",
                                            fontSize: Sizes.padding,
                                            paddingVertical: Sizes.radius
                                        }}>
                                            Topic
                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: "NunitoSans",
                                                fontSize: Sizes.padding,
                                                color: MainColorPalette.primary_text_color
                                            }}
                                        >
                                           {this.state.classData.classroom_subjects.subjects.name}
                        </Text>
                                        <Text style={{
                                            fontFamily: "NunitoSans",
                                            fontSize: Sizes.fiften,
                                            color: MainColorPalette.classBlockColor
                                        }}>
                                            1. Preliminaries about the Integers...
                        </Text>
                                        <View style={[styles.classBookCard]}>
                                            <View style={[styles.row, { justifyContent: "space-between" }]}>

                                               {
                                                   this.teacherUser.thumbnail_url ? 
                                                   <Image
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        borderRadius: 100 / 2,
                                                        borderWidth: 2,
                                                        borderColor: 'red'
                                                    }}
                                                    source={{ uri: this.teacherUser.thumbnail_url }}
                                                    resizeMode="cover" />
                                                    :
                                                    <Image
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        borderRadius: 100 / 2,
                                                        borderWidth: 2,
                                                        borderColor: 'red'
                                                    }}
                                                    source={ReadyToJoinJpg2}
                                                    resizeMode="cover" />
                                               }


                                                <View style={[styles.row, { justifyContent: "space-evenly" }]}>
                                                    <View style={styles.columnTwo}>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12
                                                        }}>
                                                            Name:
                                    </Text>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12
                                                        }}>
                                                            User ID:
                                    </Text>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12
                                                        }}>
                                                            Email ID:
                                    </Text>
                                                    </View>
                                                    <View style={styles.columnTwo}>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12
                                                        }}>
                                                            {this.teacherUser.name + " " + this.state.classData.teacher.user.name}
                                    </Text>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12
                                                        }}>
                                                            {this.state.classData.teacher.username}
                                    </Text>
                                                        <Text style={{
                                                            fontFamily: "NunitoSans",
                                                            fontWeight: "bold",
                                                            color: MainColorPalette.primary_text_color,
                                                            fontSize: 12,
                                                            textDecorationLine: "underline",
                                                            textDecorationStyle: "solid",
                                                            textDecorationColor: MainColorPalette.primary_b,
                                                           
                                                        }}>
                                                             {this.state.classData.teacher.user_email}
                                    </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.joinButton} onPress={() => this.join()}>
                                            <MaterialIcons size={Sizes.padding} color={MainColorPalette.white} name="play-circle-outline" />
                                            <Text
                                                style={{
                                                    fontFamily: "NunitoSans",
                                                    color: MainColorPalette.white,
                                                    fontSize: Sizes.padding,
                                                    marginLeft: Sizes.radius,
                                                }}
                                            >
                                                { this.state.buttonText }
                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )
                            :
                            (
                                <>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{
                                            fontWeight: "600",
                                            fontFamily: "NunitoSans",
                                            color: MainColorPalette.primary_text_color,
                                            textAlign: "center",
                                            fontSize: Sizes.padding
                                        }}>
                                            Your {this.state.classData.classroom_subjects.subjects.name} lecture ended
                        </Text>
                                        <View style={[styles.row, { justifyContent: "center", alignItems: "center", marginTop: Sizes.radius }]}>
                                            <MaterialCommunityIcons name="timer-outline" color={MainColorPalette.green_text} size={Sizes.padding} />
                                            <View style={[styles.row, { marginLeft: Sizes.radius }]}>
                                                <Text style={{ color: MainColorPalette.green_text, fontSize: Sizes.fiften, fontFamily: "NunitoSans" }}>
                                                 {formatTimeFrom(this.state.classData.actual_start)}
                                                </Text>
                                                <Text style={{ color: MainColorPalette.green_text, fontSize: Sizes.fiften, fontFamily: "NunitoSans", marginLeft: Sizes.five }}>
                                                  {formatTimeFrom(this.state.classData.actual_end)} 
                                                </Text>
                                            </View>
                                        </View>
                                        <Image
                                            source={{ uri: 'https://source.unsplash.com/yQ9mZzBdDAM' }}
                                            style={{ height: "70%", width: "100%", marginTop: Sizes.five }}
                                        />
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <View style={styles.classBookTwo}>

                                            <View style={[styles.row,{justifyContent:"space-between", alignItems: "center"}]}>
                                            <SvgUri
                                                height={"20"}
                                                width={"20"}
                                                color={"yellow"}
                                                source={require("../../../assets/icons/cross.svg")}
                                            />
                                                <View style={[styles.column,{marginLeft:Sizes.padding}]}>
                                                    <View style={[styles.row,{  alignItems: "center"}]}>
                                                        <Text style={{
                                                            color:MainColorPalette.green_text,
                                                             fontSize: Sizes.padding,
                                                             fontFamily: "NunitoSans",
                                                             fontWeight:"600",
                                                           
                                                            }}>
                                                                Topic
                                                                </Text>
                                                        <Text style={{fontSize: Sizes.padding, fontFamily:"NunitoSans", marginLeft:Sizes.radius}}>
                                                            Basic Algebra {this.state.classData.classroom_subjects.subjects.name}
                                                        </Text>
                                                    </View>
                                                    <Text style={{color:"#8597aa", fontFamily:"NunitoSans", fontSize:Sizes.fiften}}>
                                                       1. Preliminaries about the Integers…
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={[styles.alertCard,{ 
                                                 backgroundColor:MainColorPalette.white,
                                                 borderWidth:2,
                                                 borderColor:MainColorPalette.green_text, 
                                                 marginTop:Sizes.padding
                                                 }]}>
                                                <MaterialIcons name="check-circle" style={{
                                                    fontSize:Sizes.padding,
                                                    color:MainColorPalette.green_text,
                                                }}/>
                                                <Text style={{fontFamily:"NunitoSans", fontSize:12, color:MainColorPalette.secondary_text_color}}>
                                                   You have successfully attended this lecture.
                                                </Text>
                                            </View>

                                           
                                            <View style={[styles.classBookCard, { backgroundColor: "#a2cec4" }]}>
                                                <View style={[styles.row, { justifyContent: "space-between" }]}>

                                                    <Image
                                                        style={{
                                                            width: 100,
                                                            height: 100,
                                                            borderRadius: 100 / 2,
                                                            borderWidth: 2,
                                                            borderColor: 'red'
                                                        }}
                                                        source={ReadyToJoinJpg2}
                                                        resizeMode="cover" />



                                                    <View style={[styles.row, { justifyContent: "space-evenly" }]}>
                                                        <View style={styles.columnTwo}>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12
                                                            }}>
                                                                Name:
                                    </Text>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12
                                                            }}>
                                                                User ID:
                                    </Text>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12
                                                            }}>
                                                                Email ID:
                                    </Text>
                                                        </View>
                                                        <View style={styles.columnTwo}>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12
                                                            }}>
                                                               {this.teacherUser.gender === "male" ? "Mr." : "Miss"}{" "}
                                                            {this.teacherUser.name + " " + this.teacherUser.lastname}
                                    </Text>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12
                                                            }}>
                                                                  {this.teacherUser.gender === "male" ? "Mr." : "Miss"}{" "}
                                                                   {this.teacherUser.name + " " + this.teacherUser.lastname}
                                    </Text>
                                                            <Text style={{
                                                                fontFamily: "NunitoSans",
                                                                fontWeight: "bold",
                                                                color: MainColorPalette.primary_text_color,
                                                                fontSize: 12,
                                                                textDecorationLine: "underline",
                                                                textDecorationStyle: "solid",
                                                                textDecorationColor: MainColorPalette.primary_b,
                                                                 textDecorationWidth:2
                                                            }}>
                                                               {this.teacherUser.email}
                                    </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                         flexDirection:"row",
                                                          justifyContent: "space-between", 
                                                          alignItems: "center",
                                                           width:"90%",
                                                           marginTop: Sizes.padding
                                                           }}>
                                                  <View>
                                                      <Text style={{fontFamily:"NunitoSans", fontSize:Sizes.padding}}>Quiz</Text>
                                                      <Text style={{fontFamily:"NunitoSans", color:MainColorPalette.green_text,fontSize:Sizes.padding}}>4/5</Text>
                                                  </View>
                                                  <Text>Graph</Text>
                                                  <Text style={{fontFamily:"NunitoSans", color:MainColorPalette.primary_text_color,fontSize:Sizes.fiften}}>Your Attendance</Text>
                                             </View>
                                           
                                        </View>
                                        <View style={[styles.row, { height: Sizes.thirtyFive, justifyContent: "space-evenly", alignItems: "center" }]}>
                                            <View style={[styles.row]}>
                                                <MaterialCommunityIcons size={Sizes.padding} color={MainColorPalette.primary_text_colory} name="timer-outline" />
                                                <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.fiften, color: MainColorPalette.classBlockColor, marginHorizontal: Sizes.five }}>{formatTimeFrom(this.state.classData.start_time)}</Text>
                                            </View>
                                            <View style={[styles.row]}>
                                                <Text style={{ fontFamily: "NunitoSans", color: MainColorPalette.primary_text_color, marginHorizontal: Sizes.five }}>50</Text>
                                                <Text style={{ fontFamily: "NunitoSans", fontSize: Sizes.Padding, color: MainColorPalette.classBlockColor }}>
                                                    Seconds
                            </Text>
                                            </View>


                                            <TouchableOpacity style={[styles.row, { alignItems: "center", justifyContent: "center" }]}>
                                                <Text style={{ color: MainColorPalette.green_text, fontFamily: "NunitoSans",fontSize:Sizes.fiften }}>next lecture</Text>
                                                <MaterialIcons style={{ color: MainColorPalette.green_text, fontSize:Sizes.fiften }} name="double-arrow" />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </>
                            )
                    }
                </View>
            </>
        )
           
 

   }   
}

export default Preview;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: Sizes.padding,
        backgroundColor: MainColorPalette.white,
        // paddingVertical: Sizes.radius,

    },
    column: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    columnTwo: {
        flexDirection: "column",
        justifyContent: "space-around",
    },
    classBook: {
        borderWidth: 1,
        borderColor: "#c370b0",
        borderTopWidth: 5,
        height: "85%",
        textAlign: "center",
        alignItems: "center",
        paddingVertical: Sizes.radius,
    },
    classBookTwo: {
        borderWidth: 1,
        borderColor: "#c370b0",
        borderTopWidth: 5,
        height: "75%",
        textAlign: "center",
        alignItems: "center",
        paddingVertical: Sizes.radius,
    },
    classBookCard: {
        backgroundColor: MainColorPalette.class_Book_Card_Color,
        width: "90%",
        marginHorizontal: "auto",
        paddingVertical: Sizes.fiften,
        paddingHorizontal: Sizes.radius,
        borderRadius: Sizes.five,
        marginTop: Sizes.radius
    },
    alertCard: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "auto",
       paddingVertical: Sizes.five,
        paddingHorizontal: Sizes.radius,
        borderRadius: Sizes.five,
        marginTop: Sizes.radius
    },
    joinButton: {
        width: "90%",
        marginHorizontal: "auto",
        backgroundColor: MainColorPalette.primary_b,
        marginTop: Sizes.radius,
        paddingVertical: Sizes.radius,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Sizes.five
    },

})
