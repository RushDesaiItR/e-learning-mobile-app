import React, { Component } from 'react';
import AuthServices from '../../../services/auth.services'
import './my-classroom.scss'

import NotifyUser from '../../../components/notify';

import { ReactComponent as Geometry } from "./../../../assets/icons/geometry.svg";

import {ColorPalette} from './../../../styles/colorPalette.js'
import SubjectBook from '../../../components/SubjectBook/SubjectBook';
import LoadingModal from '../../../components/LoadingModal/LoadingModal';
const config = require('../../../config/config')

const HOST = config.host
const API = config.api

const activeStyle={
    backgroundColor: '#61ada0',
    color:'#fff',
    borderRadius: '5px' ,
    boxShadow: '0 3px 6px 0 #00000029'   
}
const subTabActiveStyle={
    backgroundColor: '#192f54',
    color:'#fff',    
    boxShadow: '0 3px 6px 0 #00000029'        
}
const inactiveStyle={
    color: '#a2a6bb',
    textDecoration: 'none'
}


class ClassRooms extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userType: 'admin',
            admins:[],
            screen:'details',
            classrooms:[],
            searchInput:'',
            addUser:false,
            showNotify: false,
            notifyType: 'success',
            notifyText: '',            
            successPopupShow: false,
            customClassroomName:'',
            currentSubjects:[],
            currentClassRoomId:0,
            currentClassRoomIndex:0,
            currentStandard:4,
            currentSection:'B',
            activeClassroomSubTab:0,            
            createClassroom: false,
            loading: true            
         }
         this.admins = [];
         this.students = [];
         this.teachers = [];
         this.currentClassroom={}
         this.user = props.user;
         this.institute = props.institute;
         this.student = props.student;
    }

    async componentWillMount(){
        console.log(this.props)
        await this.updateClassRooms();        
    }
    

    async updateClassRooms(){
        // await this.getClassRooms()
        await this.getClassroomSubjects()
        this.setState({loading:false})
        console.log('classrooms fetch ',this.state.classrooms)
    }

   


    async getClassRooms(){
        AuthServices.getClassRooms(this.institute.id)
        .then((data)=>{
            console.log(data)
            if(data.length > 0){
                this.classrooms = data;
                this.setState({classrooms:data})
                
                this.selectClassroom()
                return data;               
            }else{
                this.notifyUser('error','no classrooms found')                
            }            
            
        }).catch((e)=>{
            this.notifyUser('error',e.message)
        })
    }
   

    

    getClassroomSubjects= async(id)=>{
        const subject = await AuthServices.getSubjectsByClassroomId(this.props.student.classroom_id)
        this.setState({currentSubjects: subject})
        console.log('sub',subject)
        this.setState({screen:'details',currentClassRoomId:this.props.student.classroom_id});
    }
    
    notifyUser =(type,text)=>{ console.log('notify called')
        this.setState({showNotify:true ,notifyType: type, notifyText: text})
        setInterval(()=>{this.setState({showNotify:false})},2000)
    }
    selectClassroom=(i)=>{ 
        this.currentClassroom = this.state.classrooms[i];
        console.log(i,this.currentClassroom)
        
        this.getClassroomSubjects();        
    }
    goBack=()=>{
        if(this.state.classrooms.length > 1){
            this.setState({screen:'details'})
        }else{
            this.setState({screen:'init'})
        }
    }
    navigateToSubjectDetails=(subject)=>{
        this.props.navigate(4, {subject})
    }
    

  

    render() { 

        


        return ( 
            
            <div style={{padding:'0px',display:'flex',flexGrow:'1'}}>
                <LoadingModal stopLoading={this.state.loading} />
                                  
                    <div className="classroom-container" style={{padding:'22px 22px'}}>
                    {this.state.showNotify?<NotifyUser type={this.state.notifyType} text={this.state.notifyText}/>:null}
                        <div style={{display:'flex'}}>
                            <div className="strong-text"> {this.currentClassroom.standard}th Standard {' > '} Division {this.currentClassroom.section}</div>
                        </div>
                        <div>
                            <div className="sub-detail-tab" onClick={()=>this.setState({activeClassroomSubTab:0})} style={this.state.activeClassroomSubTab===0?subTabActiveStyle:null}>
                                <img style={{height:'61px'}} src={require('../../../assets/icons/sub-subject.svg')} alt="subject"/>
                                <div className="light-text semibold" style={this.state.activeClassroomSubTab===0?subTabActiveStyle:null}>Subjects</div>
                            </div>
                            <div className="sub-detail-tab" onClick={()=>this.setState({activeClassroomSubTab:1})} style={this.state.activeClassroomSubTab===1?subTabActiveStyle:null}> 
                                <img style={{height:'61px'}} src={require('../../../assets/icons/sub-book.svg')} alt="subject"/>
                                <div className="light-text semibold" style={this.state.activeClassroomSubTab===1?subTabActiveStyle:null}>Attendance</div>
                            </div>
                            <div className="sub-detail-tab" onClick={()=>this.setState({activeClassroomSubTab:2})} style={this.state.activeClassroomSubTab===2?subTabActiveStyle:null}>
                                <img style={{height:'61px'}} src={require('../../../assets/icons/sub-webinar.svg')} alt="subject"/>
                                <div className={['light-text semibold']} style={this.state.activeClassroomSubTab===2?subTabActiveStyle:null}>Webinars</div>
                            </div>
                            <div className="sub-detail-tab" onClick={()=>this.setState({activeClassroomSubTab:3})} style={this.state.activeClassroomSubTab===3?subTabActiveStyle:null}>
                                <img style={{height:'61px'}} src={require('../../../assets/icons/sub-note.svg')} alt="subject"/>
                                <div className="light-text semibold" style={this.state.activeClassroomSubTab===3?subTabActiveStyle:null}>Students</div>
                            </div>
                            <div className="category-details">
                                {this.state.currentSubjects.map((subject, i)=>(
                                     <SubjectBook 
                                        // onClick={()=>this.props.navigate(4,{subject})}
                                        style={{margin:'30px',height: '130px',display:'inline-flex'}} 
                                        // subjectData={subject.classroom_subjects}
                                        name={subject.subjects.name} 
                                        standard={subject.subjects.standard} 
                                        section={subject.section}
                                        // clickable={true} 
                                        graphic={subject.subjects.graphics}
                                        color={ColorPalette[subject.color_code]} 
                                    />
                                  
                                ))}
                                
                            </div>
                        </div>
                    </div>
                
            </div>
         );
    }
}

class SelectTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <select className="daxta-select" defaultValue={this.props.selected} onChange={(e)=>this.props.onChange(e.target.value)}>
                    {this.props.options.map((option,i)=>(
                        <option  style={{padding:'8px 16px',backgroundColor:'#f1f1f1'}} key={i} value={option.value}>{option.name}</option>
                    ))}
                </select>
            </div>
         );
    }
}


 



class ClassroomRaw extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div style={{padding:'8px',width:'1100px',fontSize:'14px',color:'#5c5c5c',display:'flex',borderBottom:'solid 1px #a2a6bb50'}}>
                <div className="user-check-box" style={{width:'70px'}}><input type="checkbox" /></div>
                <div style={{width:'320px'}}>{this.props.userData.standard}</div>
                <div style={{width:'320px'}}>{this.props.userData.section}</div>
               
            </div>
         );
    }
}
class ClassroomHeaderRaw extends Component {
    state = {  }
    render() { 
       
        return ( 
            <div style={{padding:'8px',width:'1100px',fontSize:'18px',fontWeight:'bold',color:'#29396d',display:'flex',borderBottom:'solid 1px #a2a6bb80'}}>
                <div className="user-check-box" style={{width:'70px'}}><input type="checkbox" /></div>
                <div style={{width:'320px'}}>{'Standard'}</div>
                <div style={{width:'370px'}}>{'section'}</div>
                
                <div>{'Edit'}</div>
            </div>
         );
    }
}


export default ClassRooms;