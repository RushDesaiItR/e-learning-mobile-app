import React from "react"
import {Image, ImageBackground, StatusBar} from "react-native"
import BgSpalsh from "../assets/img/bgSplash.png"
import Logo from "../assets/img/daxta-logo-full.png"
export default class Splash extends React.Component{
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.props.navigation.navigate("LandingScreen")
        }, 3000);
    }

   render() {
   
    return (
        <>
        <StatusBar transparent={true} barStyle="dark-content" />
        <ImageBackground style={{flex:1, justifyContent:"center", alignItems:"center"}} source={BgSpalsh}>
           <Image style={{width:300, height:70}} resizeMode="contain" source={Logo}/>
        </ImageBackground>
        </> 
        )
   }
}