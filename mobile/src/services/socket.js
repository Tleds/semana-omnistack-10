import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.24:3333',{
  autoConnect: false,
});
exports.subscribeToNewDevs = function subscribeToNewDevs(subscribeFuncion){
  socket.on('new-dev', subscribeFuncion);
}
exports.connect = function connect({latitude,longitude,techs}){
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  }
  
  socket.connect();
}

exports.disconnect = function disconnect(){
  if(socket.connected){
    socket.disconnect();
  }
}