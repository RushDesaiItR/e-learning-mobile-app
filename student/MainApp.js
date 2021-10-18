import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LandingScreen from "./screens/auth/landing"
import LogIn from "./screens/auth/Login"
import Student from "./screens/student/student"
import SplashScreen from "react-native-splash-screen"
import {createDrawerNavigator} from "@react-navigation/drawer"

// import Splash from "./screens/Splash"
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
function MainApp() {
  return (
     <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
         >
            {/* <Stack.Screen name="Splash"
           component={Splash}
           /> */}
           <Stack.Screen name="LandingScreen"
           component={LandingScreen}
           />
           <Stack.Screen name="logIn"
           component={LogIn}
           />
            <Stack.Screen name="student"
           component={Student}
           />
            
         </Stack.Navigator>
     </NavigationContainer>
  );
}

export default MainApp;
