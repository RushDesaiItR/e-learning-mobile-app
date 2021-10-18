import React, { Component } from "react";
import { View, Text,StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
 import {Icon} from "react-native-elements"
import DaxtaButton from "../../components/DaxtaButton/DaxtaButton"
import { MainColorPalette,ColorPalette } from "../../styles/colorPalette"
import { ViewSize,Sizes } from "../../styles/sizes"
import AsyncStorage from "@react-native-community/async-storage"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Avatar } from "react-native-elements"
import { SIGN_IN } from "../../constants/activityStrings";
import * as AuthServices from "../../services/auth.services";
import AppHeader from "../../components/app-header";
import SideMenu from "../../components/menu"
import dashboardIcon from "../../assets/img/dashboard-icon.png";
import loadingGIF from "../../assets/img/loading.gif";
import LiveClass from "./webinar/live-class";
// import Profile from "./profile/profile";
 import Dashboard from "./dashboard/dashboard";
// import ProfileMobile from "./profile/profile-mobile";
 import Preview from "./preview/preview";
// import Subject from "./subject/subject";
//import Classes from "./classes";
//import Classroom from "./classroom/classroom";
//import Timetable from "./timetable/TimeTable";
class Student extends Component {
  constructor() {
    super();
    this.webinarPreset = {
      video: true,
      mic: true,
      screenShare: false,
    };
    this.student = {};
   
  }

  state = {
    screen: 0,
    currentClass: {},
    currentClassId: 0,
    menuEnable: false,
    params: null,
    loading: true,
    instituteData:[],
    studentData:[]
  };

   async componentWillMount() {
      console.log("calllled")
      const user =await AsyncStorage.getItem("user");
      if (user === null) {
       this.props.navigation.navigate("LandingScreen");
       return;
     }
     this.user = JSON.parse(user);
     const institute =await AsyncStorage.getItem("institute");
     
    this.institute = JSON.parse(institute);
 
    this.setState({instituteData:this.institute})
    
     const student = await AsyncStorage.getItem("student");
     if (student) {
     this.student = JSON.parse(student);
       this.setState({studentData:this.student});
     
       const payload = {
         by_type: "student",
         by_type_id: this.student.id,
         to_type: "student",
         to_type_id: this.student.id,
         activity: SIGN_IN,
       };
       AuthServices.addActivityLog(payload);
     }

   
     this.endLoding();
  }
  getAsyncData = async ()=>{

    }
   clickOnSubject = (subjectId) => {
     console.log(subjectId);
     this.setState({ selectedSubject: subjectId });
     this.navigate(4);
   };
   resetSubject() {
     this.setState({ selectedSubject: null });
   }

   endLoding = () => {
     setTimeout(() => {
       this.setState({ loading: false });
     }, 10);
   };

   navigate = (screenId, params = null) => {
     this.setState({ screen: screenId, menuEnable: false, params });
   };

   goToClass = (classData) => {
     this.setState({ currentClass: classData });
     this.navigate(12);
   };

   goToWebinar = (classData, preset) => {
     if (preset) {
       this.webinarPreset = preset;
     }
     this.setState({ currentClass: classData });
     this.navigate(11);
   };

    menuItems = [
      {
        id: 0,
        title: "Dashboard",
         icon: dashboardIcon,
         iconType: "custom",
        action: () => {
          this.navigate(0);
        },
      },
      {
        id: 2,
        title: "Class Room",
        icon:'vertical-split',
        iconType: "material-icon",
        action: () => {
          this.navigate(2);
        },
      },
      {
        id: 3,
        title: "Time-Table",
        icon: 'today',
        iconType: "material-icon",
        action: () => {
          this.navigate(3);
        },
      },
      {
        id: 4,
        title: "My-Subject",
        icon: 'menu-book',
        iconType: "material-icon",
        action: () => {
          this.navigate(4);
        },
      },
      {
        id: 11,
        title: "Live Class",
        icon: 'desktop-mac',
        iconType: "material-icon",
        action: "none",
      },
    ];

   render() {

    console.log("student  data in student route render",this.state.student);
    return (
      <>
      {/* <StatusBar backgroundColor={MainColorPalette.white} barStyle={"dark-content"}/> */}
       {
         this.state.loading ?
         (
         <Text>Loading....</Text>
         )
         : 
         (
           <>
         
          <TouchableOpacity style={styles.drawerButton} onPress={() => this.setState({ menuEnable: !this.state.menuEnable })}>
                         <MaterialCommunityIcons name="format-align-center" size={Sizes.padding} color={MainColorPalette.white}/>
         </TouchableOpacity>
     
      <SideMenu
             enable={this.state.menuEnable} 
             screenId={this.state.screen}
             navigate={this.navigate}
             instituteDetails={this.state.instituteData}
             menuItems={this.menuItems}
            />
        <AppHeader/>
        <View style={{zIndex:22}}>
           {
             this.state.screen === 0 ? 
            // <Text>Dashboard</Text> : null
            <Dashboard navigate={this.navigate} student={this.student} goToClass={this.goToClass} />
            : null
           }
           {
             this.state.screen === 1 ? 
             <Text>Profile</Text> :null
          
           }
             {
             this.state.screen === 2 ? 
             <Text>Class Room</Text> :null
           }
            {
             this.state.screen === 3 ? 
              <Text>Time Table </Text>
              : null
          //   <Timetable goToClass={this.goToClass} student={this.state.studentData} /> :null
           }
             {
             this.state.screen === 4 ? 
             <Text>Subject</Text> :null
           }
           {
             this.state.screen === 11 ? 
            //  <Text>Live Class</Text> :null
            <LiveClass classData={this.state.currentClass} preset={this.webinarPreset} />
            : null
           }
             {
             this.state.screen === 12 ? 
            //  <Preview classData={this.state.currentClass} goToWebinar={this.goToWebinar} />
             <Preview classData={this.state.currentClass} goToWebinar={this.goToWebinar} />
             : null
           }
        </View>
       
        </>
         )
         
       }
      </>
    )
      // </>
        {/* {this.state.loading ? (
          <div
            style={{
              backgroundColor: "#000000",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={loadingGIF} alt="" width="20%" />
          </div>
        ) : (
          <div className="app-body">
            {small ? (
              <div className="center menu-button" onClick={() => this.setState({ menuEnable: !this.state.menuEnable })}>
                <MenuIcon />
              </div>
            ) : null}
            <SideMenu
              menuItems={this.menuItems}
              enable={this.state.menuEnable}
              navigate={this.navigate}
              screenId={this.state.screen}
              instituteDetails={this.institute}
            />
            <AppHeader history={this.props.history} navigate={this.navigate} />
            <div className="app-container" onClick={() => this.setState({ menuEnable: false })}>
              {this.state.screen === 0 ? (
                <Dashboard navigate={this.navigate} student={this.student} goToClass={this.goToClass} />
              ) : null}
              {this.state.screen === 1 ? small ? <ProfileMobile /> : <Profile navigate={this.navigate} /> : null}
              {this.state.screen === 2 ? (
                <Classroom
                  navigate={this.navigate}
                  deFocus={(bool) => this.deFocus(bool)}
                  user={this.user}
                  institute={this.institute}
                  student={this.student}
                />
              ) : null}
              {this.state.screen === 3 ? <Timetable goToClass={this.goToClass} student={this.student} /> : null}
              {this.state.screen === 4 ? <Subject params={this.state.params} student={this.student} goToClass={this.goToClass}/> : null}
              {this.state.screen === 11 ? <LiveClass classData={this.state.currentClass} preset={this.webinarPreset} /> : null}
              {this.state.screen === 12 ? <Preview classData={this.state.currentClass} goToWebinar={this.goToWebinar} /> : null}

              {/* <div className="video-container">
                      <img src="https://i.ytimg.com/vi/CwwrCBJDulY/maxresdefault.jpg" style={{height:'480px',width:'780px'}} alt="fuhdsuf"/>
                  </div>
                  <ChatBox /> */}
            {/* </div>
          </div>
        )} */} 
    
   // );
  }
}

export default Student;
const styles = StyleSheet.create({
  drawerButton:{
    backgroundColor:MainColorPalette.primary_b,
    padding:Sizes.radius,
    position:"absolute",
    top:Sizes.radius,
    zIndex:6,
    marginLeft:Sizes.radius,
  },
})
