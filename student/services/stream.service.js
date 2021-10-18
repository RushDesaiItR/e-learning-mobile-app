
import io from "socket.io-client";
import { streamSocket } from "./socket"
const config = require('../config/config')
const HOST = config.host
const API = config.api

const WEBINAR_HOST = config.webinarHost

export const socketPromise = function (socket) {
  return function request(type, data = {}) {
    return new Promise(resolve => {
      socket.emit(type, data, resolve);
    });
  };
};
export class StreamService {
    // socket: SocketIOClient.Socket & { request?: any };
    // secondarySocket: SocketIOClient.Socket & { request?: any };
    // constructor(private http: HttpClient) { }
  
    constructor() {
      // this.socket = io(environment.wsURL + '/primary-stream', {
      //   path: '/api/socket.io'
      // });
      this.socket = streamSocket;      
      this.socket.request = socketPromise(this.socket);
    }
    
    // createStudentStream(unique_hash,studentId,user) {
    //   this.studentStream ={
    //     userId:user.id,
    //     user,
    //     studentId,
    //     unique_hash,
    //     id: unique_hash+'-s-'+user.id
    //   }
    // }
  
    async joinStream(data) { 
      return await this.socket.request('join-stream',data);
    }
    async getLiveStreams() {
      return await this.socket.request('active-streams');
    }
  
    async createStream({ name, userId }) {
      return await this.socket.request('create-stream', { name, userId });
    }
  
    // async createSecondaryStream({ name, userId }) {
    //   return await this.secondarySocket.request('create-stream', { name, userId });
    // }
  
    // async getStream(id: string) {
    //   return await this.socket.request('get-stream', { id });
    // }
  
    // async getStreamState(id: string) {
    //   return await this.socket.request('stream-status', { streamId: id });
    // }
  
    async getCapabilities() {
      return await this.socket.request('get-capabilities');
    }
  
    // async getSecondaryCapabilities() {
    //   return await this.secondarySocket.request('get-capabilities');
    // }
    async checkStream(data) {
      return await this.socket.request('get-producer',data);
    }
  
    async startStream(data) {
      return await this.socket.request('create-producer-transport', data);
    }
  
    // async startSecondaryStream(classData ) {
      
    //    const data =  { stream: classData, studentStream: this.studentStream }
    //    console.log(data)
    //   return await this.secondarySocket.request('start-stream', data);
    // }
  
    async connectProducerTransport(data) {
        
      return await this.socket.request('connect-producer-transport', data);
    }
  
    
  
    async sendProduceNotification(data) {
      return await this.socket.request('produce-media', data);
    }
  
    
  
    
  
    async createConsumerTransport(data){
      return await this.socket.request('create-consumer-transport', data);
    }
  
    async connectConsumerTransport(data) {
      return await this.socket.request('connect-consumer-transport', data);
    }
  
    async consumeMedia(data) {
      return await this.socket.request('consume-media', data);
    }
  
    
  
    async resumeProducer(data) {
      return await this.socket.request('resume-producer', data);
    }
  
    
  
    async getConsumers(data) {
      return await this.socket.request('get-consumers', data);
    }
    // async getSecondaryProducers(data) {
    //   return await this.secondarySocket.request('get-producers', data);
    // }
  
    async startRecording(data) {
      return await this.socket.request('start-recording', data);
    }
  
    async stopStream(data) {
      return await this.socket.request('stop-stream', data);
    }
  
    async disconnectStream(data) { 
      return await this.socket.request('disconnect-stream', data);
    }
  
    async sendMessage(data){
      return await this.socket.request('new-message',data);
    }
  }
  
 