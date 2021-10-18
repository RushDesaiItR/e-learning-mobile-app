 import React, { Component } from 'react'
 import * as AuthServices from '../../../services/auth.services'
 import ClassBlock from '../../../components/ClassBlock/ClassBlock'
 import { formatClassroomName, isDateInThisWeek } from '../../../services/util.services'
 import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from "react-native"
 import {MainColorPalette} from "../../../styles/colorPalette"
 import {Sizes} from "../../../styles/sizes"
 import styled from 'styled-components';
 const days = [
     'Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday',
 ]


 class Timetable extends Component {
     constructor(props) {
         super(props),
         this.state = { 
             classes: [],
             displayMode: 'timeline'
          }
          this.timeSlots=[]
          this.weeksData=[]         
          this.today = new Date()
          this.startTime = 7,
          this.endTime = 24,
          this.tableLength = 300
     }
     componentWillMount(){
         this.weeksData=[]
         this.setUpWeeks()
         this.getClasses()
         formatClassroomName(this.props.student.standard,this.props.student.section);
        console.log(this.props.student.classroom_id)

     }
     getClasses=()=>{
         AuthServices.getClassesByClassroom(this.props.student.classroom_id)
         .then((data)=>{
             console.log('able to get classes', data);
             if(data.length){
                 this.setState({classes: data})
                 this.loadTimeSlots(this.startTime, this.endTime)
                 this.fillTable()
                 this.forceUpdate()
             }
         }).catch((e)=>{
             console.log('unable to get classes')
         })
     }

     setUpWeeks=()=>{
         for(let i=0; i<7;i++){
             this.weeksData[i]=[];
         }
     }
     fillTable=(classes)=>{
         this.setUpWeeks()
         for(let c in this.state.classes){
             let cls = this.state.classes[c];
             let startTime = new Date(cls.start_time);
             let endTime = new Date(cls.end_time);
             let shours = startTime.getHours()
             let dayCode = startTime.getDay();
             
              const schSlot = <ScheduledClass classData={cls} goToClass={this.props.goToClass} display={this.state.displayMode}/>
           //  const schSlot = {classData:cls}
             if(isDateInThisWeek(startTime)){
                 this.weeksData[dayCode].push(schSlot)
             }
            
         }
       
     }

     loadTimeSlots=(start,end)=>{
         for(let i = start; i < end+1; i++){
             let hours = i
             let ampm = 'am'
             if(i > 12){
                 hours = hours -12;
                 ampm = 'pm'
             }
             this.timeSlots.push({hours:i,timeString: hours+' '+ampm})
         }
        
         this.tableLength = 140*(end+1 - start)
         this.forceUpdate()
     }
     formatTimeFrom =(dateString)=>{
         let dateObj = new Date(dateString)
        
         let hours = dateObj.getHours()
         let mins = dateObj.getMinutes()
         let ampm = 'am'
         if(hours > 12){
             hours = hours -12;
             ampm = 'pm'
         }
         return hours+':'+mins+' '+ampm
     }
     changeDisplayMode(mode){
         this.setState({displayMode:mode})
       
     }   
       render() { 

        return ( 
            //tabItemTextActive
     
                    //   <View>
                    //       <View>
                    //           <View style={{width: '100%', backgroundColor:MainColorPalette.primary_b, paddingVertical: Sizes.radius}}>
                    //              <Text style={{ fontSize: Sizes.padding, color:MainColorPalette.white, textAlign:"center", fontFamily:"NunitoSans"}}> TimeTable</Text>
                    //           </View>
                             
                    //       </View>
                    //       <View style={styles.topBar}>
                    //       {/* <View><Text>Standard {formatClassroomName(this.props.student.standard,this.props.student.section)}</Text>  </View>     */}
                        
                    //       <View style={styles.tabSelector}>
                    //            <TouchableOpacity style={this.state.displayMode === 'compressed' ? styles.active : styles.tabItem} onPress={() => this.changeDisplayMode('compressed')}>
                    //               <Text style={this.state.displayMode === 'compressed' ? styles.tabItemTextActive : styles.tabItemText}>Period</Text>  
                    //            </TouchableOpacity>
                    //            <TouchableOpacity style={this.state.displayMode === 'timeline' ? styles.active : styles.tabItem}  onPress={() => this.changeDisplayMode('timeline')}>
                    //               <Text style={this.state.displayMode === 'timeline' ? styles.tabItemTextActive : styles.tabItemText}>Time Line</Text>   
                    //            </TouchableOpacity>
                    //       </View>

                    //       </View>

                    //       <ScrollView horizontal={true} style={styles.timeTableInner}>
                        
                    //           <View style={styles.daysHeader}>
                    //               <View day={0} style={{width: 50}}>
                    //                   <Text></Text>
                    //               </View>
                    //               <View day={0} style={{width:50}}>
                    //                   <Text>sun</Text>
                    //               </View>
                                 
                    //               <View   day={1} style={{width:50}}>
                    //                   <Text>mon</Text>
                    //               </View>
                    //               <View  day={2} style={{width:50}}>
                    //                   <Text>tue</Text>
                    //               </View>
                    //               <View  day={3} style={{width:50}}>
                    //                   <Text>wed</Text>
                    //               </View>
                    //               <View   day={4} style={{width:50}}>
                    //                   <Text>thu</Text>
                    //               </View>
                    //               <View  day={5} style={{width:50}}>
                    //                   <Text>fri</Text>
                    //               </View>
                    //               <View  day={6} style={{width:50}}>
                    //                   <Text>sat</Text>
                    //               </View>
                    //           </View>
                              
                    //     </ScrollView>
                    //  {/* <ScrollView vertical={true}> */}
                        
                    //  {/* </ScrollView> */}

                    //  <ScrollView vertical={true} style={styles.timeLineView}>
                    //          <View style={styles.dayColumns}>
                    //              <View style={styles.timeColumn}>
                    //              { this.timeSlots.map((slot,i)=>(
                    //                  <View style={styles.timeSlotBlock} key={i}>
                    //                      {this.state.displayMode==='timeline'?
                    //                         <>
                    //                         <Text>{slot.timeString}</Text>
                    //                          <TimeDashes />
                    //                          </>:
                    //                      <View style={styles.lectureDisplayBlock}>
                    //                          <Text>Lecture {(i+1)}</Text>
                    //                      </View>
                                            
                    //                      }
                    //                  </View>
                    //              ))}
                    //              </View>
                    //          </View>
                    //          {this.weeksData.map((weekDayData,i)=>(
                    //              <View key={i} style={[styles.dayColumn,{height:this.tableLength}]}>
                    //                  {weekDayData.map((dayData,i)=>(
                    //                     //   <ClassBlock key={i}
                    //                     //    classData={dayData.classData}
                    //                     //    beginHour={this.startTime}
                    //                     //    type={'student'}
                    //                     //    goToClass={this.props.goToClass}
                    //                     //    display={this.state.displayMode}/>
                    //                      <Text>class</Text>
                    //                  ))}
                                    
                    //              </View>
                    //          ))}
                    //      </ScrollView>
                         
                        
                    //   </View>
                    
        
        )
        
     }
 }
 
 export default Timetable;

 class TimeDashes extends Component {
     state = {  }
     dashes=[]
  //  WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
         for(let i=0;i<6;i++){
             this.dashes.push(
                 <View style={{height:5, width:20,borderBottomColor:"#d6d6d6",borderBottomWidth:1 }}></View>
             )
         }
         this.dashes.push(
             <View  style={{height:5, width:20,borderBottomColor:"#d6d6d6",borderBottomWidth:1}}></View>
         )
     }
    
     render() { 
         return ( 
             <View style={{flexDirection:"column", alignItems: "flex-end", width:30,borderBottomColor:"#d6d6d6",borderBottomWidth:1}}>
                 {this.dashes}
             </View>
          );
     }
 }
 

  class ScheduledClass extends Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
          const beginHour = 8;
          const startTime = new Date(this.props.classData.start_time)
          const displayPosition = (startTime.getHours() + startTime.getMinutes()/60 - beginHour) * 80;
          
          let blockStyle={
              top:displayPosition
          }
          if(this.props.display === 'compressed'){
            // blockStyle=position:'relative'
          }
          return ( 
              <View  onClick={()=>this.props.goToClass(this.props.classData)}>
                  <View><Text>{this.props.classData.classroom_subjects.subjects.name}</Text></View>
                  <View><Text>{startTime.getHours()+':'+startTime.getMinutes()}</Text></View>
                  <View><Text>{this.props.classData.classroom.standard+'th '+this.props.classData.classroom.section}</Text></View>
              </View>
           );
      }
  }

 const getStatus=(startTime, endTime)=>{
     const start = 9 * 60 + 15 
     const end = 15 * 60 + 30  
     var now = new Date();
     var currentTime = now.getHours() * 60 + now.getMinutes();
     if(currentTime > start && currentTime < end){
         return 'live'
     }else if(currentTime < start){
         return 'upcoming'
     }else{
         return 'completed'
     }
 }
 class ActualClass extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         const beginHour = 8;
         const startTime = new Date(this.props.classData.start_time)
         const displayPosition = (startTime.getHours() + startTime.getMinutes()/60 - beginHour) * 80;
         
         let blockStyle={
             top: displayPosition
         }
         if(this.props.display === 'compressed'){
             blockStyle={position:'relative',flex:'0 1 auto'}
         }
         const status = getStatus(this.props.classData.actual_start, this.props.classData.actual_end)
         const actualStyle = status === 'live'?'class-live':
                             status==='upcoming'?'class-upcoming':
                                                 'class-completed'
         return ( 
             <View  style={blockStyle} onClick={()=>this.props.goToClass(this.props.classData)}>
                 <View><Text>{this.props.classData.subject.name}</Text></View>
                 <View><Text>{startTime.getHours()+':'+startTime.getMinutes()}</Text></View>
                 <View><Text>{this.props.classData.classroom.standard+'th '+this.props.classData.classroom.section}</Text></View>
             </View>
          );
     }
 }



 

const timetableContainer=styled.View`
    display: flex;
    padding: 20px;
    flex-grow: 1;
    height: calc(100vh - 120px);
`;

const timetableBody=styled.TouchableOpacity`
    display: flex;
    flex-grow: 1;
    background-color: #fff;
    // box-shadow: 3px 8px  20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 4px;
    flex-direction: column;
    padding: 8px 2% 10px 0px;

`;
const tabSelector =styled.View`
    display: flex;
    margin-left: auto;
`;
   
const tabItem =styled.View`
      font-size: 12px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: left;
      color: #d5d5d5;
      padding-right: 15px;
      border-bottom: solid 1px #d5d5d5;
      cursor: pointer;
`;
   
  
const timetableHeader=styled.View`
    display: flex;
    height: 50px;
    align-items: center;
`;
const classHeaderDetails=styled.View`
    display: flex;
    flex-grow: 1;
`;
const legends=styled.View`
    display: flex;
    flex-grow: 1;
`;
const tHeader=styled.View`
    font-size: 20px;
    font-weight: bold;    
    text-align: left;
    color: #2a2d3d;
    margin: 0px 22px;
`;
const tSubDetails=styled.View`
    font-size: 14px;
    font-weight: bold;    
    text-align: left;
    color: #2a2d3d;
    line-height: 2;
    margin: 0px 18px;
`;
const daysHeader=styled.View`
    display: flex;        
    height: 60px;
    border-bottom: solid 2px #e8ebf5;
    padding-right: 4px;
`;
const timeHeader=styled.View`
    display: flex;
    flex-grow: 0const 75;
    // border-right: solid 1px #e8ebf5;
    
`;
const dayHeader=styled.View`
    position: relative;
    display: flex;
    
    flex:1; 

    // border-right: solid 1px #e8ebf5;
`;
const dayColumns=styled.View`
    display: flex;
    // height: max-content;
    flex-grow: 1;
`;
const timelineView=styled.View`
    display: flex;
    flex: 1;
    overflow-y: scroll;
    box-shadow: inset 1px -2px 10px 0px #00000015
`;
const timeColumn=styled.View`
    // display: flex;
    flex: 0const 75;
    // height: max-content;
    // flex-grow: 0const 75;
    border-right: solid 1px #e8ebf5;
    flex-direction: column;
    
`;
const timeSlotBlock=styled.View`
    height: 140px;
    display: flex;
    // align-items: center;
    justify-content: flex-end;
    border-right: solid 1px #e8ebf5;
`;
const timeDisplay=styled.View`
    display: flex;
    font-size: 14px;

`;
const lectureDisplayBlock=styled.View`
    display: flex;
    align-items: center;
    padding-right: 16px;
`;
const timeDashes=styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30px;
    // border-top: solid 1px #d6d6d6;
    border-bottom: solid 1px #d6d6d6;
`;
const dashes=styled.View`
    height: 20px;
    width: 15px;
    border-bottom: solid 1px #d6d6d6;
`;
const lectureNumber=styled.View`
    background-color: #dadada;
    color: #120d42;
    padding: 6px 12px;
    border-radius: 3px;
`;
const dayColumn=styled.View`
    display: flex;
    flex:1;   
    height: 2000px;
    flex-direction: column; 
    border-right: solid 1px #e8ebf5;
    position: relative;
`;
const dayColumnActive=styled.View`
    box-shadow: 0 3px 6px 0 #29396d40;
    background-color: #fffcef;
`;
const scheduledClass=styled.View`
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
    position: absolute;
    display: flex;
    height: 62px;
    width: 90%;
    margin: 0% 5%;
    flex-direction: column;
    flex:1 1 auto;
    padding: 8px;
    border: solid 1px #006666;
    background-color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
  
`;

const subjectName =styled.View`
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1const 33;
    letter-spacing: normal;
    text-align: left;
    color: #006666;
`;

const subjectTime=styled.View`
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #b3b3b4;
`;
const dayName = styled.View`
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
    // position: absolute;
    display: flex;
    height: 62px;
    width: 90%;
    margin: 0% 5%;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #120d42;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
    // flex:1 1 auto;
    // padding: 8px;
`;