import React, { Component } from 'react';
import { ReactComponent as Geometry} from "../../assets/graphics/graphic-math-1.svg"
import MaleProfile from "../../assets/img/male-profile.png";
import { Graphics } from '../../styles/graphics';
import { formatClassroomName, formatTimeFrom } from '../../services/util.services';
import {TouchableOpacity, Text, StyleSheet} from "react-native"
import { MainColorPalette,ColorPalette } from "../../styles/colorPalette"
import { ViewSize,Sizes } from "../../styles/sizes"
class ClassBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.display = 'compressed'
    }

    getTimeDifference(date1,date2){
        return Math.round((new Date(date2).getTime() - new Date(date1).getTime()) / 60000);
        
    }
    

    render() { 
        const Graphic = Graphics[this.props.classData.classroom_subjects.subjects.graphics] || Geometry;
        const isLive = this.props.classData.actual_start !== null && this.props.classData.actual_end === null
        this.display = this.props.display || 'compressed'
        const beginHour = this.props.beginHour || 8;
        const startTime = new Date(this.props.classData.start_time)
        const endTime = new Date(this.props.classData.end_time)
        const displayPosition = (startTime.getHours() + startTime.getMinutes()/60 - beginHour) * 140;
        const displayEndPosition = (endTime.getHours() + endTime.getMinutes()/60 - beginHour) * 140;
        const height= displayEndPosition - displayPosition
        const type = this.props.classData.actual_end === null? 'new':
                     (this.props.classData.actual_end === null && this.props.classData.actual_start !== null)?'live':
                     'old '
        // console.log('height',height)
        let blockStyle={
            position: 'absolute',
            // display: 'flex',
            // height: 62px;
            width: '90%',
            margin: '0% 5%',
            top:displayPosition,   
            height: height < 600? height: 600        
        }
        if(this.display === 'compressed'){
            blockStyle={
                position:'relative',
                // flex:'0 1 auto',
                // margin: '0% 5%',
                marginTop:5,
                marginBottom:5,
                height:130
            }
        }else if(this.display === 'custom'){
            // console.log(this.props.style)
            // blockStyle = this.props.style
        }
        return ( 
            <View style={blockStyle}  onClick={()=>this.props.goToClass(this.props.classData)}>
                <Text>ClassBlock</Text>
                {/* {isLive ? (
                <View className="container live-box" >
                    <View className="profile">
                    <img src={MaleProfile} alt="" />
                    <View>
                        <View className="subject">{this.props.classData.classroom_subjects.subjects.name}</View>
                        <View className="teacher">{formatClassroomName(this.props.classData.classroom.standard,this.props.classData.classroom.section)}</View>
                    </View>
                    </View>
                    <View className="details">
                    <View className="live">Live</View>
                    <View className="count">
                        <PeopleIcon className="people-icon" />
                        {this.props.peopleCount}
                    </View>
                    </View>
                    <View className="join-lecture">
                    Join Lecture
                    <ArrowForwardIcon className="arrow-icon" />
                    </View>
                </View>
                ) : (
                <View className={"container "+type} style={{borderColor:ColorPalette[this.props.classData.classroom_subjects.color_code]}}>
                    <View className="contents">
                        <View className="class-block-head">
                            <View className="subject">{this.props.classData.classroom_subjects.subjects.name}</View>
                            <TimerIcon className="time-icon" />
                            <View className="timer">{this.getTimeDifference(this.props.classData.start_time,this.props.classData.end_time)} min</View>
                        </View>
                        <View className="time">
                            {formatTimeFrom( this.props.classData.start_time)} - {formatTimeFrom(this.props.classData.end_time)}
                        </View>
                        <View className="users too-short">
                            <View className="teacher-name">
                                {this.props.type==='teacher'?formatClassroomName(this.props.classData.classroom.standard,this.props.classData.classroom.section):
                                this.props.classData.teacher.user.name}
                            </View>
                            <View className="people-count">
                                <PeopleIcon className="icon" />
                                {0}
                            </View>
                        </View>
                    </View>
                    <View className="graphic-container">
                        <Graphic className="graphic-faint"  fill={ColorPalette[this.props.classData.classroom_subjects.color_code]}/>
                        <Graphic className="graphic-main" fill={ColorPalette[this.props.classData.classroom_subjects.color_code]}/>
                    </View>
                </View>
                )} */}
            </View>
           
         );
    }
}
 
export default ClassBlock;