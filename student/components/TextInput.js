import React, { Component } from 'react';
import {TextInput, StyleSheet, View} from "react-native"
import { MainColorPalette,ColorPalette } from "../styles/colorPalette"
import { ViewSize,Sizes } from "../styles/sizes"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
class TextInputComponent extends React.Component {

            
        render(){
        return ( 
         
          <>
         
           {
             this.props.type === 'text' ? 
             
             <TextInput
             style={styles.textInput}
             placeholder={this.props.placeHolder}
             value={this.props.Value}
             onChangeText={this.props.OnChangeText}
                 
           />
           :null
           
           }

           {
             this.props.type === 'search' ? 
             
            <View style={styles.searchBarInput}>
               <MaterialIcons style={styles.searchBarInputIcon} name="search"/>
               <TextInput
               placeholder={this.props.placeHolder}
               value={this.props.Value}
               onChangeText={this.props.OnChangeText}
               style={[styles.searchBarInputBox, {color:MainColorPalette.grayesh}]}

           />
            </View>
           :null
           
           }


           {
             this.props.type === 'password' ? 
             
             <TextInput
             style={styles.textInput}
             placeholder={this.props.placeHolder}
             value={this.props.Value}
             onChangeText={this.props.OnChangeText}
             secureTextEntry={true}
           />
           :null
           
           }
          </>
         )
        }
    
}
const styles = StyleSheet.create({

  textInput:{
        width:"100%",
      //  fontSize:Sizes.padding,
        color:MainColorPalette.grayesh,
        fontSize:Sizes.fiften,
        borderWidth:1,
        borderColor:MainColorPalette.grayesh,
        paddingVertical:Sizes.radius,
        paddingHorizontal:Sizes.padding,
        fontFamily:"NunitoSans",
        backgroundColor:MainColorPalette.white,
        borderRadius:2,
         
      },
      searchBarInput:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:"100%",
        borderWidth:1,
        borderColor:MainColorPalette.grayesh,
        paddingHorizontal:Sizes.radius,
        borderRadius:Sizes.radius,
        fontFamily:"NunitoSans",
        backgroundColor:MainColorPalette.white,
        fontSize:Sizes.fiften,
        borderRadius:2
      },
      searchBarInputBox:{
       flex:5,
       color:MainColorPalette.grayesh,
       fontFamily:"NunitoSans",
       backgroundColor:MainColorPalette.white
      },
      searchBarInputIcon:{
       flex:1,
       fontSize:Sizes.padding,
       color:MainColorPalette.grayesh,
       fontFamily:"NunitoSans",
      }
    
})
 export default TextInputComponent;

