// import React, { Component } from 'react';

// // import TabCircleIndicator from '../../../components/tab-circle-indicator'
// import Usericon from '../../../assets/icons/person.svg';
// import User2Icon from '../../../assets/icons/person2.svg';
// import {ReactComponent as ChatIcon} from '../../../assets/icons/chat-icon.svg';
// import {ReactComponent as UserAccountIcon} from '../../../assets/icons/user-account-box.svg';
// import MaleProfile from "../../../assets/img/male-profile.png";

// import CameraIcon from '../../../assets/icons/camera.svg';
// import SendIcon from '../../../assets/icons/send.svg';
// const activeStyle = {backgroundColor: '#0A7860',
//                      borderRadius: '3px',color:'white',
//                     //  boxShadow: "1px 3px 6px #9E9E9E"
//                     }
// const inActiveStyle = {backgroundColor: '#fff'}

// const activeStyle2 = {
//     borderBottom: 'solid 3px #0ea785',
//     color:'#0ea785',                   
// }
// const inActiveStyle2 = {
//         borderBottom: 'none',
//         color: '#b5b5b5'
//     }
// const timeConvertor=(time,ctime)=>{ 
//     let dt1 = time;
//     let dt2 = ctime;
//     var diff =(dt1.getTime() - dt2.getTime()) / 1000;
//     console.log(diff)
//     const sec = diff;
//     let timeString = 'few seconds ago'
//     diff /= 60;
//     console.log(diff)
//     const minutes = Math.abs(Math.round(diff));
//     console.log('min',minutes,sec)
//     if(minutes < 1 && sec > 1 ){
//         timeString = 'few seconds ago'
//     }else if(minutes > 1){
//         timeString = minutes + ' minutes ago'
//     }
//     return timeString
// }
// const formatAMPM=(date)=> {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
// class ChatBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             chatBoxActiveTab: 0,
//             statusColor: '#227700',
//             statusText: 'Online' ,
//             myMsgText: '',
//             newHighlight: false
//         }
//         this.messages=[];
//         this.chatItems=[];
//         this.messageRefMap = new Map()
        
        

//         // this.messages.push(
//         //     <ChatBubbleSelf  text={'Sure Rahul.'}/> ,
//         //     <ChatBubbleIncoming sender={'Rahul Verma'} text={'hello Sir please repeat the defination.'}/>,
//         //     <ChatBubbleIncoming sender={'Neha Sharma'} text={'You are not audible.'}/>,
            
//         //     <ChatUserNotification user={'Abdul Rehman'} activity="joined" />,
//         //     <ChatUserNotification user={'Abdul Rehman'} activity="left" />,
//         //     <ChatUserNotification user={'Abdul Rehman'} activity="joined" />,
//         //     );
//     }
//     componentDidMount(){
//         // setInterval(async () => {
//         //     console.log('updating')
//         //     this.updateChatTime()
//         // },10000)
//         // this.messages.push(<ChatWelcome key="welcome"/>)
//         const component = <ChatWelcome key="welcome"/>
//         this.chatItems.push({type:'welcome', component})
//         this.forceUpdate()
//     }
    
//     _makeActive(index){ 
//         if(this.state.newHighlight){
//             this.setState({chatBoxActiveTab:index,newHighlight:false})
//         }else{
//             this.setState({chatBoxActiveTab:index})
//         }       
        
//     }
//     notifyAll(user,activity){
//         // this.messages.push(<ChatUserNotification key={this.messages.length} user={user} activity={activity} />)
//         const component = <ChatUserNotification key={this.messages.length} user={user} activity={activity} />
//         this.chatItems.push({type:'entry', component})
//     }
//     newHighlight(type){
//         this.setState({newHighlight:true})
//     }
//     receiveMessage(user, userId, message){
        
//         const timeStamp = new Date().getTime().toString()
//         const mkey = 'msg' + timeStamp;
//         this.messageRefMap.set(mkey,React.createRef())
//         if(this.props.user.id === userId){
//             this.chatItems.push({type : 'self',thumbnail:this.props.user.thumbnail_url ,user,message,time:formatAMPM(new Date())})

//             // this.messages.push(<ChatBubbleSelf ref={this.messageRefMap.get(mkey)} key={this.messages.length} thumbnail={this.props.user.thumbnail_url} currentTime={this.state.currentTime} user={user} text={message}/>);
//         }else if(this.props.teacher.id === userId){
//             this.chatItems.push({type : 'incoming-teacher',thumbnail:this.props.user.thumbnail_url ,teacher: this.props.teacher,user,message,time:formatAMPM(new Date())})
//             // this.messages.push(<ChatBubbleIncoming ref={this.messageRefMap.get(mkey)} key={this.messages.length} teacher={this.props.teacher} thumbnail={this.props.teacher.thumbnail_url} currentTime={this.state.currentTime} sender={user} text={message}/>);
//         }else{
//             const userData = this.props.studentMap.get(userId)
//             this.chatItems.push({type : 'incoming',thumbnail:this.props.user.thumbnail_url ,user,message,time:formatAMPM(new Date())})
//             // this.messages.push(<ChatBubbleIncoming ref={this.messageRefMap.get(mkey)} key={this.messages.length} thumbnail={userData.thumbnail_url} currentTime={this.state.currentTime} sender={user} text={message}/>);
//         }  
//         if(this.state.chatBoxActiveTab !== 0){
//             this.newHighlight()            
//         }else{
//             setTimeout(this.updateScroll(),100);
//         }     
              
        
//     }
//     sendMessage(){
//         // this.messages.push(<ChatBubbleSelf text={this.state.myMsgText}/>); 
//         if(this.state.myMsgText !==''){
//             this.props.sendMessage(this.state.myMsgText)       
//             this.chatInput.value = ""
//             this.setState({myMsgText:''})
//             document.getElementById('chat-input').value = '';
//         }
        
//         // setTimeout(this.updateScroll(),100);
//     }
//     updateChatTime=()=>{
//         this.messageRefMap.forEach((message,key)=>{
//             const latest = new Date();
//             if(message.current){
//                 console.log(timeConvertor(message.current.time,latest),'sec')
//                 message.current.setState({time:timeConvertor(message.current.time,latest)})
//                 // message.current.forceUpdate()
//             }
            
//             // console.log(key,timeConvertor(message.current.time,latest))
//         }) 
//     }
//     updateScroll(){
//         this.setState({chatScroll:this.chatContainer.scrollHeight})
//     }

//     handleKeyDown =(e)=>{
//         if (e.key === 'Enter') {
        
//             this.sendMessage()
//           }
//     }
//     render() { 
//         if(this.chatContainer){
//             this.chatContainer.scrollTop = this.state.chatScroll;
//         }
        
//         const onlineStudentMap = new Map()
//         this.props.students.forEach((student,i)=>{
//             const onlineStudent = this.props.studentMap.get(student.id)
//             onlineStudentMap.set(student.id, onlineStudent)
//         })
//         const studentList = []
//         const onlineStudentList = []
//         onlineStudentMap.forEach((student,userId)=>{
//             onlineStudentList.push(<StudentCard online={true} student={student} key={userId} />)
//          })
//         this.props.studentMap.forEach((student,userId)=>{
//             const isLive = onlineStudentMap.get(userId)?true:false
//             if(!isLive){
//                 studentList.push(<StudentCard online={false} student={student} key={userId} />)
//             }
           
//         })
        
//         // this.updateScroll()
//         return ( 
//             <div className="chatbox">
//                 {this.props.width > 1000?<div className="chbx-tabs">
//                 <ChatBoxTab onClick={()=>this._makeActive(0)} newHighlight={this.state.newHighlight} isActive={0 === this.state.chatBoxActiveTab} icon={ChatIcon} title={'Chats'} />
//                     <ChatBoxTab onClick={()=>this._makeActive(1)} isActive={1 === this.state.chatBoxActiveTab} icon={UserAccountIcon} title={'Students'} />
//                     {/* <ChatBoxTab onClick={()=>this._makeActive(2)} isActive={2 === this.state.chatBoxActiveTab} title={'Quiz'} /> */}
//                 </div>:
//                 <div className="chbx-tabs2">
//                     <ChatBoxTabMobile onClick={()=>this._makeActive(2)} isActive={2 === this.state.chatBoxActiveTab} title={'Live Calls'} />
//                     <ChatBoxTabMobile onClick={()=>this._makeActive(0)} isActive={0 === this.state.chatBoxActiveTab} icon={ChatIcon} title={'Chats'} />
//                     <ChatBoxTabMobile onClick={()=>this._makeActive(1)} isActive={1 === this.state.chatBoxActiveTab} icon={UserAccountIcon} title={'Students'} />
                    
//                 </div>}
//                 {/* <div className="chbx-last-update">
//                     Last update 4:30 pm
//                 </div>
//                 <div className="chbx-status" style={{backgroundColor: this.state.statusColor}}>
//                     {this.state.statusText}
//                 </div> */}
//             {this.state.chatBoxActiveTab===0?
//                 <div className="chat-items-container">
//                     <div id="chat-container" className="chat-container" ref={el => this.chatContainer = el}>
//                         {/* <ChatBubbleIncoming sender={'Rahul Verma'} text={'hello Sir please repeat the defination.'}/>
//                         <ChatBubbleSelf  text={'Sure Rahul.'}/> */}
//                          {/* {this.messages} */}
//                          {this.chatItems.map((item,i)=>(
//                             item.type==='welcome'?item.component:
//                             item.type==='entry'?item.component:
//                             item.type==='incoming'?<ChatBubbleIncoming time={item.time} ref={this.messageRefMap.get(i)} key={i} thumbnail={item.thumbnail}  sender={item.user} text={item.message}/>:
//                             item.type==='incoming-teacher'?<ChatBubbleIncoming time={item.time} teacher={item.teacher} ref={this.messageRefMap.get(i)} key={i} thumbnail={item.thumbnail}  sender={item.user} text={item.message}/>:
//                             item.type==='self'?<ChatBubbleSelf time={item.time} ref={this.messageRefMap.get(i)} key={i} thumbnail={this.props.user.thumbnail_url}  user={item.user} text={item.message}/>:
//                             null
                            
//                         ))}
//                     </div>
//                     <div id="chat-input" className="chat-input">
//                         <div className="chat-input-container">
//                             {/* <img src={CameraIcon} style={{height:"25px",cursor:'pointer'}} alt="pic"/> */}
//                             <input type="text" onChange={(e)=>{this.setState({myMsgText:e.target.value})}} onKeyDown={(e)=>this.handleKeyDown(e)} ref={el => this.chatInput = el} className="chat-text-input" placeholder="Enter message" />
//                             <div className="send-button" onClick={()=>this.sendMessage()} >
//                                 <img src={SendIcon} style={{height:"25px",cursor:'pointer'}} alt="send"/>
//                             </div>  
//                         </div>                    
//                     </div>
//                     {/* <div style={{display:'flex',justifyContent:'center'}}>
//                         <TabCircleIndicator count={3} currentSelection={this.state.chatBoxActiveTab}/>
//                     </div> */}
//                 </div>
//                 :this.state.chatBoxActiveTab === 1?
//                 <div className="students-list-tab">
//                     <div className="online-list">Online{`(${onlineStudentList.length})`}</div>
//                     <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
//                         {onlineStudentList.length===0?<div className="no-online-container"><img className="no-online-image" src={require('./../../../assets/img/no-online.svg')} alt='no online'/>
//                             None of your students are presently online.
//                         </div>
//                         :onlineStudentList}                      
//                     </div>
//                     <div className="online-list offline-list">Offline{`(${studentList.length})`}</div>
//                     <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>                        
//                         {studentList}                       
//                     </div>
//                 </div>
//                 :
//                 <div className="quiz-tab">
//                     <div style={{display:'block',justifyContent:'center'}}>
//                         {this.props.studentVideos}
//                         {/* <TabCircleIndicator count={3} currentSelection={this.state.chatBoxActiveTab}/> */}
//                     </div>
//                 </div>
//             }                
//             </div>
//          );
//     }
// }
// class StudentCard extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {  }
//     }
//     render() { 
//       return ( 
//         <div className="student-card">
//             <div className="student-thumb-block">
//             {this.props.student.thumbnail_url?<div className="student-thumb"><img style={{height:'40px'}} src={this.props.student.thumbnail_url} alter="dp"/></div>:
//                 <div className="student-thumb">{this.props.student.name[0]}</div>}
//             </div>
            
//             <div className="student-details">
//             <div className="students-list-name">{this.props.student.name}</div>
//                 {this.props.online?<div className="students-list-status">Online</div>:
//                 <div className="students-list-status" style={{color:'#8597aa'}}>Offline</div>}
//             </div>
          
//         </div>
//        );
//     }
//   }
//   class ChatWelcome extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
        
//     }
//     render() { 
        
//         return ( 
//             <div className="sender-msg">
                
//                 <div className="chat-welcome-message">
//                     <div style={{display:'flex'}}>
//                         <div className="chat-daxta-logo"><img src={require('./../../../assets/img/daxta-logo.png')} style={{height:'11px'}} /></div>
//                         <div className="chat-welcome-text">welcome to live chat! All students are requested to be kind with everyone</div>
//                     </div>                                   
                    
//                 </div>
//                 {/* <div style={{display:'flex',fontSize:'12px',alignItems: 'center'}}>
//                     <Avatar /> 
//                     {this.props.sender}
//                 </div> */}
                 
//             </div>
            
            
//          );
//     }
// }

// class ChatBoxTab extends Component {
//     state = {  }
//     render() { 
//         let color = this.props.isActive?'white':'#b5b5b5';
//         let Icon = this.props.icon
//         return ( 
//         <div className="chbx-tab" style={this.props.isActive?activeStyle:inActiveStyle} onClick={this.props.onClick}>
//             {this.props.icon?<div className="chat-tab-icon" ><Icon fill={color} />{this.props.newHighlight?<div className="chat-highlight"></div>:null} </div>:null}
//             {this.props.title}
//         </div>
//          );
//     }
// }
// class ChatBoxTabMobile extends Component {
//     state = { 
        
//      }
//     render() { 
//         let color = this.props.isActive?'white':'#b5b5b5';
//         let Icon = this.props.icon
//         return ( 
//         <div className="chbx-tab-mobile" style={this.props.isActive?activeStyle2:inActiveStyle2} onClick={this.props.onClick}>
//             {/* {this.props.icon?<div className="chat-tab-icon" ><Icon fill={color} /> </div>:null} */}
//             {this.props.title}
//         </div>
//          );
//     }
// }
// class ChatBubbleIncoming extends Component {
    
//     constructor(props) {
//         super(props);
        
        
//         this.time = formatAMPM( new Date())
//     }
    
//     render() { 
//         const teacherStyle ={
//             backgroundColor: '#0ea785',
//             color: '#fff'
//         }
        
//         return ( 
//             <div className="sender-msg">                
//                 <div className="chat-bubble-incoming" style={this.props.teacher?teacherStyle:null}>                    
//                     <div>{this.props.text}</div>
//                     <div className="msg-time" style={this.props.teacher?{color:'#ffffff'}:null}>{`${this.time}`}</div>
//                 </div>
//                 <div style={{display:'flex',alignItems:'center',margin: '1px -5px 0px 2px'}}>                    
//                     <Avatar imgUrl={this.props.thumbnail}/> 
//                     <div style={{display:'flex',fontSize:'12px',marginLeft:'6px'}}>
//                         <div>{this.props.sender}</div>
//                         {this.props.teacher?<div style={{backgroundColor:'#fbaf1e',fontSize:"10px",color:'#fff',padding:'3px',borderRadius:'3px',marginLeft:'8px'}}>TEACHER</div>:null}
//                     </div>
//                 </div>                 
//             </div>
//          );
//     }
// }
// class ChatBubbleSelf extends Component {
//     constructor(props) {
//         super(props);
//         this.time = formatAMPM( new Date())
//     }
//     render() { 
//         // const time = this.state.time;
//         // const currentTime = new Date();
//         // let timeAgo = Math.round(((currentTime.getTime() - this.time.getTime()) / 1000)/60);
//         // if(timeAgo == 0){timeAgo = 'now'}
//         return ( 
//             <div className="self-message">
                
//                <div className="chat-bubble-self">
//                     {/* <b>{this.props.sender}</b> */}
//                     <div>{this.props.text}</div>
//                     <div className="msg-time" >{`${this.time}`}</div>
//                 </div>
//                 <div style={{display:'flex',alignItems:'flex-end',marginTop:'1px',marginLeft:'-5px'}}>  
//                     <div style={{fontSize:'12px',marginLeft:'6px'}}>{this.props.sender}</div>
//                     <Avatar imgUrl={this.props.thumbnail}/> 
//                 </div>
//             </div>
            
            
//          );
//     }
// }
// class ChatUserNotification extends Component {
//     state = {  }
//     render() { 
//         let activityStyle ={
//             marginTop: '10px',
//             alignSelf: 'center',
//             width: 'max-content',
//             padding: '5px',
//             fontSize: '11px',
//             borderRadius: '7px',
//             backgroundColor: '#E5FAFC',
//             color: '#1BAEBC',
//             boxShadow: '1px 1px 2px #11111120'
//         }
//         if(this.props.activity == 'left'){
//             activityStyle.backgroundColor = '#FCE5EE';
//             activityStyle.color = '#B9676B';
//         }
//         return ( 
//             <div style={{display:"flex",justifyContent:'center'}} >
//                 <div style={activityStyle}>
//                     {this.props.user + ' ' + this.props.activity}
//                 </div> 
//             </div>
        
//          );
//     }
// }
 

// class Avatar extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div className="chat-avatar">
//                 <img src={this.props.imgUrl? this.props.imgUrl:MaleProfile} style={{height: '24px',width: '24px'}} alt="imagedads" />
//             </div>
//          );
//     }
// }

// function randDarkColor() {
//     var lum = -0.25;
//     var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
//     if (hex.length < 6) {
//         hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
//     }
//     var rgb = "#",
//         c, i;
//     for (i = 0; i < 3; i++) {
//         c = parseInt(hex.substr(i * 2, 2), 16);
//         c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
//         rgb += ("00" + c).substr(c.length);
//     }
//     return rgb;
// }


 


 
// export default ChatBox;