'use-strict';

const Message = require('js-message');

function broadcast(type,data){
    const ipcServer=this;

    ipcServer.log('broadcasting event to all known sockets listening to ', ipcServer.path,' : ', ((ipcServer.port)?ipcServer.port:''), type, data);
    let message=new Message;
    message.type=type;
    message.data=data;

    if(ipcServer.config.rawBuffer){
        message=Buffer.from(type,ipcServer.config.encoding);
    }else{
        message=ipcServer.eventParser.format(message);
    }

    if(ipcServer.udp4 || ipcServer.udp6){
        for(let socket of ipcServer.sockets){
            ipcServer.socket.write(message,ipcServer.config.encoding);
        }
    }else{
        for(let socket of ipcServer.sockets){
            socket.write(message,ipcServer.config.encoding);
        }
    }
}

module.exports=broadcast;