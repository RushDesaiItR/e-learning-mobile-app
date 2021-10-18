import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { MainColorPalette,ColorPalette } from "../styles/colorPalette"
import { ViewSize,Sizes } from "../styles/sizes"
import AuthArt from '../assets/img/header_BG.png'
export default class LoginScreenHeader extends Component {
    render() {
        return (
           <>
               <Image 
                resizeMode="contain"
                source={AuthArt}
                style={styles.headerTop}
              />
           </>
        )
    }
}
const styles=StyleSheet.create({
    headerTop:{
        width:"100%",
        height:150,
        backgroundColor:MainColorPalette.primary_y
     },
})
