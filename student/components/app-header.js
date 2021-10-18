 import React, { Component } from "react";
import { View, Text,StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { MainColorPalette,ColorPalette } from "../styles/colorPalette"
import { ViewSize,Sizes } from "../styles/sizes"
import AsyncStorage from "@react-native-community/async-storage"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {Avatar} from "react-native-elements"
// import BellIcon from "./../assets/icons/notifications.svg";
// import UserIcon from "./../assets/icons/person.svg";
// import Avatar from "./avatar";
// import { Link } from "react-router-dom";

// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import CloseIcon from "@material-ui/icons/Close";

import AuthServices from "../services/auth.services";

 import FemaleProfile from "../assets/img/female-profile.png";
 import MaleProfile from "../assets/img/male-profile.png";
import LogOutImg from "../assets/img/log-out.png";
 import { SIGN_OUT } from "../constants/activityStrings";
//import { FormatSizeSharp } from "@material-ui/icons";

class AppHeader extends Component {
 
  state = {
    currentDate: "",
    showDropDown: false,
    logOutPopUp: true,
    instituteData:[],
    userData:[]
  };
  
  constructor(props) {
    super(props);
  }
  
   async componentWillMount() {
    
     const user =await AsyncStorage.getItem("user");
  
    if (user) {
      this.user = JSON.parse(user);
      this.setState({userData:this.user})
    
    } else {
      this.user = { name: "Unknown" };
    }

    const institute =await AsyncStorage.getItem("institute");
    if (institute) {
      this.institute = JSON.parse(institute);
      this.setState({instituteData:this.institute})
      
     
     } else {
      this.institute = { name: "UNKNOWN" };
    }
    
    
    const student =await AsyncStorage.getItem("student");
    if (student) {
      this.student = JSON.parse(student);
     
    }
    // let date = this.getFormatedDate();
    // this.setState({ currentDate: date });

    // this.forceUpdate();

    
  }
 
  getFormatedDate = () => {
    const d = new Date();
   
     const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  return da + " " + mo + " " + ye;
  };

  openDropDown = () => {
    switch (this.state.showDropDown) {
      case true:
        this.setState({ showDropDown: false });
        break;
      case false:
        this.setState({ showDropDown: true });
        break;
    }
  };

  logout =async () => {
    AuthServices.logout();
    const payload ={
      by_type: 'student',
      by_type_id: this.student.id,
      activity: SIGN_OUT
    }
    AuthServices.addActivityLog(payload)
    let instituteString =await AsyncStorage.getItem("institute");
    if (instituteString) {
      let institute = JSON.parse(instituteString);
     // this.props.history.push("/auth/" + this.state.instituteDatainstitute.unique_name + "/login/");
    } else {
     // this.props.history.push("/");
    }
  };

  toggleLogoutPopUp = (value) => {
    if (value === true) {
      this.setState({ logOutPopUp: true });
    } else {
      this.setState({ logOutPopUp: false });
    }
  };

  render() {
    return (
      <>
      
                 <View style={styles.header}>
                   <View style={styles.headerLeft}>
                   {/* <TouchableOpacity style={styles.drawerButton}>
                         <MaterialCommunityIcons name="format-align-center" size={Sizes.padding} color={MainColorPalette.white}/>
                    </TouchableOpacity> */}
                    <Text style={styles.headerInstituteName}>{this.state.instituteData.name}</Text>
                    <TouchableOpacity  style={styles.headerInstituteNotification}>
                        <MaterialIcons size={Sizes.padding} name="notifications-none" size={Sizes.padding}/>
                    </TouchableOpacity>
                   </View>

                   <View style={styles.headerRight}>
                   <TouchableOpacity onPress={this.openDropDown} style={{flexDirection:"row"}} >
                         
                            <View >
                            {
                              // this.state.userData.thumbnail_url ? (
                              //   <Image source={this.state.userData.thumbnail_url} />
                              // ): 
                              this.state.userData.gender == "male" ? (
                                <Image source={MaleProfile} style={{height:Sizes.half, width:Sizes.half}}/>
                              ):
                                (
                                <Image source={FemaleProfile} style={{height:Sizes.half, width:Sizes.half}}/>
                              )
                            }
                            </View>
                  {this.state.showDropDown ? (
                 <>   
                <MaterialIcons  name="expand-less" style={{marginTop:Sizes.radius}} size={Sizes.thirty} />
                  <View style={styles.dropDownSubMenu}>
                   
                    <View>
                      <View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <MaterialIcons size={Sizes.thirty} style={{marginRight:Sizes.padding}} name="account-circle"/>
                         <Text> Profile</Text>
                        </View>
                        <TouchableOpacity style={{flexDirection:"row",alignItems:"center", position:"relative"}} onPress={() => this.toggleLogoutPopUp(true)}>
                          <MaterialIcons size={Sizes.thirty} style={{marginRight:Sizes.padding}} name="exit-to-app" /> 
                         <Text>Logout</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  </>
                ) : (
                   <MaterialIcons style={{marginTop:Sizes.radius}} name="expand-more" size={Sizes.thirty}/>
                  
                )}
                </TouchableOpacity>
                </View>
                </View>
              {
                this.state.logOutPopUp ? (
                  <View style={styles.logOutForm}>
                    <View style={styles.logOutFormInner}>
                        <View style={{flexDirection:"row",justifyContent: "flex-end"}}>
                        <TouchableOpacity  onPress={() => this.toggleLogoutPopUp(false)} >
                           <MaterialIcons name="close" color={MainColorPalette.menu_icon_color} size={Sizes.padding}/>
                        </TouchableOpacity>
                        </View>
                        <Image style={{width:"76%", marginHorizontal:"12%", height:"30%"}} resizeMode="contain" source={require("../assets/img/log-out.png")}/>
                        <View style={{marginTop:Sizes.padding}}>
                        <Text style={{textAlign:"center",fontSize:Sizes.padding}}>Are you sure you want to log out ?</Text>
                        <Text style={{textAlign:"center", marginTop:Sizes.radius, color:"gray"}}>You will have to enter your security lock</Text>
                        <Text style={{textAlign:"center",color:"gray"}}>when you relaunch the code</Text>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:Sizes.padding}}>
                          <TouchableOpacity onPress={() => this.logout()} style={{flex:1, borderWidth:1,borderColor:MainColorPalette.primary_b,alignItems:"center", paddingVertical:Sizes.radius}}>
                            <Text style={{fontSize:Sizes.fiften, color:MainColorPalette.primary_b}}>Log Out</Text>
                          </TouchableOpacity>
                          <View style={{flex:.2}}></View>
                          <TouchableOpacity onPress={() => this.toggleLogoutPopUp()} style={{flex:1,backgroundColor:MainColorPalette.primary_b, alignItems:"center", paddingVertical:Sizes.radius,borderWidth:1,borderColor:MainColorPalette.primary_b}}>
                            <Text style={{fontSize:Sizes.fiften, color:MainColorPalette.white}}>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                ): null
              }

      </>
    )

         
  }
}

export default AppHeader;



  


const styles=StyleSheet.create({
  header:{
     zIndex:2,
     width:'100%',
     height:60,
     flexDirection:"row",
     justifyContent:"space-between",
     paddingVertical:Sizes.radius,
    paddingHorizontal:Sizes.five,
   
  },
  headerLeft:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    },
  headerRight:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
  },
  dropDownSubMenu:{
    position:"absolute",
    top:Sizes.seventy - 5,
    padding:Sizes.radius,
    right:Sizes.five,
    elevation:3,
    zIndex:1000,
    backgroundColor:MainColorPalette.white
  },
  drawerButton:{
    backgroundColor:MainColorPalette.primary_b,
    padding:Sizes.radius,

  },
  headerInstituteName:{
    fontSize:Sizes.padding,
    marginLeft:Sizes.half,
    color:MainColorPalette.primary_b,
  },
  headerInstituteNotification:{
    marginLeft:Sizes.radius,
    fontSize:Sizes.padding,
  },
  logOutForm:{
    zIndex:99999999999,
    position:"absolute",
    height:"100%",
    width:"100%",
    backgroundColor:"rgba(0,0,0,.2)"
  },
  logOutFormInner:{
    width:"80%",
    marginHorizontal:"10%",
    marginTop:"30%",
    height:"60%",
    backgroundColor:MainColorPalette.white,
    padding:Sizes.fourty
  }
})

