 import React, { Component } from 'react'
 import { Text, View } from 'react-native'
//  import { StreamService, socketPromise } from '../../../services/stream.service';
//  import { AwaitQueue } from 'awaitqueue';
// import AuthServices from '../../../services/auth.services'
// import { socket } from '../../../services/socket';
// import { JOINED_CLASS, LEFT_CLASS, MESSAGE_IN_CHAT, REQUESTED_FOR_VIDEO_QUESTION } from '../../../constants/activityStrings';
// import AsyncStorage from "@react-native-community/async-storage"
//  const config = require('../../../config/config')

// const classId = 'defaultClass123';
// const HOST = config.host
// const API = config.api

// const ENDPOINT = HOST;
// const WEBINAR = 'http://localhost:9000/primary-stream';
// // const sampleq = {
// //   question: `In Figure, from the top of a solid cone of height 12 cm and base radius
// // 6 cm, a cone of height 4 cm is removed by a plane parallel to the base.
// // Find the total surface area of the remaining solid. `,
// // option1: '543m2',
// // option2: '643m2',
// // option3: '743m2',
// // option4: '8443m2',
// // duration: 220
// // }
// const teacherDetailSample ={
//   id: 0,
//   muted: false,
//   name: "Teacher",
//   status: "JOINED",
//   streamStatus: "NOT_STARTED",
//   thumb: null,
//   videoOn: true,
// }
// const RTCPeerConnectionState  = Object.freeze({
//   closed: "closed",
//   failed: "failed",
//   disconnected: "disconnected",
//   new: "new",
//   connecting:"connecting",
//   connected:"connected"
// });
 export default class liveClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//           windowHeight: window.innerHeight,
//           windowWidth: window.innerWidth,
//           students:[],
//           studentVideos:[],
//           sharinScreen: false,
//           teacherDetails: teacherDetailSample,
//           localStream:null,
//           videoStudentsDetails: [],
//           isMobile: false,
//           teacherStream:null,
//           teacherSound: true,
//           quizWindowShow:false,
//           quizData:{},
//           quizTimer:10,
//           myVideoCallStatus: 'None',
//           teacherStreamStatus: 'offline',
//           loadingStream:true,
//           loadingMessage: 'Loading...',
//           requesting: false,
//           studentVideosStatus: {}

//          }
        
        
//         this.liveStudents=[];
//         this.studentMap = new Map()
//         this.queue = new AwaitQueue()
//         this.device = new Device
//         this.chat = React.createRef();
//         this.video = React.createRef();
//         this.myVideo = React.createRef();
//         this.studentVideo = React.createRef();
//         this.studentVideo2 = React.createRef();        
//         this.studentVideo3 = React.createRef();        
//         this.studentVideo4 = React.createRef();        
//         this.videoSlots=[];
//         this.studentVideos=[];
//         this.studentVideosRef={};
//         this.videoSlotMap={};
//         this.streamService = new StreamService()
//         this.endStudentCall = this.endStudentCall.bind(this)        
//         this.getLiveStudents = this.getLiveStudents.bind(this)
//         this.getStudents = this.getStudents.bind(this)
//         this.mute = this.mute.bind(this)
//         this.unMute = this.unMute.bind(this)
//         this.pauseVideo = this.pauseVideo.bind(this)
//         this.resumeVideo = this.resumeVideo.bind(this)
//     }
//     socket = socket;
//     // webinarSocket = io(WEBINAR)
//     async componentDidMount(){
//         // this.streamService.setUpSocket()
//         window.addEventListener('beforeunload', this.onUnmount, false);
//         const user = await AsyncStorage.getItem('user');
//         this.user = JSON.parse(user);
//         const institute = AsyncStorage.getItem('institute');
//         this.institute = JSON.parse(institute);
//         const student = AsyncStorage.getItem('student');
//         if(student){
//             this.student = JSON.parse(student);
//             console.log('H student loaded',this.student)
//         }
        
        
//         this.socket.request = socketPromise(this.socket)
//         const classInfo = this.props.classData
//         this.classData = classInfo
//         this.classHash = classInfo.unique_hash
//         this.myStreamId = this.classHash+'-'+this.student.user_id
//         this.getAllStudents()
//         // this.streamService.createStudentStream(this.classHash,this.student.id,this.user)
//         // console.log(this.props)
//         await this.loadDevice();
//         // await this.consumeVideo(this.classHash)
       
        

//         /////////////////////////////////////////////////////////

        

//         this.setupClassSocket()
//         await this.initialize()
       
//         // this.institute={name:'crescent high school'}
//         // this.user={name:'Zeeshan',id:1}
//         await this.getLiveStudents()
//         await this.updateLiveStudentsInfo()
//         await this.updateTeacherInfo()
        
        

//         window.addEventListener('resize', this.handleResize);
//         // this.consumeVideo(this.classHash)
//         await this.getTeacherDetails()
//         this.getStudents()
//         this.checkOnline()
//     }
//     componentWillUnmount(){
//       window.removeEventListener('beforeunload', this.onUnmount, false);
//       this.onUnmount()
//     }
//     onUnmount(){
//       this.videoSlotMap={}
//       this.disconnectStudent()
//       this.removeSocketEvents()
//       this.clearTracks();
//     }
//     clearTracks=()=>{
//       if(this.state.localStream){
//         this.state.localStream.getTracks().forEach((track)=>{
//           track.stop()
//         })
//       }
//       if(this.state.teacherStream){
//         this.state.teacherStream.getTracks().forEach((track)=>{
//           track.stop()
//         })
//       }
      
//     }
//     getAllStudents(){
//       AuthServices.getAllStudentsOfClassroom(this.props.classData.classroom.id || this.props.classData.classroom_id).then((students)=>{
//         console.log('students..',students)
//         for(let s of students){
//           this.studentMap.set(s.user_id,s.user)
//         }
//         console.log('student map',this.studentMap)
//         this.forceUpdate()
//       }).catch(e=>{
//         console.warn(e)
//       })
//     }
//     checkOnline=()=>{
//       this.onlineChecker = setTimeout(this.doOnlineCheck, 50000);
//     }
//     doOnlineCheck=()=>{
//       // console.log(navigator.onLine)
//       if(!navigator.onLine){
//         this.handleOffline()
//       }else{
//         this.checkOnline()
//       }
//     }
//     handleOffline=()=>{
//       alert('you are offline..')
//       this.onUnmount()
//       this.props.navigate(22)
//     }
//     getTeacherDetails=async ()=>{
//       this.teacherUser = await AuthServices.getUserInfoByUserId(this.props.classData.teacher.user.id);
//       console.log('teacher user',this.teacherUser)
//     }
//     setupClassSocket(){
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: JOINED_CLASS
//       }
//       AuthServices.addActivityLog(payload)
//       const userDetails = {
//           name: this.user.name,
//           userId: this.user.id,
//           room: this.classHash,
//           type: 'student',
//           typeId: this.student.id
//       }
//       this.userDetails = userDetails
//       const strdata = {
//         streamId:this.classHash,
//         user: this.user
//       }
//       // let joined = await this.streamService.joinStream(strdata)
//       // console.log(joined)
//       this.socket.on('disconnect',()=>{
//         alert('you are offline!')
//         this.onUnmount()
//         this.props.navigate(22)
//       })
//       this.socket.emit('joinRoom',userDetails)
      
//       this.socket.on('joinedRoom',data=>{
//           this.addChatNotification(data,'joined')
//           if(data.type === 'teacher'){
//             this.setState({loadingMessage:'Teacher Joined the class...',loadingStream:false})            
//           }
//           this.getStudents()
//       });
//       this.socket.on('reconnect', () => {
//         this.socket.emit('joinRoom',this.userDetails)
//       })
//       this.socket.on('leftRoom',data=>{ console.log(data)
//         if(data.type === 'teacher'){
//           this.setState({loadingMessage:'Teacher Left the class...',loadingStream:true,teacherStream:null})
//           this.addChatNotification(data,'left')
//         }else{
//           this.addChatNotification(data,'left')
//           if(data.isLiveStudent){
//             if(data.streamId){
//               this.endOtherStudentVideo(data.streamId)
//             }
//             this.getLiveStudents()
//           }
//           this.getStudents()
//         }
        
//       });
//       this.socket.on('message',data=>{
//           // console.log(data)
//       })
//       this.socket.on('lecture-ended',data=>{
//         this.onUnmount()
//         this.props.navigate(12)
//       });
//       this.socket.on('lecture-ended-from-backend',data=>{
//         this.onUnmount()
//         this.props.navigate(12)
//       });
//       this.socket.on('teacher-muted',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-unmuted',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-video-on',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-video-off',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-screeShare-on',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-screenShare-off',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('student-muted',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-unmuted',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-video-on',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-video-off',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('newMessage',data=>{
//           this.receiveMessage(data)
//       });
//       this.socket.on('new-quiz',data=>{
//         console.log('new quiz',data)
//         this.showQuiz(data)
//       });
//       this.socket.on('new-student-video-allowed',data=>{
//         console.log('new video',data,this.student.user_id)
//         this.addOtherStudentVideo(data)
//       });
//       this.socket.on('requested-video-allowed',data=>{
//         console.log('Accepted video!',data,this.student.user_id)
//         if(data.userId === this.student.user_id){
//           this.setState({myVideoCallStatus:'Accepted',requesting:false})
//           this.startStream(data)
//         }
        
//       });
//       this.socket.on('other-student-video-ended',data=>{
//         console.log('end video',data,this.student.user_id)
//         this.removeOtherStudentVideo(data)
//       });
//       this.socket.on('producer-disconnected',data=>{
//         // alert('teacher disconnected');
//         // console.log(data)
//         // this.endMyStream(this.streamService.studentStream.id)
//         this.updateTeacherInfo()
//         this.setState({loadingMessage:'Teacher left...',loadingStream:true,teacherStream:null})
//       })
//       this.streamService.socket.on('producer-disconnected',data=>{
//         // alert('teacher disconnected');
//         // console.log(data)
//         // this.endMyStream(this.streamService.studentStream.id)
//         // this.setState({loadingMessage:'Teacher stream disconnected...',loadingStream:true,teacherStream:null})
//       }) 

//       this.streamService.socket.on('producer-rejoin',data=>{
//         console.log('teacher back online');
//         this.updateTeacherInfo()
//         this.setState({loadingMessage:'Teacher back online...',loadingStream:true})
//         console.log(data)
//         this.consumeVideo()
//       })
      
      
//       this.streamService.socket.on('disconnect-all-students',users=>{
//         console.log(users+' disconnected')          
//         this.getLiveStudents()
//       })
//     }
//     async removeSocketEvents(){
//       console.log('removing sockets')
//       this.socket.off('message')
//       this.socket.off('disconnect')      
//       this.socket.off('joinedRoom');
//       this.socket.off('lecture-ended');
//       this.socket.off('reconnect');
//       this.socket.off('leftRoom');
//       this.socket.off('newMessage');
//       this.socket.off('teacher-muted');
//       this.socket.off('teacher-unmuted');
//       this.socket.off('teacher-video-on');
//       this.socket.off('teacher-video-off');
//       this.socket.off('student-muted')
//       this.socket.off('student-unmuted')
//       this.socket.off('student-video-on')
//       this.socket.off('student-video-off')
//       this.socket.off('student-answered-quiz')
//       this.socket.off('student-video-request');
//       this.socket.off('new-student-video-allowed');
//       this.socket.off('other-student-video-ended');      
//       this.socket.off('new-quiz');      
//       this.socket.off('requested-video-allowed');  
//       this.socket.off('producer-disconnected');      
            
        
//       this.streamService.socket.off('producer-rejoin')      
//       this.streamService.socket.off('producer-disconnected')      
//       this.streamService.socket.off('disconnect-all-students')      
//     }
//     disconnectStudent(){
//       console.log('disconnecting...student')
//       this.endStudentCall(this.myStreamId)
//       this.socket.emit('leaveRoom',this.classHash);
//       this.streamService.disconnectStream({streamId: this.myStreamId, type: 'student'})
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: LEFT_CLASS
//       }
//       AuthServices.addActivityLog(payload)
//       // this.streamService.socket.disconnect()
//       // this.streamService.secondarySocket.disconnect()
//       // this.socket.disconnect()
//     }
//     handleResize=()=>{
//       this.setState({windowHeight: window.innerHeight, windowWidth: window.innerWidth})
//       // console.log('H - ',window.innerHeight,'W - ',window.innerWidth)
//     }
//     async getStudents(){
//       this.socket.emit('get-all-students',{room:this.classHash},(data)=>{
//         console.log(' STUDENTS ',data)
//         this.setState({students: data.students})
//       })
//     }
//     async updateTeacherInfo(){
//       this.socket.emit('get-teacher-details',{room:this.classHash},(data)=>{
//         console.log(' teacher details ',data)
//         if(data){
//           this.setState({teacherDetails: data})
//         }
        
//       })
//     }
//     addChatNotification=(data,activity)=>{
//         this.chat.current.notifyAll(data.name,activity)
//         this.forceUpdate()
//     }
//     sendMessageToChat=(message)=>{
//         const data={
//             from: this.user.name,
//             userId: this.user.id,
//             message: message,
//             room: this.classHash
//         }
//         this.socket.emit('sendMessageToChat',data)
//         const payload ={
//           by_type: 'student',
//           by_type_id: this.student.id,
//           activity: MESSAGE_IN_CHAT
//         }
//         AuthServices.addActivityLog(payload)
//     }
//     receiveMessage=(data)=>{
//         this.chat.current.receiveMessage(data.from,data.userId,data.message)
//         this.forceUpdate()
//     }
//     showQuiz=(quizData)=>{
//       this.setState({quizWindowShow:true,quizData})
//     }
//     toggleQuiz=(bool)=>{
//       this.setState({quizWindowShow:bool})
//     }
//     submitQuizAnswer=(answerData)=>{
//       const data={
//         room: this.classHash,
//         selectedOption: answerData.selectedOption
//       }
//       this.socket.emit('quiz-answered',data)
//     }
//     addOtherStudentVideo=(data)=>{
//       if(data.userId !== this.student.userId || true){
//         this.getLiveStudents()
//         // this.consumeOtherStudentVideo(data)
//       }      
//     }
//     removeOtherStudentVideo=(data)=>{ 
//       console.log('removing')
//       if(data.streamId !== this.myStreamId){
//         this.endOtherStudentVideo(data.streamId)
//       }else{
//         this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== data.streamId)
//         delete this.videoSlotMap[data.streamId]
//         this.updateStudentVideos()
//         this.setState({myVideoCallStatus:'None'})
//       }      
//     }
//     loadDevice= async ()=>{
//       if(this.device.loaded){
//         return;
//       }
//       let {rtpCapabilities} = await this.streamService.getCapabilities();
//       this.rtpCapabilities = rtpCapabilities
//       await this.device.load({
//           routerRtpCapabilities: this.rtpCapabilities
//       });
//     }
    
//     initialize=async ()=>{
//       const result = await this.streamService.socket.request('stream-status',{streamId: this.classHash});
//       if(result.status.toLowerCase() === 'started'){
//         await this.consumeVideo();
//       }else{
//         if(result.init){
//           this.setState({loadingMessage:'Teacher has not started the lecture yet!'})
//         }else{
//           this.setState({loadingMessage:'Teacher is not connected, stay tuned!'})
//         }
        
//         console.log('No stream available')
//         return false
//       }
//     }
  
//   async getLiveStudents(){ console.log('getting live students...')
//       const liveStudents  = await this.socket.request('get-live-students',{room: this.classHash});
//       this.videoSlots=[];
//       this.state.studentVideos=[]
//       // console.log(liveStudents,this.videoSlotArray)
//       this.liveStudents = []
//       const studentVideosStatus ={}
//       for await(let l of liveStudents.liveStudents){
//         // this.queue.push(async () => {
//           let liveStudent = l
//           if(l.userId === this.student.user_id){
//             this.setState({myVideoCallStatus:'Accepted'})
//           }
//           if(this.videoSlotMap[liveStudent.streamId] === undefined){
//             let data={
//               studentStreamId :liveStudent.streamId,
//               userId: liveStudent.userId,
//               streamId: this.classHash,
              
//             }   
//             studentVideosStatus[liveStudent.streamId] = {connection:'connecting'}
            
//             this.videoSlotMap[liveStudent.streamId] = {liveStudent,local:false,stream:null}
//             if(liveStudent.userId === this.student.user_id){

//             }else{
//               const newStream = await this.consumeOtherStudentVideo(data)
//               this.videoSlotMap[liveStudent.streamId].stream = newStream
//             }
                         
//             // this.videoSlots.push(liveStudent.streamId)              
//             // this.state.studentVideos.push(<StudentVideo endStudentCall={(sStreamId)=>this.endStudentCall(sStreamId)} getLiveStudents={()=>this.getLiveStudents()} streamData = {liveStudent} key={liveStudent.streamId} stream={newStream}/>)
              
//           }   
//           this.liveStudents.push(l)
//           console.log('student video...',this.liveStudents.length)
          
//         // })
//       }
      
//       // console.log(this.state.studentVideos)
//       // this.liveStudents = this.liveStudents.filter()
//       this.updateStudentVideos()
//   }
//   updateStudentVideos=()=>{
//     for(let l of this.liveStudents){
//       this.studentVideosRef[l.streamId] = React.createRef();
//     }
//     const studentVideos = this.liveStudents.map((liveStudent,index)=>      
//       liveStudent.userId === this.student.user_id?
//       <MyVideo 
//         ref={this.myVideo} 
//         endStudentCall={(sStreamId)=>this.endStudentCall(sStreamId)} 
//         mute={this.mute} 
//         unMute={this.unMute} userDetails={this.user} 
//         streamData = {liveStudent}  
//         key={liveStudent.streamId} 
//         pauseVideo={this.pauseVideo} 
//         resumeVideo={this.resumeVideo} 
//         stream={this.state.localStream}
//       />:
//       <StudentVideo 
//         ref={this.studentVideosRef[liveStudent.streamId]} 
//         studentData={this.studentMap.get(liveStudent.userId)} 
//         status={this.state.studentVideosStatus} 
//         getLiveStudents={()=>this.getLiveStudents()} 
//         streamData = {this.videoSlotMap[liveStudent.streamId].liveStudent} 
//         key={liveStudent.streamId} 
//         stream={this.videoSlotMap[liveStudent.streamId].stream}
//       />
//      )
//      this.setState({studentVideos})
//      console.log('updating student videos')
//      this.updateLiveStudentsInfo()
//     //  this.forceUpdate()
//   }
//   async updateLiveStudentsInfo(){
//     this.socket.emit('get-students-details',{room:this.classHash},(data)=>{
//       console.log(' video students details ',data)
//       if(data){
//         this.setState({videoStudentsDetails: data})
//       }
//       for(let i in data){
//         let studentVideo = null;
//         if(this.myStreamId === data[i].streamId){
//           studentVideo = this.myVideo.current
//           // return false
//         }else{
//           studentVideo = this.studentVideosRef[data[i].streamId].current;
//         }        
//         console.log(this.studentVideosRef[data[i].streamId],studentVideo)
//         if(studentVideo){
//           studentVideo.updateVideoInfo(data[i])            
//         }          
//       }   
//     })
//   }
//     async consumeVideo() {
//       console.log('connecting stream...')
//         try {
//           const transportData = await this.streamService.createConsumerTransport({
//             streamId: this.props.classData.unique_hash,
//             consumerId: this.student.user_id
//           });
//           this.rcvTransport = this.device.createRecvTransport(transportData);
//           this.rcvTransport.on(
//             'connect',
//             async ({ dtlsParameters }, callback, errback) => { 
//               const connected = await this.streamService.connectConsumerTransport({
//                 dtlsParameters,
//                 streamId: this.props.classData.unique_hash,
//                 consumerId: this.student.user_id
//               });
//               if(!connected){
//                 return;
//               }
//               callback();
//             }
//           );
    
//           this.rcvTransport.on('connectionstatechange', state => {
//             console.log(`teacher rcv transport state:${state}`);
//             const loadingMessage = `${state} ...`;
//             let loadingStream = true
//             if(state ==='connected'){loadingStream = false}else{ loadingStream = true}
//             this.setState({teacherStreamStatus:state,loadingMessage,loadingStream})
//           });
    
//           const consumerData = await this.streamService.consumeMedia({
//             rtpCapabilities: this.device.rtpCapabilities,
//             streamId: this.props.classData.unique_hash,
//             consumerId: this.student.user_id
            
//           });
//           // console.log('ccc',consumerData)
//           if(consumerData.id){
//             this.videoConsumer = await this.rcvTransport.consume({
//               id: consumerData.id,
//               producerId: consumerData.producerId,
//               kind: consumerData.kind,
//               rtpParameters: consumerData.rtpParameters
//             });
//           }
      
//           this.audioConsumer = await this.rcvTransport.consume({
//             id: consumerData.audioId,
//             producerId: consumerData.audioProducerId,
//             kind: consumerData.audioKind,
//             rtpParameters: consumerData.auidoRtpParameters,
//           });
//           let result = await this.streamService.resumeProducer({
//             streamId: this.classHash,
//             consumerId: this.student.user_id
//           });
//           const stream = new MediaStream();
//           stream.addTrack(this.videoConsumer.track);
//           stream.addTrack(this.audioConsumer.track);
//           // console.log('stream',stream)
//           // console.log('vidconsumer',this.videoConsumer)
//           // console.log('audio consumer',this.audioConsumer)
//           this.setState({teacherStream:stream})
//           this.video.current.srcObject = this.state.teacherStream;
          
//           // console.log('result',resul)
//           this.video.current.play();
//           this.video.current.controls =false;
//         } catch (error) {
//         //   this.state = await this.streamService.getStreamState(this.classHash);
//           console.error(error.message);
//         }
//       }
//     async requestTeacherForVideo(){
//       if(this.state.studentVideos.length > 3){
//         alert('more than 4 students are not allowed')
//         return
//       }
//         const videoRequestData = {
//           room: this.classHash,
//           studentStreamId: this.classHash+'-'+this.student.user_id,
//           studentId: this.student.id,
//           userId: this.student.user_id,
//           requestedBy: this.user.name
//         }
        
//         this.socket.emit('student-requested-video',videoRequestData);
        
//       this.setUpLocalStream()
//       this.setState({myVideoCallStatus:'Requested',requesting:true})
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: REQUESTED_FOR_VIDEO_QUESTION
//       }
//       AuthServices.addActivityLog(payload)
//       setTimeout(()=>{
//         if(this.state.myVideoCallStatus !== 'Accepted')
//         this.setState({myVideoCallStatus:'None',requesting:false})
//       },10000)
//     }
//     teacherSoundToggle(bool){
//       this.video.current.muted = !bool;
//       this.setState({teacherSound: bool})
//     }


//     async startStream(streamData) {
//       try {
    
//         this.setState({myVideoCallStatus:'Accepted'})   
//         await this.loadDevice();
//         const transportData = await this.streamService.startStream({streamId: this.myStreamId});
//         this.sendTransport = this.device.createSendTransport(transportData);
  
//         this.sendTransport.on(
//           'connect',
//           async ({ dtlsParameters }, callback, errback) => { 
//             try {
//               const connected  = await this.streamService.connectProducerTransport({
//                 dtlsParameters,
//                 streamId: this.myStreamId
//               });
//               if(!connected){
//                 throw new Error('Could not connect producer transport');
//               }
//               callback();
//             } catch (error) {
//               console.error(error);
//             }
//           }
//         );
//       this.sendTransport.on(
//           'produce',
//           async ({ kind, rtpParameters }, callback, errback) => {
//             try{
//               const data = await this.streamService.sendProduceNotification({
//                 streamId: this.myStreamId,
//                 kind,
//                 rtpParameters
//               });
//               if(!data) throw new Error('Produce media failed');
//               // console.log(data);
//               callback({id:data.producerId});
//             }catch (error){
//               console.error(error);
//             }
//           }
//         );
//       this.sendTransport.on('connectionstatechange', async state => {
//         console.log(`Send Transport ${state}`);
//           this.setState({myStreamStatus: state})
//           if(state === RTCPeerConnectionState.failed || state === RTCPeerConnectionState.disconnected){
//           //  await this.startStream();
//           }
//         });
  
//         const videoTrack = this.state.localStream
//           .getVideoTracks()
//           .reduce((track, elem) => (track = elem), null);
//         const audioTrack = this.state.localStream
//           .getAudioTracks()
//           .reduce((track, elem) => (track = elem), null);
  
//         this.videoProducer = await this.sendTransport.produce({
//           track: videoTrack,
//         });

//         this.videoProducer.on('transportclose', () => {
//           console.log(`Send Transport disconnection`);
//         });
//         await Promise.resolve(this.socket.emit('new-student-video',streamData));
//         this.audioProducer = await this.sendTransport.produce({
//           track: audioTrack,
//         });
//       } catch (error) {
//       //   this.state = await this.streamService.getStreamState(this.stream.id);
//         console.error(error.message);
//       }
//     }
//     endStudentCall=(sStreamId)=>{ 
//       const sStreamData = this.videoSlotMap[sStreamId]
//       // console.log(sStreamData)
//       const stopData ={
//         streamId: sStreamId
//       }
//       const sdata={
//         room: this.classHash,
//         userId: this.student.user_id
//       }
//       this.streamService.stopStream(stopData).then((res)=>{ 
//         if(res.ended){ 
          
//           this.videoSlots = this.videoSlots.filter(vids=> vids !== sStreamId)
//           this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== sStreamId)
//           delete this.videoSlotMap[sStreamId]
//           // console.log(this.videoSlots)
          
//           this.socket.emit('student-video-call-ended',sdata)
//           this.setState({myVideoCallStatus:'None'})
//           // this.getLiveStudents()
//           // this.forceUpdate()
//           this.updateStudentVideos()
//         }else{
//           this.getLiveStudents()
//         }
        
//       })
//     }
//     async consumeOtherStudentVideo(sStreamData) {
//       const sStreamId = sStreamData.studentStreamId
//       console.log('connecting student....',sStreamId)
     
//       try {
        
//         // const { rtpCapabilities } = await this.streamService.getCapabilities();
//         if (!this.device.loaded) {
//           await this.device.load({
//             routerRtpCapabilities: this.rtpCapabilities
//           });
//         }
  
//         if (
//           !this.device.canProduce('video') ||
//           !this.device.canProduce('audio')
//         ) {
//           // this.showError('Video or Audio is not suppoerted');
//         }
//         const transportData = await this.streamService.createConsumerTransport({
//           streamId: sStreamId,
//           consumerId: this.student.user_id
//         });
//         console.log('transport data',transportData)
//         const rcvTransport = this.device.createRecvTransport(transportData);
//         // this.videoSlotMap[sStreamId].receiveTransport = rcvTransport;
//         rcvTransport.on(
//           'connect',
//           async ({ dtlsParameters }, callback, errback) => {
//             await this.streamService.connectConsumerTransport({
//               dtlsParameters,
//               streamId: sStreamId,
//               consumerId: this.student.user_id
//             });
//             console.log('cconnnected')
//             callback();
//           }
//         );
  
//         rcvTransport.on('connectionstatechange', state => {
//           const studentVideosStatus = {...this.state.studentVideosStatus}
//           studentVideosStatus[sStreamId].connection = state
//           this.setState({studentVideosStatus})
//           console.log(`Student rcv transport state:${state}`);
//         });
  
//         const consumerData = await this.streamService.consumeMedia({
//           rtpCapabilities: this.device.rtpCapabilities,
//           consumerId: this.student.user_id,
//           streamId: sStreamId
          
//         });
//         // console.log(consumerData)
//         let videoConsumer = await rcvTransport.consume({
//           id: consumerData.id,
//           producerId: consumerData.producerId,
//           kind: consumerData.kind,
//           rtpParameters: consumerData.rtpParameters
//         });
  
//         let audioConsumer = await rcvTransport.consume({
//           id: consumerData.audioId,
//           producerId: consumerData.audioProducerId,
//           kind: consumerData.audioKind,
//           rtpParameters: consumerData.auidoRtpParameters,
//         });
//         this.videoSlotMap[sStreamId].videoConsumer = videoConsumer;
//         this.videoSlotMap[sStreamId].audioConsumer = audioConsumer;
//         // this.setState({sStreamId})
//         const stream = new MediaStream();
//         stream.addTrack(videoConsumer.track);
//         stream.addTrack(audioConsumer.track);
        
//         this.videoSlotMap[sStreamId].stream = stream;
//         let result = await this.streamService.resumeProducer({
//           streamId: sStreamId,
//           consumerId: this.student.user_id
//         });
//         // console.log(this.videoSlotMap)
//         return stream;
       
//         this.forceUpdate()
        
//         //  this.video.current.showControls();
//       } catch (error) {
//       //   this.state = await this.streamService.getStreamState(this.classHash);
//         console.error(error.message);
//       }
//     }
//     async endMyStream(sStreamId){      
//       const data={
//         streamId: this.props.classData.unique_hash,
//         sStreamId: sStreamId,
//         userId: this.user.id
//       }
//       let ended = await this.streamService.endMySecondaryStream(data)
//     }
//     endOtherStudentVideo(sStreamId){
//       console.log('removed')
//       this.getLiveStudents()
//       this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== sStreamId)
//       delete this.videoSlotMap[sStreamId] 
         
//       this.updateStudentVideos()
//     }
//     setUpLocalStream=async ()=>{
//       const myStream = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           noiseSuppression: true,
//           echoCancellation: true,
//           autoGainControl: true
//         },
//         video: {
//           frameRate: {
//             min: 1,
//             max: 20
//           },
//           aspectRatio: 4 / 3
//         }
//       });

//       this.setState({localStream: myStream});
//       console.log(this.myVideo)
//       if(this.myVideo.current){
//         this.myVideo.current.updateStream(myStream)
//       }
      
//     }
//     toggleFullScreen=(bool)=>{
//       // this.setState({fullScreen: bool})
//       if(bool){
//         if(this.video.current.requestFullScreen){
//           this.video.current.requestFullScreen();
//         } else if(this.video.current.webkitRequestFullScreen){
//           this.video.current.webkitRequestFullScreen();
//         } else if(this.video.current.mozRequestFullScreen){
//           this.video.current.mozRequestFullScreen();
//         }
//       }else{
//         if(document.fullscreen){
//           document.exitFullscreen()
//         }
        
//       }        
//     }
//     mute=async ()=>{
//       try {
//         console.log('muting...')
//         // const status = await this.streamService.startRecording({ streamId: this.stream.id });
//         // this.recordingStarted = status.started;
//         const audioTrack = this.state.localStream.getAudioTracks()[0];
//         audioTrack.enabled = false;
//         await this.audioProducer.replaceTrack({ track: audioTrack });
//         this.setState({muted:true});
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-muted',data)
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     unMute=async ()=>{
//       try {
        
//         // const status = await this.streamService.startRecording({ streamId: this.stream.id });
//         // this.recordingStarted = status.started;
//         const audioTrack = this.state.localStream.getAudioTracks()[0];
//         audioTrack.enabled = true;
//         await this.audioProducer.replaceTrack({ track: audioTrack });
//         this.setState({muted:false});
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-unmuted',data)
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     pauseVideo= async ()=>{
//       try { 
//         console.log('pausing...')
//         this.videoProducer.pause()
//         this.setState({teacherVideoEnabled:false})
//         this.state.localStream.getVideoTracks().forEach((track)=>{
//             track.stop()
//           })
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-video-off',data)
//       }catch(e){
//         console.info(e)
//       }
//     }
//     resumeVideo= async ()=>{
//       try { 
        
        
//         this.setState({teacherVideoEnabled:true})
//         await this.setUpLocalStream();
//         const videoTrack = this.state.localStream.getVideoTracks()[0];
//         this.videoProducer.replaceTrack({ track: videoTrack });
//         this.videoProducer.resume()
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-video-on',data)
//       }catch(e){
//         console.info(e)
//       }
//     }
//     videoOnclick(){
//       if(this.isMobile){
//         this.setState({showControls:!this.state.showControls})
//       }
//     }
     render() {
         return (
             <View>
                 <Text> textInComponent </Text>
             </View>
         )
     }
 }
 

// import React, { Component } from 'react';
// import ChatBox from './chat-box';
// // import io from "socket.io-client";

// import { Device } from 'mediasoup-client';
// import { StreamService, socketPromise } from '../../../services/stream.service';
// import QuizPopup from './quiz-popup';
// import { Mic, MicOff, CallEnd, PresentToAll,VolumeOff, VolumeUp, Videocam, VideocamOff, PanToolOutlined, FullscreenExit, Fullscreen } from '@material-ui/icons';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import {ReactComponent as UserAccountIcon} from '../../../assets/icons/user-account-box.svg';
// import './webinar.scss'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from 'react-loader-spinner'
// import { AwaitQueue } from 'awaitqueue';
// import AuthServices from '../../../services/auth.services'
// import AudioAnalyser from '../../../components/AudioAnalyzer';
// import VideoLessDisplay from '../../../components/VideoLessDisplay';
// import { socket } from '../../../services/socket';
// import { JOINED_CLASS, LEFT_CLASS, MESSAGE_IN_CHAT, REQUESTED_FOR_VIDEO_QUESTION } from '../../../constants/activityStrings';
// import DaxtaButton from '../../../components/DaxtaButton/DaxtaButton';
// const config = require('../../../config/config')

// const classId = 'defaultClass123';
// const HOST = config.host
// const API = config.api

// const ENDPOINT = HOST;
// const WEBINAR = 'http://localhost:9000/primary-stream';
// // const sampleq = {
// //   question: `In Figure, from the top of a solid cone of height 12 cm and base radius
// // 6 cm, a cone of height 4 cm is removed by a plane parallel to the base.
// // Find the total surface area of the remaining solid. `,
// // option1: '543m2',
// // option2: '643m2',
// // option3: '743m2',
// // option4: '8443m2',
// // duration: 220
// // }
// const teacherDetailSample ={
//   id: 0,
//   muted: false,
//   name: "Teacher",
//   status: "JOINED",
//   streamStatus: "NOT_STARTED",
//   thumb: null,
//   videoOn: true,
// }
// const RTCPeerConnectionState  = Object.freeze({
//   closed: "closed",
//   failed: "failed",
//   disconnected: "disconnected",
//   new: "new",
//   connecting:"connecting",
//   connected:"connected"
// });
// const isMobile = ()=>{
//   let width = window.innerWidth;
//     let height = window.innerHeight;
//     const ar = width / height;
//     let small = false;
//     if (width < 550) {
//       small = true;
//     }
//     if (width < 1000 && ar > 4 / 3) {
//       small = true;
//     }
//     return small
// }
// class LiveClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//           windowHeight: window.innerHeight,
//           windowWidth: window.innerWidth,
//           students:[],
//           sharinScreen: false,
//           teacherDetails: teacherDetailSample,
//           localStream:null,
//           videoStudentsDetails: [],
//           isMobile: false,
//           teacherStream:null,
//           teacherSound: true,
//           quizWindowShow:false,
//           quizData:{},
//           quizTimer:10,
//           myVideoCallStatus: 'None',
//           teacherStreamStatus: 'offline',
//           loadingStream:true,
//           loadingMessage: 'Loading...',
//           requesting: false,
//           studentVideosStatus: {}

//          }
        
        
//         this.liveStudents=[];
//         this.studentMap = new Map()
//         this.queue = new AwaitQueue()
//         this.device = new Device
//         this.chat = React.createRef();
//         this.video = React.createRef();
//         this.myVideo = React.createRef();
//         this.studentVideo = React.createRef();
//         this.studentVideo2 = React.createRef();        
//         this.studentVideo3 = React.createRef();        
//         this.studentVideo4 = React.createRef();        
//         this.videoSlots=[];
//         this.studentVideos=[];
//         this.studentVideosRef={};
//         this.videoSlotMap={};
//         this.streamService = new StreamService()
//         this.endStudentCall = this.endStudentCall.bind(this)        
//         this.getLiveStudents = this.getLiveStudents.bind(this)
//         this.getStudents = this.getStudents.bind(this)
//         this.mute = this.mute.bind(this)
//         this.unMute = this.unMute.bind(this)
//         this.pauseVideo = this.pauseVideo.bind(this)
//         this.resumeVideo = this.resumeVideo.bind(this)
//     }
//     socket = socket;
//     // webinarSocket = io(WEBINAR)
//     async componentDidMount(){
//         // this.streamService.setUpSocket()
//         const user = AsyncStorage.getItem('user');
//         this.user = JSON.parse(user);
//         const institute = localStorage.getItem('institute');
//         this.institute = JSON.parse(institute);
//         const student = localStorage.getItem('student');
//         if(student){
//             this.student = JSON.parse(student);
//             console.log('H student loaded',this.student)
//         }
        
        
//         this.socket.request = socketPromise(this.socket)
//         const classInfo = this.props.classData
//         this.classData = classInfo
//         this.classHash = classInfo.unique_hash
//         this.myStreamId = this.classHash+'-'+this.student.user_id
//         this.getAllStudents()
//         // this.streamService.createStudentStream(this.classHash,this.student.id,this.user)
//         // console.log(this.props)
//         await this.loadDevice();
//         // await this.consumeVideo(this.classHash)
       
        

//         /////////////////////////////////////////////////////////

        

//         this.setupClassSocket()
//         await this.initialize()
       
//         // this.institute={name:'crescent high school'}
//         // this.user={name:'Zeeshan',id:1}
//         await this.getLiveStudents()
//         await this.updateLiveStudentsInfo()
//         await this.updateTeacherInfo()
        
        

//         window.addEventListener('resize', this.handleResize);
//         // this.consumeVideo(this.classHash)
//         await this.getTeacherDetails()
//         this.getStudents()
//         this.checkOnline()
//     }
//     componentWillUnmount(){
//       this.videoSlotMap={}
//         this.disconnectStudent()
//         this.removeSocketEvents()
//         this.clearTracks();
//     }
//     clearTracks=()=>{
//       if(this.state.localStream){
//         this.state.localStream.getTracks().forEach((track)=>{
//           track.stop()
//         })
//       }
//       if(this.state.teacherStream){
//         this.state.teacherStream.getTracks().forEach((track)=>{
//           track.stop()
//         })
//       }
      
//     }
//     getAllStudents(){
//       AuthServices.getAllStudentsOfClassroom(this.props.classData.classroom_id).then((students)=>{
//         console.log('students..',students)
//         for(let s of students){
//           this.studentMap.set(s.user_id,s.user)
//         }
//         console.log('student map',this.studentMap)
//         this.forceUpdate()
//       }).catch(e=>{
//         console.warn(e)
//       })
//     }
//     checkOnline=()=>{
//       this.onlineChecker = setTimeout(this.doOnlineCheck, 50000);
//     }
//     doOnlineCheck=()=>{
//       // console.log(navigator.onLine)
//       if(!navigator.onLine){
//         this.handleOffline()
//       }else{
//         this.checkOnline()
//       }
//     }
//     handleOffline=()=>{
//       alert('you are offline..')
//       this.disconnectTeacher()
//       this.props.navigate(12)
//     }
//     getTeacherDetails=async ()=>{
//       this.teacherUser = await AuthServices.getUserInfoByUserId(this.props.classData.teacher.user.id);
//       console.log('teacher user',this.teacherUser)
//     }
//     setupClassSocket(){
//       const userDetails = {
//           name: this.user.name,
//           userId: this.user.id,
//           room: this.classHash,
//           type: 'student',
//           typeId: this.student.id
//       }
//       const strdata = {
//         streamId:this.classHash,
//         user: this.user
//       }
//       // let joined = await this.streamService.joinStream(strdata)
//       // console.log(joined)
//       this.socket.on('disconnect',()=>{
//         // alert('you are offline..')
//         this.disconnectStudent()
//         // this.props.navigate(12)
//       })
//       this.socket.emit('joinRoom',userDetails)
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: JOINED_CLASS
//       }
//       AuthServices.addActivityLog(payload)
//       this.socket.on('joinedRoom',data=>{
//           this.addChatNotification(data,'joined')
//           if(data.type === 'teacher'){
//             this.setState({loadingMessage:'Teacher Joined the class...',loadingStream:false})            
//           }
//           this.getStudents()
//       });
//       this.socket.on('leftRoom',data=>{
//         if(data.type === 'teacher'){
//           this.setState({loadingMessage:'Teacher Left the class...',loadingStream:true,teacherStream:null})
//           this.addChatNotification(data,'left')
//         }else{
//           this.addChatNotification(data,'left')
//           if(data.isLiveStudent){
//             if(data.streamId){
//               this.endOtherStudentVideo(data.streamId)
//             }
//             this.getLiveStudents()
//           }
//           this.getStudents()
//         }
        
//       });
//       this.socket.on('message',data=>{
//           // console.log(data)
//       })
//       this.socket.on('teacher-muted',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-unmuted',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-video-on',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-video-off',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-screeShare-on',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('teacher-screenShare-off',data=>{        
//         console.log(data)
//         this.updateTeacherInfo()
//       })
//       this.socket.on('student-muted',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-unmuted',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-video-on',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('student-video-off',data=>{        
//         console.log(data)
//         this.updateLiveStudentsInfo()
//       })
//       this.socket.on('newMessage',data=>{
//           this.receiveMessage(data)
//       });
//       this.socket.on('new-quiz',data=>{
//         console.log('new quiz',data)
//         this.showQuiz(data)
//       });
//       this.socket.on('new-student-video-allowed',data=>{
//         console.log('new video',data,this.student.user_id)
//         this.addOtherStudentVideo(data)
//       });
//       this.socket.on('requested-video-allowed',data=>{
//         console.log('Accepted video!',data,this.student.user_id)
//         if(data.userId === this.student.user_id){
//           this.setState({myVideoCallStatus:'Accepted',requesting:false})
//           this.startStream(data)
//         }
        
//       });
//       this.socket.on('other-student-video-ended',data=>{
//         console.log('end video',data,this.student.user_id)
//         this.removeOtherStudentVideo(data)
//       });
//       this.socket.on('producer-disconnected',data=>{
//         // alert('teacher disconnected');
//         // console.log(data)
//         // this.endMyStream(this.streamService.studentStream.id)
//         this.updateTeacherInfo()
//         this.setState({loadingMessage:'Teacher left...',loadingStream:true,teacherStream:null})
//       })
//       this.streamService.socket.on('producer-disconnected',data=>{
//         // alert('teacher disconnected');
//         // console.log(data)
//         // this.endMyStream(this.streamService.studentStream.id)
//         // this.setState({loadingMessage:'Teacher stream disconnected...',loadingStream:true,teacherStream:null})
//       }) 

//       this.streamService.socket.on('producer-rejoin',data=>{
//         console.log('teacher back online');
//         this.updateTeacherInfo()
//         this.setState({loadingMessage:'Teacher back online...',loadingStream:true})
//         console.log(data)
//         this.consumeVideo()
//       })
      
      
//       this.streamService.socket.on('disconnect-all-students',users=>{
//         console.log(users+' disconnected')          
//         this.getLiveStudents()
//       })
//     }
//     async removeSocketEvents(){
//       console.log('removing sockets')
//       this.socket.off('message')
//       this.socket.off('disconnect')      
//       this.socket.off('joinedRoom');
//       this.socket.off('leftRoom');
//       this.socket.off('newMessage');
//       this.socket.off('teacher-muted');
//       this.socket.off('teacher-unmuted');
//       this.socket.off('teacher-video-on');
//       this.socket.off('teacher-video-off');
//       this.socket.off('student-muted')
//       this.socket.off('student-unmuted')
//       this.socket.off('student-video-on')
//       this.socket.off('student-video-off')
//       this.socket.off('student-answered-quiz')
//       this.socket.off('student-video-request');
//       this.socket.off('new-student-video-allowed');
//       this.socket.off('other-student-video-ended');      
//       this.socket.off('new-quiz');      
//       this.socket.off('requested-video-allowed');  
//       this.socket.off('producer-disconnected');      
            
        
//       this.streamService.socket.off('producer-rejoin')      
//       this.streamService.socket.off('producer-disconnected')      
//       this.streamService.socket.off('disconnect-all-students')      
//     }
//     disconnectStudent(){
//       console.log('disconnecting...student')
//       this.endStudentCall(this.myStreamId)
//       this.socket.emit('leaveRoom',this.classHash);
//       this.streamService.disconnectStream({streamId: this.myStreamId, type: 'student'})
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: LEFT_CLASS
//       }
//       AuthServices.addActivityLog(payload)
//       // this.streamService.socket.disconnect()
//       // this.streamService.secondarySocket.disconnect()
//       // this.socket.disconnect()
//     }
//     handleResize=()=>{
//       this.setState({windowHeight: window.innerHeight, windowWidth: window.innerWidth})
//       // console.log('H - ',window.innerHeight,'W - ',window.innerWidth)
//     }
//     async getStudents(){
//       this.socket.emit('get-all-students',{room:this.classHash},(data)=>{
//         console.log(' STUDENTS ',data)
//         this.setState({students: data.students})
//       })
//     }
//     async updateTeacherInfo(){
//       this.socket.emit('get-teacher-details',{room:this.classHash},(data)=>{
//         console.log(' teacher details ',data)
//         if(data){
//           this.setState({teacherDetails: data})
//         }
        
//       })
//     }
//     addChatNotification=(data,activity)=>{
//         this.chat.current.notifyAll(data.name,activity)
//         this.forceUpdate()
//     }
//     sendMessageToChat=(message)=>{
//         const data={
//             from: this.user.name,
//             userId: this.user.id,
//             message: message,
//             room: this.classHash
//         }
//         this.socket.emit('sendMessageToChat',data)
//         const payload ={
//           by_type: 'student',
//           by_type_id: this.student.id,
//           activity: MESSAGE_IN_CHAT
//         }
//         AuthServices.addActivityLog(payload)
//     }
//     receiveMessage=(data)=>{
//         this.chat.current.receiveMessage(data.from,data.userId,data.message)
//         this.forceUpdate()
//     }
//     showQuiz=(quizData)=>{
//       this.setState({quizWindowShow:true,quizData})
//     }
//     toggleQuiz=(bool)=>{
//       this.setState({quizWindowShow:bool})
//     }
//     submitQuizAnswer=(answerData)=>{
//       const data={
//         room: this.classHash,
//         selectedOption: answerData.selectedOption
//       }
//       this.socket.emit('quiz-answered',data)
//     }
//     addOtherStudentVideo=(data)=>{
//       if(data.userId !== this.student.userId || true){
//         this.getLiveStudents()
//         // this.consumeOtherStudentVideo(data)
//       }      
//     }
//     removeOtherStudentVideo=(data)=>{ 
//       console.log('removing')
//       if(data.streamId !== this.myStreamId){
//         this.endOtherStudentVideo(data.streamId)
//       }else{
//         this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== data.streamId)
//         delete this.videoSlotMap[data.streamId]
//         this.updateStudentVideos()
//         this.setState({myVideoCallStatus:'None'})
//       }      
//     }
//     loadDevice= async ()=>{
//       if(this.device.loaded){
//         return;
//       }
//       let {rtpCapabilities} = await this.streamService.getCapabilities();
//       this.rtpCapabilities = rtpCapabilities
//       await this.device.load({
//           routerRtpCapabilities: this.rtpCapabilities
//       });
//     }
    
//     initialize=async ()=>{
//       const result = await this.streamService.socket.request('stream-status',{streamId: this.classHash});
//       if(result.status.toLowerCase() === 'started'){
//         await this.consumeVideo();
//       }else{
//         if(result.init){
//           this.setState({loadingMessage:'Teacher has not started yet!'})
//         }else{
//           this.setState({loadingMessage:'Teacher is not connect stay tuned'})
//         }
        
//         console.log('No stream available')
//         return false
//       }
//     }
  
//   async getLiveStudents(){ console.log('getting live students...')
//       const liveStudents  = await this.socket.request('get-live-students',{room: this.classHash});
//       this.videoSlots=[];
//       this.studentVideos=[]
//       // console.log(liveStudents,this.videoSlotArray)
//       this.liveStudents = []
//       const studentVideosStatus ={}
//       for await(let l of liveStudents.liveStudents){
//         // this.queue.push(async () => {
//           let liveStudent = l
//           if(l.userId === this.student.user_id){
//             this.setState({myVideoCallStatus:'Accepted'})
//           }
//           if(this.videoSlotMap[liveStudent.streamId] === undefined){
//             let data={
//               studentStreamId :liveStudent.streamId,
//               userId: liveStudent.userId,
//               streamId: this.classHash,
              
//             }   
//             studentVideosStatus[liveStudent.streamId] = {connection:'connecting'}
            
//             this.videoSlotMap[liveStudent.streamId] = {liveStudent,local:false,stream:null}
//             if(liveStudent.userId === this.student.user_id){

//             }else{
//               const newStream = await this.consumeOtherStudentVideo(data)
//               this.videoSlotMap[liveStudent.streamId].stream = newStream
//             }
                         
//             // this.videoSlots.push(liveStudent.streamId)              
//             // this.studentVideos.push(<StudentVideo endStudentCall={(sStreamId)=>this.endStudentCall(sStreamId)} getLiveStudents={()=>this.getLiveStudents()} streamData = {liveStudent} key={liveStudent.streamId} stream={newStream}/>)
              
//           }   
//           this.liveStudents.push(l)
//           console.log('student video...',this.liveStudents.length)
          
//         // })
//       }
      
//       // console.log(this.studentVideos)
//       // this.liveStudents = this.liveStudents.filter()
//       this.updateStudentVideos()
//   }
//   updateStudentVideos=()=>{
//     for(let l of this.liveStudents){
//       this.studentVideosRef[l.streamId] = React.createRef();
//     }
//     this.studentVideos = this.liveStudents.map((liveStudent,index)=>      
//       liveStudent.userId === this.student.user_id?
//       <MyVideo 
//         ref={this.myVideo} 
//         endStudentCall={(sStreamId)=>this.endStudentCall(sStreamId)} 
//         mute={this.mute} 
//         unMute={this.unMute} userDetails={this.user} 
//         streamData = {liveStudent}  
//         key={liveStudent.streamId} 
//         pauseVideo={this.pauseVideo} 
//         resumeVideo={this.resumeVideo} 
//         stream={this.state.localStream}
//       />:
//       <StudentVideo 
//         ref={this.studentVideosRef[liveStudent.streamId]} 
//         studentData={this.studentMap.get(liveStudent.userId)} 
//         status={this.state.studentVideosStatus} 
//         getLiveStudents={()=>this.getLiveStudents()} 
//         streamData = {this.videoSlotMap[liveStudent.streamId].liveStudent} 
//         key={liveStudent.streamId} 
//         stream={this.videoSlotMap[liveStudent.streamId].stream}
//       />
//      )
//      console.log('updating student videos')
//      this.updateLiveStudentsInfo()
//      this.forceUpdate()
//   }
//   async updateLiveStudentsInfo(){
//     this.socket.emit('get-students-details',{room:this.classHash},(data)=>{
//       console.log(' video students details ',data)
//       if(data){
//         this.setState({videoStudentsDetails: data})
//       }
//       for(let i in data){
//         const studentVideo = this.studentVideosRef[data[i].streamId].current;
//         console.log(this.studentVideosRef[data[i].streamId],studentVideo)
//         if(studentVideo){
//           this.studentVideosRef[data[i].streamId].current.updateVideoInfo(data[i])            
//         }          
//       }   
//     })
//   }
//     async consumeVideo() {
//       console.log('connecting stream...')
//         try {
//           const transportData = await this.streamService.createConsumerTransport({
//             streamId: this.props.classData.unique_hash,
//             consumerId: this.student.user_id
//           });
//           this.rcvTransport = this.device.createRecvTransport(transportData);
//           this.rcvTransport.on(
//             'connect',
//             async ({ dtlsParameters }, callback, errback) => { 
//               const connected = await this.streamService.connectConsumerTransport({
//                 dtlsParameters,
//                 streamId: this.props.classData.unique_hash,
//                 consumerId: this.student.user_id
//               });
//               if(!connected){
//                 return;
//               }
//               callback();
//             }
//           );
    
//           this.rcvTransport.on('connectionstatechange', state => {
//             console.log(`teacher rcv transport state:${state}`);
//             const loadingMessage = `${state} ...`;
//             let loadingStream = true
//             if(state ==='connected'){loadingStream = false}else{ loadingStream = true}
//             this.setState({teacherStreamStatus:state,loadingMessage,loadingStream})
//           });
    
//           const consumerData = await this.streamService.consumeMedia({
//             rtpCapabilities: this.device.rtpCapabilities,
//             streamId: this.props.classData.unique_hash,
//             consumerId: this.student.user_id
            
//           });
//           console.log('ccc',consumerData)
//           if(consumerData.id){
//             this.videoConsumer = await this.rcvTransport.consume({
//               id: consumerData.id,
//               producerId: consumerData.producerId,
//               kind: consumerData.kind,
//               rtpParameters: consumerData.rtpParameters
//             });
//           }
      
//           this.audioConsumer = await this.rcvTransport.consume({
//             id: consumerData.audioId,
//             producerId: consumerData.audioProducerId,
//             kind: consumerData.audioKind,
//             rtpParameters: consumerData.auidoRtpParameters,
//           });
//           let result = await this.streamService.resumeProducer({
//             streamId: this.classHash,
//             consumerId: this.student.user_id
//           });
//           const stream = new MediaStream();
//           stream.addTrack(this.videoConsumer.track);
//           stream.addTrack(this.audioConsumer.track);
//           // console.log('stream',stream)
//           // console.log('vidconsumer',this.videoConsumer)
//           // console.log('audio consumer',this.audioConsumer)
//           this.setState({teacherStream:stream})
//           this.video.current.srcObject = this.state.teacherStream;
          
//           // console.log('result',resul)
//           this.video.current.play();
//           this.video.current.controls =false;
//         } catch (error) {
//         //   this.state = await this.streamService.getStreamState(this.classHash);
//           console.error(error.message);
//         }
//       }
//     async requestTeacherForVideo(){
//       if(this.studentVideos.length > 3){
//         alert('more than 4 students are not allowed')
//         return
//       }
//         const videoRequestData = {
//           room: this.classHash,
//           studentStreamId: this.classHash+'-'+this.student.user_id,
//           studentId: this.student.id,
//           userId: this.student.user_id,
//           requestedBy: this.user.name
//         }
        
//         this.socket.emit('student-requested-video',videoRequestData);
        
//       this.setUpLocalStream()
//       this.setState({myVideoCallStatus:'Requested',requesting:true})
//       const payload ={
//         by_type: 'student',
//         by_type_id: this.student.id,
//         activity: REQUESTED_FOR_VIDEO_QUESTION
//       }
//       AuthServices.addActivityLog(payload)
//       setTimeout(()=>{
//         if(this.state.myVideoCallStatus !== 'Accepted')
//         this.setState({myVideoCallStatus:'None',requesting:false})
//       },10000)
//     }
//     teacherSoundToggle(bool){
//       this.video.current.muted = !bool;
//       this.setState({teacherSound: bool})
//     }


//     async startStream(streamData) {
//       try {
    
//         this.setState({myVideoCallStatus:'Accepted'})   
//         await this.loadDevice();
//         const transportData = await this.streamService.startStream({streamId: this.myStreamId});
//         this.sendTransport = this.device.createSendTransport(transportData);
  
//         this.sendTransport.on(
//           'connect',
//           async ({ dtlsParameters }, callback, errback) => { 
//             try {
//               const connected  = await this.streamService.connectProducerTransport({
//                 dtlsParameters,
//                 streamId: this.myStreamId
//               });
//               if(!connected){
//                 throw new Error('Could not connect producer transport');
//               }
//               callback();
//             } catch (error) {
//               console.error(error);
//             }
//           }
//         );
//       this.sendTransport.on(
//           'produce',
//           async ({ kind, rtpParameters }, callback, errback) => {
//             try{
//               const data = await this.streamService.sendProduceNotification({
//                 streamId: this.myStreamId,
//                 kind,
//                 rtpParameters
//               });
//               if(!data) throw new Error('Produce media failed');
//               // console.log(data);
//               callback({id:data.producerId});
//             }catch (error){
//               console.error(error);
//             }
//           }
//         );
//       this.sendTransport.on('connectionstatechange', async state => {
//         console.log(`Send Transport ${state}`);
//           this.setState({myStreamStatus: state})
//           if(state === RTCPeerConnectionState.failed || state === RTCPeerConnectionState.disconnected){
//           //  await this.startStream();
//           }
//         });
  
//         const videoTrack = this.state.localStream
//           .getVideoTracks()
//           .reduce((track, elem) => (track = elem), null);
//         const audioTrack = this.state.localStream
//           .getAudioTracks()
//           .reduce((track, elem) => (track = elem), null);
  
//         this.videoProducer = await this.sendTransport.produce({
//           track: videoTrack,
//         });

//         this.videoProducer.on('transportclose', () => {
//           console.log(`Send Transport disconnection`);
//         });
//         await Promise.resolve(this.socket.emit('new-student-video',streamData));
//         this.audioProducer = await this.sendTransport.produce({
//           track: audioTrack,
//         });
//       } catch (error) {
//       //   this.state = await this.streamService.getStreamState(this.stream.id);
//         console.error(error.message);
//       }
//     }
//     endStudentCall=(sStreamId)=>{ 
//       const sStreamData = this.videoSlotMap[sStreamId]
//       // console.log(sStreamData)
//       const stopData ={
//         streamId: sStreamId
//       }
//       const sdata={
//         room: this.classHash,
//         userId: this.student.user_id
//       }
//       this.streamService.stopStream(stopData).then((res)=>{ 
//         if(res.ended){
          
//           this.videoSlots = this.videoSlots.filter(vids=> vids !== sStreamId)
//           this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== sStreamId)
//           delete this.videoSlotMap[sStreamId]
//           // console.log(this.videoSlots)
          
//           this.socket.emit('student-video-call-ended',sdata)
//           this.setState({myVideoCallStatus:'None'})
//           // this.getLiveStudents()
//           // this.forceUpdate()
//           this.updateStudentVideos()
//         }else{
//           this.getLiveStudents()
//         }
        
//       })
//     }
//     async consumeOtherStudentVideo(sStreamData) {
//       const sStreamId = sStreamData.studentStreamId
//       console.log('connecting student....',sStreamId)
     
//       try {
        
//         // const { rtpCapabilities } = await this.streamService.getCapabilities();
//         if (!this.device.loaded) {
//           await this.device.load({
//             routerRtpCapabilities: this.rtpCapabilities
//           });
//         }
  
//         if (
//           !this.device.canProduce('video') ||
//           !this.device.canProduce('audio')
//         ) {
//           // this.showError('Video or Audio is not suppoerted');
//         }
//         const transportData = await this.streamService.createConsumerTransport({
//           streamId: sStreamId,
//           consumerId: this.student.user_id
//         });
//         console.log('transport data',transportData)
//         const rcvTransport = this.device.createRecvTransport(transportData);
//         // this.videoSlotMap[sStreamId].receiveTransport = rcvTransport;
//         rcvTransport.on(
//           'connect',
//           async ({ dtlsParameters }, callback, errback) => {
//             await this.streamService.connectConsumerTransport({
//               dtlsParameters,
//               streamId: sStreamId,
//               consumerId: this.student.user_id
//             });
//             console.log('cconnnected')
//             callback();
//           }
//         );
  
//         rcvTransport.on('connectionstatechange', state => {
//           const studentVideosStatus = {...this.state.studentVideosStatus}
//           studentVideosStatus[sStreamId].connection = state
//           this.setState({studentVideosStatus})
//           console.log(`Student rcv transport state:${state}`);
//         });
  
//         const consumerData = await this.streamService.consumeMedia({
//           rtpCapabilities: this.device.rtpCapabilities,
//           consumerId: this.student.user_id,
//           streamId: sStreamId
          
//         });
//         // console.log(consumerData)
//         let videoConsumer = await rcvTransport.consume({
//           id: consumerData.id,
//           producerId: consumerData.producerId,
//           kind: consumerData.kind,
//           rtpParameters: consumerData.rtpParameters
//         });
  
//         let audioConsumer = await rcvTransport.consume({
//           id: consumerData.audioId,
//           producerId: consumerData.audioProducerId,
//           kind: consumerData.audioKind,
//           rtpParameters: consumerData.auidoRtpParameters,
//         });
//         this.videoSlotMap[sStreamId].videoConsumer = videoConsumer;
//         this.videoSlotMap[sStreamId].audioConsumer = audioConsumer;
//         // this.setState({sStreamId})
//         const stream = new MediaStream();
//         stream.addTrack(videoConsumer.track);
//         stream.addTrack(audioConsumer.track);
        
//         this.videoSlotMap[sStreamId].stream = stream;
//         let result = await this.streamService.resumeProducer({
//           streamId: sStreamId,
//           consumerId: this.student.user_id
//         });
//         // console.log(this.videoSlotMap)
//         return stream;
       
//         this.forceUpdate()
        
//         //  this.video.current.showControls();
//       } catch (error) {
//       //   this.state = await this.streamService.getStreamState(this.classHash);
//         console.error(error.message);
//       }
//     }
//     async endMyStream(sStreamId){      
//       const data={
//         streamId: this.props.classData.unique_hash,
//         sStreamId: sStreamId,
//         userId: this.user.id
//       }
//       let ended = await this.streamService.endMySecondaryStream(data)
//     }
//     endOtherStudentVideo(sStreamId){
//       console.log('removed')
//       this.getLiveStudents()
//       this.liveStudents = this.liveStudents.filter(ls=> ls.streamId !== sStreamId)
//       delete this.videoSlotMap[sStreamId] 
         
//       this.updateStudentVideos()
//     }
//     setUpLocalStream=async ()=>{
//       const myStream = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           noiseSuppression: true,
//           echoCancellation: true,
//           autoGainControl: true
//         },
//         video: {
//           frameRate: {
//             min: 1,
//             max: 20
//           },
//           aspectRatio: 4 / 3
//         }
//       });

//       this.setState({localStream: myStream});
//       console.log(this.myVideo)
//       if(this.myVideo.current){
//         this.myVideo.current.updateStream(myStream)
//       }
      
//     }
//     toggleFullScreen=(bool)=>{
//       // this.setState({fullScreen: bool})
//       if(bool){
//         if(this.video.current.requestFullScreen){
//           this.video.current.requestFullScreen();
//         } else if(this.video.current.webkitRequestFullScreen){
//           this.video.current.webkitRequestFullScreen();
//         } else if(this.video.current.mozRequestFullScreen){
//           this.video.current.mozRequestFullScreen();
//         }
//       }else{
//         if(document.fullscreen){
//           document.exitFullscreen()
//         }
        
//       }        
//     }
//     mute=async ()=>{
//       try {
//         console.log('muting...')
//         // const status = await this.streamService.startRecording({ streamId: this.stream.id });
//         // this.recordingStarted = status.started;
//         const audioTrack = this.state.localStream.getAudioTracks()[0];
//         audioTrack.enabled = false;
//         await this.audioProducer.replaceTrack({ track: audioTrack });
//         this.setState({muted:true});
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-muted',data)
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     unMute=async ()=>{
//       try {
        
//         // const status = await this.streamService.startRecording({ streamId: this.stream.id });
//         // this.recordingStarted = status.started;
//         const audioTrack = this.state.localStream.getAudioTracks()[0];
//         audioTrack.enabled = true;
//         await this.audioProducer.replaceTrack({ track: audioTrack });
//         this.setState({muted:false});
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-unmuted',data)
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     pauseVideo= async ()=>{
//       try { 
//         console.log('pausing...',this.myVideo)
//         this.videoProducer.pause()
//         this.setState({teacherVideoEnabled:false})
//         this.state.localStream.getVideoTracks().forEach((track)=>{
//             track.stop()
//           })
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-video-off',data)
//       }catch(e){
//         console.info(e)
//       }
//     }
//     resumeVideo= async ()=>{
//       try { 
        
        
//         this.setState({teacherVideoEnabled:true})
//         await this.setUpLocalStream();
//         const videoTrack = this.state.localStream.getVideoTracks()[0];
//         this.videoProducer.replaceTrack({ track: videoTrack });
//         this.videoProducer.resume()
//         const data={
//           room: this.classHash,
//           userId: this.student.user_id
//         }
//         this.socket.emit('student-video-on',data)
//       }catch(e){
//         console.info(e)
//       }
//     }
//     videoOnclick(){
//       if(this.isMobile){
//         this.setState({showControls:!this.state.showControls})
//       }
//     }
//     render() { 
//         const cls = this.props.classData;
//         console.log('cllll',cls)
//         let studentVideoDisplay ={display:'flex'}
//         if(this.studentVideos.length === 0){
//           studentVideoDisplay ={display:'none'}
//         }
//         return ( 
//             <div className="webinar-items-container">
//               {this.state.quizWindowShow?
//                   <div className="defocus"  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//                     <QuizPopup toggle={this.toggleQuiz} submitQuizAnswer={this.submitQuizAnswer} quizData={this.state.quizData}/>
//                   </div>:
//                   null
//                 }
//                 <div className="videos">

               
//                   <div className="video-container">
//                     <div onMouseEnter={()=>this.setState({showControls:true})} onMouseLeave={()=>this.setState({showControls:false})} className="teacher-video-block">
//                         {!this.state.teacherDetails.videoOn?<VideoLessDisplay user={this.teacherUser} />:null}
//                         <StreamStatus myStreamStatus={this.state.teacherStreamStatus} />
//                         {this.state.loadingStream?<div className="loader-container">
//                         <Loader
//                             type="TailSpin"
//                             color="#FFF"
//                             height={100}
//                             width={100}
//                             timeout={0} //3 secs
                    
//                           />

//                           <div className="loading-message">{this.state.loadingMessage}</div>
//                         </div>:null}
//                         {this.state.teacherStream?<div className="teacher-mic-info" style={{bottom:this.state.showControls?'60px':'0px'}}><AudioAnalyser audio={this.state.teacherStream} mute={this.state.teacherDetails.muted}/>{' Teacher'}</div>:null}
//                        {this.state.showControls? <div id="video-controls" className="video-controls">
//                           {this.state.teacherSound?<div className="mute-button" style={{bottom:'40%'}} onClick={()=>this.teacherSoundToggle(false)}><VolumeUp style={{fontSize:'24px'}}/></div>:
//                           <div className="mute-button" style={{bottom:'40%'}} onClick={()=>this.teacherSoundToggle(true)}><VolumeOff style={{fontSize:'24px'}}/></div>}
//                           {this.state.fullScreen?<button className="mute-button" style={{backgroundColor:'#2555bb05'}} onClick={()=>this.toggleFullScreen(false)} ><FullscreenExit /></button>
//                           :<button className="mute-button fullscreen-button" style={{backgroundColor:'#55223305'}} onClick={()=>this.toggleFullScreen(true)} ><Fullscreen /></button>
//                           }
//                         </div>:null}
//                         <video ref={this.video} className="teacher-video">

//                           </video>
//                     </div>
//                     <div className="webinar-detail">
//                         <div className="class-details">
//                           <div className="webinar-subject">{cls.classroom_subjects.subjects.name}</div>
//                           <div className="class-name">{'Class '+cls.classroom.standard+'th '+cls.classroom.section}</div>
//                         </div>
//                       {this.state.myVideoCallStatus==='None'?<DaxtaButton content={'Ask Live'} icon={<PanToolOutlined />} onClick={()=>this.requestTeacherForVideo()} />
//                       :
//                       <div className="daxta-button ask-live" style={{cursor:'not-allowed'}}>
//                         {this.state.requesting?<CircularProgress size={24} color="#fff" />:null}{this.state.myVideoCallStatus}</div>
//                       }
                      
//                     </div>
                    
//                           {/* <img src="https://i.ytimg.com/vi/CwwrCBJDulY/maxresdefault.jpg" style={{height:'480px',width:'780px',borderRadius:'10px'}} alt="fuhdsuf"/> */}
//                   </div>
//                   {this.state.windowWidth > 1000 && this.studentVideos.length > 0?<div className="student-videos-panel" >
//                       <div className="student-panel-header">
//                           <div><UserAccountIcon fill={'#929599'} height="15px" width="15px"/> </div>
//                           <div style={{marginLeft:'10px'}}>Live Students</div>
//                           <div className="clickable"  style={{marginLeft:'30px'}}>X</div>
//                       </div>
//                       <div className="student-videos-container" >
                        
//                       {this.studentVideos}
                      
                        
//                       </div>
//                     </div>:null} 
//                  </div>
//                  <ChatBox ref={this.chat} 
//                   width={this.state.windowWidth}
//                   studentVideos={this.studentVideos}
//                   sendMessage={this.sendMessageToChat} 
//                   user={this.user}
//                   teacher={this.teacherUser}
//                   getStudents={this.getStudents}
//                   studentMap={this.studentMap}
//                   students={this.state.students}
//                   allowVideo={this.allowVideoRequest}
//                   denyRequest={this.denyVideoRequest}
//                 />  
//             </div>
            
//          );
//     }
// }

// class StreamStatus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <div className="my-stream-status">
//                       {this.props.myStreamStatus==='connected'?
//                       <div className="status-content">
//                         Live 
//                         <div className="live-dot"></div>
//                       </div>:this.props.myStreamStatus==='connecting'?
//                         <div className="status-content">
//                         Connecting...
                        
//                         </div>:this.props.myStreamStatus==='disconnected'?
//                           <div className="status-content">
//                           Disconnected!
                          
//                         </div>:
//                         <div className="status-content">
//                         Offline
                       
//                       </div>
                        
//                       }
//                     </div>
//      );
//   }
// }

// class MyVideo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       muted:false,
      
//       paused: false
//      }
//     this.myVideo = React.createRef();
//     // this.streamService = new StreamService()
//   }
//   componentDidMount=()=>{
//     console.log('mystream ',this.props.stream)
    
//     this.updateStream(this.props.stream)
//   }
//   updateStream(stream){
    
//     console.log('mydata ',stream)
//     this.myVideo.current.srcObject = stream;
//     this.myVideo.current.play()
//     this.myVideo.current.muted = true;
//   }
//   // endMyCall= async (sStreamId)=>{
//   //   const data={
//   //     streamId: this.props.streamData.unique_hash,
//   //     sStreamId: sStreamId,
//   //     userId: this.props.streamData.userId
//   //   }
//   //   // let ended = await this.streamService.endMySecondaryStream(data);
//   // }
//   mute=async ()=>{
//     this.props.mute();
//     this.setState({muted:true});
//   }
//   unMute=async ()=>{
//     this.props.unMute()
//     this.setState({muted:false});
//   }
//   pauseVideo=async ()=>{
//     this.props.pauseVideo();
//     this.setState({paused:true});
//   }
//   resumeVideo=async ()=>{
//     this.props.resumeVideo();
//     this.setState({paused:false});
//   }
//   render() { 
//     let iconStyle = {fontSize:'20px',marginLeft:'5px'}
//     if(window.innerWidth > 1720){
//       iconStyle = {fontSize:'23px',marginLeft:'5px'}
//       // console.log('true')
//     }
//     return ( 
//       // <div className="student-video-container">
//       //   <div className="name-label">You</div>
//       //   <video ref={this.myVideo} className="student-video">

//       //   </video>
//       //   <div className="end-call" onClick={()=>this.props.endStudentCall(this.props.streamData.id)}>X</div>
//       // </div>
//       <div className="student-video-container" >
//             {this.state.paused && !this.state.sharinScreen?<VideoLessDisplay user={this.props.userDetails} type={'student'}/>:null}
//             <video ref={this.myVideo}  className="student-video">
//             </video>
//             <div className="student-video-info">
//               <AudioAnalyser audio={this.props.stream} />
//               <div className="student-video-name">You</div>
//             </div>
//             <div className="student-video-control-block"  >
//               <div className="student-video-status" style={{marginRight: '-30px'}}>Live</div>
//               {!this.state.muted?<div className="clickable" style={iconStyle} onClick={()=>this.mute()}><Mic className="video-control-icons"  style={iconStyle}/></div>:
//               <div className="clickable" style={iconStyle} onClick={()=>this.unMute()}><MicOff className="video-control-icons"  style={iconStyle}/></div>}
//               {!this.state.paused?<div className="clickable" style={iconStyle} onClick={()=>this.pauseVideo()}><Videocam className="video-control-icons"  style={iconStyle}/></div>:
//               <div className="clickable" style={iconStyle} onClick={()=>this.resumeVideo()}><VideocamOff className="video-control-icons"  style={iconStyle}/></div>}
//               <div className="clickable" style={iconStyle} onClick={()=>this.props.endStudentCall(this.props.streamData.streamId)}><CallEnd className="video-control-icons"  style={iconStyle}/></div>
              
//             </div>        
            
//         </div>
      
//         );
//   }
// }
// class StudentVideo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       muted:false,
//       videoOn:true,
//       status: 'Live'
//      }
//     this.studentVideo = React.createRef();
//     // this.streamService = new StreamService();
//   }
//   componentDidMount=()=>{
//     console.log('new stream ',this.props.stream)
//     this.studentVideo.current.srcObject = this.props.stream;
//     this.studentVideo.current.play()
//   }
//   // componentDidUpdate(){
//   //   console.log('Upadting status',this.props.status)
//   // }
//   mute=async ()=>{
//     this.studentVideo.current.muted = true;
//     this.setState({muted:true})
//   }
//   unMute=async ()=>{
//     this.studentVideo.current.muted = false;
//     this.setState({muted:false})
//   }
//   updateStatus = (status)=>{ 
//     console.log('updating status..',status)
//     // this.setState({status})
//   }
//   updateVideoInfo = (info)=>{ 
//     // console.log('updating video info..',info)
//     this.setState({muted:info.muted, videoOn: info.videoOn})
//     // this.setState({status})
//   }
 
//   render() { 
//     return ( 
//       <div className="student-video-container" >
//           {!this.state.videoOn?<VideoLessDisplay user={this.props.studentData} type={'student'}/>:null}
//           <video ref={this.studentVideo}  className="student-video">
//           </video>
//           <div className="student-video-info">
//               <AudioAnalyser audio={this.props.stream} />
//               <div className="student-video-name">{this.props.studentData.name}</div>
//           </div>
//           <div className="student-video-control-block"  >
//             <div className="student-video-status" style={{marginRight: '24px'}}>{this.state.status}</div>
//             {!this.state.muted?<div className="clickable" onClick={()=>this.mute()}><VolumeUp className="video-control-icons" style={{color:'#707885',fontSize:'18px'}}/></div>:
//             <div className="clickable" onClick={()=>this.unMute()}><VolumeOff className="video-control-icons" style={{color:'#707885',fontSize:'18px'}}/></div>}
//             {/* <div className="clickable" style={{marginLeft:'10px'}} onClick={()=>this.props.endStudentCall(this.props.streamData.id)}><CallEnd style={{color:'#707885',fontSize:'18px'}}/></div> */}
            
//           </div>        
          
//       </div> 
//         );
//   }
// }
 


 
// export default LiveClass;