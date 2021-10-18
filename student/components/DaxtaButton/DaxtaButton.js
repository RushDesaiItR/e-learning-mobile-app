import React, { Component } from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"
import { MainColorPalette,ColorPalette } from "../../styles/colorPalette"
import { ViewSize,Sizes } from "../../styles/sizes"
import Entypo from "react-native-vector-icons/Entypo"
// How To Use DaxTa Button -
// all input props - 'content', 'icon', 'type', 'style', 'onClick', 'disabled'
// content - it is the text that we gonna put inside a button
// icon - if the button requires icon we have to put the button component inside icon props
// type - by default it is contained and we have to pass this props as outlined for secondary view
// style props contain custom styles for that button. The default styles will get override if this props value is set
// onClick - send the function from this props to set on-click functionality
// disabled - button with disabled onClick and styles

class DaxtaButton extends Component {
  // style = () => {
  //   // let width = window.innerWidth;
  //   // let height = window.innerHeight;
  //   // const ar = width / height;
  //   // let small = false;
  //   // if (width < 550) {
  //   //   small = true;
  //   // }
  //   // if (width < 1000 && ar > 4 / 3) {
  //   //   small = true;
  //   // }

  //   let mainStyles = {
  //     fontFamily: "Nunito Sans, sans-serif",
  //     fontSize: "16px",
  //     fontWeight: "600",
  //     lineHeight: "1.38",
  //     minWidth: "97px",
  //     borderRadius: 3,
  //     padding: "10px 30px",
  //     height: "42px",
  //   };

  //   if (this.props.style) {
  //     let basicStyles = {
  //       fontFamily: "Nunito Sans, sans-serif",
  //       fontSize: this.props.style.fontSize ? this.props.style.fontSize : "16px",
  //       fontWeight: this.props.style.fontWeight ? this.props.style.fontWeight : "600",
  //       lineHeight: this.props.style.lineHeight ? this.props.style.lineHeight : "1.38",
  //       minWidth: this.props.style.minWidth ? this.props.style.minWidth : "97px",
  //       borderRadius: this.props.style.borderRadius ? this.props.style.borderRadius : 3,
  //       padding: this.props.style.padding ? this.props.style.padding : "10px 30px",
  //       height: this.props.style.height ? this.props.style.height : "42px",
  //       color: this.props.style.color
  //         ? this.props.style.color
  //         : this.props.disabled
  //         ? "#ffffff"
  //         : this.props.type === "outlined"
  //         ? "#29396d"
  //         : "#ffffff",
  //       backgroundColor: this.props.style.backgroundColor
  //         ? this.props.style.backgroundColor
  //         : this.props.disabled
  //         ? "#29396d4d"
  //         : this.props.type === "outlined"
  //         ? "#ffffff"
  //         : "#29396d",
  //       borderColor: this.props.style.borderColor
  //         ? this.props.style.borderColor
  //         : this.props.type === "outlined"
  //         ? "#29396d"
  //         : null,
  //       border: this.props.style.border ? this.props.style.border : this.props.type === "outlined" ? "1px" : "0px",
  //       borderStyle: this.props.style.borderStyle ? this.props.style.borderStyle : "solid",
  //     };

  //     return Object.assign(this.props.style, basicStyles);
  //   } else if (this.props.type === "outlined") {
  //     let outlinedStyle = {
  //       color: this.props.disabled ? "#ffffff" : "#29396d",
  //       backgroundColor: this.props.disabled ? "#29396d4d" : "#ffffff",
  //       borderColor: "#29396d",
  //     };
  //     return Object.assign(outlinedStyle, mainStyles);
  //   } else {
  //     let normalStyle = {
  //       color: this.props.disabled ? "#ffffff" : "#ffffff",
  //       backgroundColor: this.props.disabled ? "#29396d4d" : "#29396d",
  //       border: 0,
  //     };
  //     return Object.assign(normalStyle, mainStyles);
  //   }
  // };
 
  render() {
    return (
      <>
        <TouchableOpacity
          style={styles.Button}
          startIcon={this.props.icon}
          onPress={this.props.onClick}
          disabled={this.props.disabled}
        >
        {
           this.props.icon ? <Entypo size={20}  color={MainColorPalette.white} name={this.props.icon} /> :null
        }
         <Text style={styles.ButtonText}> {this.props.content}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default DaxtaButton;
const styles=StyleSheet.create({
  Button:{
    backgroundColor:MainColorPalette.primary_b,
     paddingVertical:Sizes.radius,
    elevation:4,
    width:"50%",
    marginHorizontal:"25%",
    fontFamily:"NunitoSans sans-serif",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:5
  },
  ButtonText:{
    fontFamily:"Nunito",
    fontSize:Sizes.padding,
    fontWeight:"600",
    color:MainColorPalette.white,
   fontFamily:"Nunito sans-serif",
  }

})
