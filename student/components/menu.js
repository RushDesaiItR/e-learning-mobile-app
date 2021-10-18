import React, { Component } from "react";
import { Text,View,TouchableOpacity, Image,StyleSheet } from "react-native"
import { MainColorPalette,ColorPalette } from "../styles/colorPalette"
import { ViewSize,Sizes } from "../styles/sizes"
 import AuthServices from '../services/auth.services'
 import MaterialIcons from "react-native-vector-icons/MaterialIcons"
 import DaxtaLogo from "../assets/img/daxta-logo.png"
//  import HomeIcon from '../assets/icons/home.svg';
//  import ProfileIcon from '../assets/icons/profile.svg';
//  import CalenderIcon from '../assets/icons/calender.svg';
//  import BookIcon from '../assets/icons/book.svg';
//  import MyclassIcon from '../assets/icons/myclass.svg';
//  import ChatIcon from '../assets/icons/profile.svg';
//  import LogoutIcon from '../assets/icons/logout.svg';


import defaultInstitueImage from "../assets/img/default-institue-logo.png";


class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
   
    

    return (

      <>
      {
        this.props.enable ? (
          <View style={{width: '65%', height: '100%', elevation: 10, backgroundColor: MainColorPalette.white}}>
            <View style={styles.sideBarInner}>
            <View>
          <View >
            <Image 
              source={this.props.instituteDetails.logo_url ? this.props.instituteDetails.logo_url : defaultInstitueImage}
              style={{ height: 50, width: 50 }}
            
            />
          </View>
         
        </View>
        <View style={styles.MenuItemHeader}>
          {this.props.menuItems.map((menuItem, i) =>
            menuItem.id === 11 ? (
              this.props.screenId === 11 ? (
                <>
                  <View style={styles.MenuItem} key={i}>
                    <View >
                    <MenuItem icon={menuItem.icon} />
                    </View>
                  <Text style={styles.menuItemText}> {menuItem.title}</Text> 
                  </View>
                </>
              ) : this.props.screenId === 12 ? (
                <View style={styles.MenuItem} key={i}>
                   <MenuItem icon={menuItem.icon} />
                 <Text style={styles.menuItemText}>{menuItem.title}</Text>  
                </View>
              ) : null
            ) : (
              <TouchableOpacity
              style={this.props.screenId == menuItem.id ? styles.MenuItemActive : styles.MenuItem}
                onPress={() => this.props.navigate(menuItem.id)}
                key={i}
              >
                {menuItem.iconType === "custom" ? (
                  <Image style={{width:Sizes.thirty, height:Sizes.thirty}} resizeMode="contain" source={menuItem.icon}  />
                ) : (
                  <MenuItem icon={menuItem.icon} colorProps={this.props.screenId == menuItem.id ? MainColorPalette.primary_b : MainColorPalette.menu_icon_color} />
                )}
               <Text style={this.props.screenId == menuItem.id ? styles.menuItemTextActive :styles.menuItemText} >{menuItem.title}</Text> 
              </TouchableOpacity>
            )
          )}
        </View>
            </View>
            <View>
               <Image source={DaxtaLogo}
               resizeMode="contain"
               style={{height:Sizes.padding, height:Sizes.padding, marginLeft:Sizes.padding,  marginTop:Sizes.radius}}/>
            </View>
          </View>
        ):null
      }
     </>
    
    );
  }
}

 class MenuItem extends Component {
     state = {  }
     render() {
         return (
            //  <TouchableOpacity  style={styles.MenuItem}  onPress={this.props.onClick}>
                <MaterialIcons style={styles.MenuItemIcon} color={this.props.colorProps} name={this.props.icon}/>
              //   <Text>{this.props.text}</Text> 
              // </TouchableOpacity>
          );
     }
 }

export default SideMenu;
const styles=StyleSheet.create({
  sideBarInner:{
    height: "94%",
    backgroundColor: MainColorPalette.primary_b,
    alignSelf:"center",
   },
  MenuItemHeader:{
   width:"90%",
   marginHorizontal:"5%"
  },
  MenuItem:{
    width:"85%",
    flexDirection:"row",
   justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:Sizes.radius,
    paddingHorizontal:Sizes.radius,
    marginTop:Sizes.radius,
  },

  MenuItemActive:{
    width:"85%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:Sizes.radius,
    paddingHorizontal:Sizes.radius,
    backgroundColor:"white",
    marginTop:Sizes.radius,
  },
  MenuItemIcon:{
    fontSize:Sizes.thirty, 
   
  },
  menuItemText:{
    fontSize:Sizes.padding, 
    color:"#e6e6e6",
    fontFamily:"Nunito",
   
  },
  menuItemTextActive:{
    fontSize:Sizes.padding, 
    color:MainColorPalette.primary_b,
    fontFamily:"Nunito",
    
  }
})
