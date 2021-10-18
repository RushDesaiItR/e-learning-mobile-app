import io from "socket.io-client";
const config = require('../config/config');

const HOST = config.host;
const WEBINAR_HOST = config.webinarHost


export const socket = io(HOST, { 
    reconnection: true,
    reconnectionAttempts: 100,
    reconnectionDelay: 3000
  });

export const streamSocket = io(WEBINAR_HOST + '/stream');
