import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from "react-native-splash-screen"
import MainApp from "./student/MainApp"

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render(){
    return(
    
        <MainApp/>
   )
  }
};



export default App;
