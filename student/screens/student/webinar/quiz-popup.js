// import React, { Component } from 'react';

// import TimerIcon from '../../../assets/icons/timer.svg';

// const active = {backgroundColor:'#29396d',color: '#fff'};
// const inactive = {backgroundColor:'#fff'};
// let tempq = `In Figure, from the top of a solid cone of height 12 cm and base radius
// 6 cm, a cone of height 4 cm is removed by a plane parallel to the base.
// Find the total surface area of the remaining solid. `;

// class QuizPopup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             question: tempq,
//             option1:'',
//             option2:'',
//             option3:'',
//             option4:'',
//             selectedOption:'',
//             timerValue: props.quizData.duration,
//             quizExpired: false
//          }
//     }

//     componentDidMount(){
//         this.startTimer()
//     }
//     selectOption=(op)=>{
//         this.setState({selectedOption:op})
//     }
//     startTimer=()=>{
//         var timer = setInterval(()=>{
            
//                 let timerValue = this.state.timerValue - 1;
                
//                 // this.state.timerValue = timerValue;
//                 this.setState({timerValue})
//                 if(this.state.timerValue < 1){
//                     clearInterval(timer)
//                     this.expireQuiz()
//                 }
//         },1000)
//     }

//     expireQuiz=()=>{
//         this.setState({quizExpired:true})
//         setTimeout(this.submitAnswer(),2000)
//     }

//     submitAnswer=()=>{
//         const data={
            
//             selectedOption: this.state.selectedOption
//         }
//         this.props.submitQuizAnswer(data)
//         this.props.toggle(false)
//     }
//     render() { 
//         return ( 
//             <div className="quiz-popup">
//                 {!this.state.quizExpired?
//                     <div>
//                         <div style={{display:'flex',justifyContent:'space-between',color:'#29396d'}}>
//                             <div style={{fontSize:'14px',fontWeight:'900'}}>Quiz question 1</div>
//                             <div className="quiz-timer"><img src={TimerIcon} style={{height:'27px',marginRight:'10px'}}/>{ this.state.timerValue} sec</div>
//                         </div>
                        
//                         <div className="quiz-question-container">
//                             <b>Q 1: </b>{this.props.quizData.question}
//                         </div>
//                         <div style={{fontWeight:'600',fontSize:'19px'}}>Options.</div>
//                         <div className="quiz-options">
//                         <div className="quiz-option" onClick={()=>{this.selectOption(0)}} style={this.state.selectedOption===0?active:inactive}>A: {this.props.quizData.option1}</div> 
//                         <div className="quiz-option" onClick={()=>{this.selectOption(1)}} style={this.state.selectedOption===1?active:inactive}>B: {this.props.quizData.option2}</div> 
//                         <div className="quiz-option" onClick={()=>{this.selectOption(2)}} style={this.state.selectedOption===2?active:inactive}>C: {this.props.quizData.option3}</div> 
//                         <div className="quiz-option" onClick={()=>{this.selectOption(3)}} style={this.state.selectedOption===3?active:inactive}>D:{this.props.quizData.option4}</div> 
                        
//                         </div>
//                         {/* <div className="login-button" onClick={()=>this.submitAnswer()}>Submit</div> */}
//                     </div>:
//                     <div>
//                         <h1>Quiz Expired !</h1>
//                     </div>
//                 }
                
//             </div>
//          );
//     }
// }
 
// export default QuizPopup;