import React, { Component } from 'react';
import AuthServices from './../../services/auth.services'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Image, TextInput, SafeAreaView } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import AuthArt from '../../assets/img/auth-art.png'
import { MainColorPalette, ColorPalette } from "../../styles/colorPalette"
import { ViewSize, Sizes } from "../../styles/sizes"
import DefaultInstituteLogo from "../../assets/img/default-institue-logo.png"
import TextInputComponent from "../../components/TextInput"
import DaxtaButton from '../../components/DaxtaButton/DaxtaButton';
import LoginScreenHeader from "../../components/LoginScreenHeader";
// import LoadingModal from '../../components/LoadingModal/LoadingModal';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotify: false,
            notifyText: '',
            uniqueName: '',
            loading: false
        }
    }
    async componentDidMount() {
        let user = await AsyncStorage.getItem('user')
        console.log("user-----------------------------", user)
        if (user) {
            let student = await AsyncStorage.getItem('student')
            if (student) {
                this.props.navigation.navigate('student')
            }
        }
        let instituteName = this.props.route.params.institute_unique_name;
        console.log(instituteName)
        this.processInstituteName(instituteName)


    }
    processInstituteName = (iname) => {
        AuthServices.getInstituteDetails(iname)
            .then((data) => {

                if (data.success) {
                    let instituteString = JSON.stringify(data.instituteInfo);
                    AsyncStorage.setItem('institute', instituteString)
                    this.setState({ institute: data.instituteInfo.name, uniqueName: data.instituteInfo.unique_name, instituteId: data.instituteInfo.id })
                }
            })
    }

    // //   navigateTo=(portal)=>{
    // //       // this.setState({userLoggedIn: true})
    // //     //   this.props.history.push('/'+portal)
    // //       // BrowserRouter.pu

    // //      }
    notifyUser = (type, text) => {
        this.setState({ showNotify: true, notifyText: text })
        setInterval(() => { this.setState({ showNotify: false }) }, 3000)
    }
    login = () => {
        //  const {institute} = useParams();

        this.setState({ loading: true });


        console.log(this.state.email, this.state.password)
        let payload = {
            email: this.state.email,
            password: this.state.password,
            institute_id: this.state.instituteId
        }
        AuthServices.InstituteLogin(payload)
            .then(data => {
                console.log(data)
                this.setState({ loading: false });
                if (data.success) {
                    if (data.student) {
                        this.props.navigation.navigate('student')
                    }
                } else {
                    this.notifyUser('error', data.message)
                }

            })




    }

    inputEmailkeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.email) {
                this.passwordInput.focus();
            }
        }
    }

    inputPasskeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.password) {
                this.login();
            }
        }
    }

    render() {
        return (


            <SafeAreaView style={styles.LandingPage}>
                <StatusBar transparent={true} backgroundColor={MainColorPalette.primary_y} />
              
                <LoginScreenHeader />
              
                <View style={{
                    alignItems: 'center',
                     elevation:7
                }}>
                    <Image source={DefaultInstituteLogo} style={{
                        width: Sizes.hundread,
                        height: Sizes.hundread,
                        marginTop: -Sizes.half,
                        elevation:7,
                        backgroundColor: "white", 
                        padding:10
                    }} />
                </View>


                <View style={styles.FormContainer}>
                    <Text style={{ fontSize: Sizes.thirty, textAlign: "center", fontWeight: "600", fontFamily:"NunitoSans" ,color:MainColorPalette.textColor}}>{this.state.institute !== '' ? this.state.institute : ''}</Text>
                    {
                        this.state.showNotify ?
                            <Text style={{ color: "red", marginLeft:Sizes.padding }}>{this.state.notifyText}</Text>
                            : null
                    }
                    <View style={{ marginTop: Sizes.thirty }}>
                        <Text style={{ fontSize: Sizes.fifteen, color: "#464a53", paddingBottom:3 }}>Email</Text>
                        <TextInputComponent
                            Value={this.state.searchInput}
                            OnChangeText={email => { this.setState({ email: email }) }}
                            placeHolder="User ID / Email"
                            SecureTextEntry={false}
                            onKeyPress={this.inputEmailkeyPress}
                            type={'text'}
                        />

                        <View style={{ marginTop: Sizes.thirty, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ fontSize: Sizes.fifteen, color: "#464a53",paddingBottom:3 }}>Password</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#0e90ff",paddingBottom:3 }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInputComponent
                            onKeyPress={this.inputPasskeyPress}
                            OnChangeText={password => { this.setState({ password: password }) }}
                            SecureTextEntry={true}
                            Value={this.state.searchInput}
                            type={'password'}
                            placeHolder="Enter Pasword"
                        />
                    
                         <View style={{marginTop:Sizes.padding}}>
                           <DaxtaButton  onClick={() => this.login()} content="LOG IN"/>
                        </View>    

                    </View>
                    <Text style={{ color: "#939eb4", textAlign: "center", marginTop: "20%" }}>2020 Daxta All rights reserved</Text>
                    <Text style={{ color: "#939eb4", textAlign: "center" }}>I agree to Daxta's
                <Text style={{ color: "#0e90ff" }}>
                            Terms of services
                 </Text>
                    </Text>


                    <Text style={{ color: "#0e90ff", textAlign: "center", marginTop: Sizes.radius }}>
                        Help Desk: 020 22595658
                </Text>
                </View>



            </SafeAreaView>
        )
    }
}
export default Login;
const styles = StyleSheet.create({
    LandingPage: {
        flex: 1,
        backgroundColor:"white"
    },
    headerTop: {
        width: "100%",
        height: "20%",
        backgroundColor: MainColorPalette.primary_y
    },
    FormContainer: {
        width: "80%",
        marginHorizontal: "10%",
    },
    LogInButton: {
        backgroundColor: MainColorPalette.primary_b,
        marginHorizontal: "30%",
        paddingHorizontal: Sizes.padding,
        paddingVertical: Sizes.radius,
        elevation: 4,
        fontFamily: "Nunito",
    },
    // InputBox:{
    //   width:"100%",
    //   fontSize:Sizes.padding,
    //   borderWidth:2,
    //   borderColor:MainColorPalette.grayesh,
    //   fontSize:Sizes.fifteen, 
    //   color:MainColorPalette.gray,
    //   paddingVertical:Sizes.radius,
    //   paddingHorizontal:Sizes.padding,
    // },


})

