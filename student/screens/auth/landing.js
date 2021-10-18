import React, { Component } from 'react';
import AuthServices from './../../services/auth.services'
import Sticker from '../../assets/img/Girl1.png'
import DaxtaLogo from '../../assets/img/daxta-logo-full.png'
import LoginArt from '../../assets/img/login-art.svg'
import InstituteLogo from "../../assets/img/default-institue-logo.png";
import AuthArt from '../../assets/img/header_BG.png'
import SearchIcon from "../../assets/icons/search.svg";
import AntDesign from "react-native-vector-icons/AntDesign"
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput, StatusBar,FlatList, SafeAreaView, KeyboardAvoidingView, ScrollView} from "react-native"
import { MainColorPalette,ColorPalette } from "../../styles/colorPalette"
import { ViewSize,Sizes } from "../../styles/sizes"
import AsyncStorage from "@react-native-community/async-storage"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import DefaultInstituteLogo from "../../assets/img/default-institue-logo.png"
import TextInputComponent from "../../components/TextInput"
import DaxtaButton from '../../components/DaxtaButton/DaxtaButton';
//import LoadingModal from '../../components/LoadingModal/LoadingModal';


import LoginScreenHeader from "../../components/LoginScreenHeader";
const config = require('../../config/config')
const HOST = config.host
const API = config.api


class Auth extends Component {
    state = { 
        institutes:[],
        searchInput:'',
        email: '',
        password: '',
        userLoggedIn:false,
        institute: '',
        instituteLogo: '',
        instituteId: '',
        instituteSelected:false,
        text:'',
        error: false,
        loading:false,
        dataFilter:[],
        buttonDisplay:true
     }
     
   async componentDidMount(){
        
          // history = useHistory()
          // const hash = window.location.hash
          // if(hash){
          //     this.navigateTo(hash.substring(1))
          // }else{
        let user =await AsyncStorage.getItem('user')
            if(user){
               let student =await AsyncStorage.getItem('student')            
                if(student){
                    this.props.navigation.navigate("student")
                }                      
            }
         // let instituteName = this.props.match.params.institute;
         //  this.processInstituteName(instituteName)
       
        this.processInstituteName("zeeshan's academy")
        this.getAllInstitutes()
        
        
        
     }
     getAllInstitutes=()=>{
        const url = `${HOST}/${API}/institute/`;
        console.log('iurl ',url)
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            if(data.success){
                this.setState({institutes:data.institutes})
            }
            
        }).catch((e)=>{
            console.log('ERR',e)
        }).catch((e)=>{
            console.log('ERR1',e)
        })
    }
     
     processInstituteName = (iname)=>{
        AuthServices.getInstituteDetails(iname)
        .then((data)=>{
            console.log(data)
            if(data.success){
                this.setState({institute: data.instituteInfo.name,instituteId:data.instituteInfo.id})
            }
        })

     }

    //  navigateTo=(portal)=>{
    //     this.setState({userLoggedIn: true})
    //     this.props.history.push('/'+portal)
    //     BrowserRouter.pu
        
    //  }
 

    selectedInstitute=(id)=>{
       

        this.setState({instituteId:id,instituteSelected:true,searchInput:''})
    }
    editSelected=()=>{
        let institute = this.findInstituteById(this.state.instituteId)

        this.setState({searchInput:'', instituteSelected:false, instituteId: ""})
    }
    findInstituteById(id){
        let currentInstitute = this.state.institutes.filter(i=>{
            return i.id === this.state.instituteId
        })
        // let currentInstituteName='';
        if(currentInstitute.length > 0){
           console.log(currentInstitute[0])
            return currentInstitute[0];
        }else{
            return {id:-1,name:'not found'}
        }
    }
    onSelect=()=>{
        console.log("not cpmes...")
        if (this.state.instituteId) {

        let institute = this.findInstituteById(this.state.instituteId)
       let institute_unique_name=institute.unique_name
        this.props.navigation.navigate("logIn",{institute_unique_name})

  
    } else {
      this.setState({
        error: true
      })
      setTimeout(function(){
        this.setState({error:false});
      }.bind(this),5000);
    }  
        
    }
    
    
    render() { 
      const searchItems = this.state.institutes.filter((data)=>{ 
      
        if(data.name){
            if(this.state.searchInput == null){
               return [];
              
            }
                
            else if(data.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ){
                
                return data
            }
        }else{
            return []
        }
        }).map((data,i)=>{
        
            return(
             
              <TouchableOpacity style={[styles.row, styles.searchResultOpacity]}  key={i} onPress={() => this.selectedInstitute(data.id)}>
                 {
                 data.thumbnail_url ?  
                 <Image source={{ uri:data.thumbnail_url  }} resizeMode="cover"
                  style={{ 
                   height:40,
                   width:40, 
                  //  elevation: 11,
                    flex:1, 
                    marginLeft:Sizes.padding
                   }} /> 
                   :
                  <Image source={ InstituteLogo } resizeMode="cover"
                  style={{ 
                   height:40,
                   width:40, 
                 //  elevation: 11,
                    flex:1,
                    marginLeft:Sizes.padding
                   }} /> 
                 }
                {/* <View style={{flexDirection: 'column', flex:5, paddingHorizontal:Sizes.radius}}> */}
                  <Text style={{
                    flexWrap:"wrap",
                    fontFamily:"NunitoSans", 
                    color:MainColorPalette.textColor, 
                    paddingBottom:2, 
                    flex:5,
                     marginLeft:Sizes.radius,
                     fontSize:Sizes.fiften
                     }}>{data.name}</Text>
                  {/* <View style={{height:1, backgroundColor:MainColorPalette.grayesh_fourth}}/> */}
                  {/* <Text style={{flexWrap:"wrap",fontFamily:"NunitoSans", color:MainColorPalette.grayesh_secondary, paddingTop:2}}>{data.unique_name}</Text>  */}
                {/* </View> */}
              </TouchableOpacity>
             
                )
        })
        const currentInstitute = this.findInstituteById(this.state.instituteId)
            

        return ( 
         
            <>
           
          <StatusBar transparent={true}  backgroundColor={MainColorPalette.primary_y}/>
         

            <View style={styles.LandingPage}>
            
             <View>
                 <LoginScreenHeader/>
             </View>

             
             
              <View style={{flex:1, alignItems: 'center', justifyContent:"center"}}>
              <Image 
               source={DaxtaLogo}
               style={styles.logo}
               resizeMode="contain"
               />
                <Text style={styles.para}>Welcome to Student's portal</Text>
                </View>

              
              
               <View style={{flex:.5, paddingHorizontal:Sizes.thirty, marginTop:Sizes.half, position: 'relative'}}>
                {
                  !this.state.instituteSelected ?
                 
                  
                     <TextInputComponent
                         type={"search"}
                         Value={this.state.searchInput}
                         OnChangeText={text =>this.setState({searchInput: text})}
                         placeHolder="Please Select Your Institute"
                         style={{position:"relative", zIndex:1}}
                     />
                 
            
                 :
                 

                 <TouchableOpacity style={styles.searchSet} onPress={() => this.editSelected()}>
                   {
                     currentInstitute.thumbnail_url ? 
                     <Image 
                     style={{ 
                     height:40,
                     width:40, 
                     elevation: 11,
                     flex:1, 
                     marginLeft:Sizes.radius
                   }} 
                     source={{ uri: currentInstitute.thumbnail_url }} />
                     :
                     <Image 
                     style={{ 
                     height:40,
                     width:40, 
                     elevation: 11,
                     flex:1, 
                     marginLeft:Sizes.radius
                   }} 
                       source={InstituteLogo} />
                   }
                    <View style={{flexDirection:"column", flex:4, marginLeft:Sizes.padding}}>
                      <View >
                        <Text style={{fontFamily:"NunitoSans", fontSize:Sizes.fifteen, color:MainColorPalette.textColor, paddingBottom:5, flexWrap:"wrap"}}>{currentInstitute.name}</Text>
                      </View>
                      <View style={{height:2, backgroundColor:MainColorPalette.gray}}/>
                     <View/>
                     <Text style={{fontFamily:"NunitoSans", paddingTop:5,flexWrap:"wrap"}}>{currentInstitute.unique_name}</Text>
                    </View>
                 </TouchableOpacity>
                }
              </View>
          
            
             {
               this.state.searchInput !== ''?
               
               
                 
                    searchItems.length > 0 ? 
                    <ScrollView showVerticalScrollIndicator={true} style={styles.searchResult}>  
                  {  searchItems }
                     </ScrollView>
                     :
                    <Text style={styles.errorText}>No Result Found</Text>
                
                
                 
            
                :null
              }
              {
                this.state.error ?<Text style={styles.errorText}>Select Inistute First</Text> : null
              }
           
           
          
                  <View style={{flex:1,zIndex: 0,paddingHorizontal:Sizes.thirty,marginTop:Sizes.thirty}}>
         
                    <DaxtaButton  onClick={() => this.onSelect()} content="SELECT"/>
                 <View>
                <Text style={styles.bottomText}>
                  This school requires you log in through their website
                   Tab the web login button to continue
               </Text>
            </View>
            </View>

           
            <View style={[styles.row,{flex:1, paddingHorizontal:Sizes.thirty, marginBottom:-Sizes.thirty}]}>
              <View style={styles.row}>
                <AntDesign color={MainColorPalette.link_color} name="questioncircleo"/>
                <Text style={{color:MainColorPalette.link_color, marginLeft:Sizes.radius}}>Help</Text>
             </View>
             <View  style={styles.row}>
                <FontAwesome color={MainColorPalette.grayesh} name="envelope"/>
                <Text style={{color:MainColorPalette.grayesh, marginLeft:Sizes.radius}}>Supprt@daxta.tech</Text>
             </View>
            </View>
             
           
            </View>
         
        
          </>
         );
    }
}
const styles=StyleSheet.create({
  LandingPage:{
    flex:1,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems:"stretch",
    backgroundColor:MainColorPalette.white
    
  },
  logo:{
    height:"70%",
    width:"50%",
    marginTop:Sizes.half
  },
  para:{
    fontFamily:"NunitoSans",
    fontWeight:"600",
    fontSize:Sizes.padding,
    color:MainColorPalette.primary_b
  },
  row:{
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems:"center"
  },
  bottomText:{
    fontFamily:"NunitoSans", 
    color:MainColorPalette.para_color, 
    fontWeight:"300", 
  //  fontStyle:"italic",
    fontSize:Sizes.fifteen,
    textAlign:"center",
    marginTop:Sizes.padding,
  },
  searchResult:{
    height:150,
    width:"83.5%",
    marginHorizontal:"8%",
    position:"absolute",
    top:"57%", 
    zIndex:2,
    backgroundColor:MainColorPalette.white,
    borderRadius:Sizes.radius,
    borderColor:MainColorPalette.grayesh,
    borderWidth:2,
   
   },
   searchResultInner:{
     position: "relative",
     
   },
   searchResultOpacity:{
    borderBottomWidth:1,
    borderBottomColor:MainColorPalette.grayesh,
    fontFamily:"NunitoSans",
    height:Sizes.half,
    paddingVertical:Sizes.padding
    },
    noResultFound:{
      color:"red",
      textAlign:"center",
      marginTop:Sizes.padding,
      fontFamily:"NunitoSans",
    },
    errorText:{
    paddingVertical:Sizes.padding,
    paddingHorizontal:Sizes.radius,  
    width:"83.5%",
    marginHorizontal:"8%",
    backgroundColor:MainColorPalette.white,
    borderRadius:Sizes.radius,
    borderColor:MainColorPalette.grayesh,
    borderWidth:2,
    color:"red",
    textAlign:"center",
    fontFamily:"NunitoSans",
    },
    searchSet:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:MainColorPalette.white,
    borderRadius:Sizes.radius,
    borderColor:MainColorPalette.grayesh,
    borderWidth:2,
    paddingVertical:Sizes.radius,
    paddingHorizontal:Sizes.radius
    }
})
 export default Auth;
//  if(this.props.match.params.institute){
//   let instituteName = this.props.match.params.institute;
//   this.processInstituteName(instituteName)
// }else{
//   let user =await AsyncStorage.getItem('user')
//   if(user){
//      let student =await AsyncStorage.getItem('student')            
//       if(student){
//           this.props.navigation.navigate("student")
//       }                      
//   }


// }
