'use-strict';

const Message = require('js-message');

function send(socket,type, data){
    const ipcServer=this;

    ipcServer.log('dispatching event to socket : ', type, data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(ipcServer.config.rawBuffer){
        ipcServer.log(ipcServer.config.encoding)
        message=Buffer.from(type,ipcServer.config.encoding);
    }else{
        message=ipcServer.eventParser.format(message);
    }

    if(ipcServer.udp4 || ipcServer.udp6){

        if(!socket.address || !socket.port){
            ipcServer.log('Attempting to emit to a single UDP socket without supplying socket address or port. Redispatching event as broadcast to all connected sockets');
            ipcServer.broadcast(type,data);
            return;
        }

        return socket.write(
            message,
            ipcServer.config.encoding
        );
    }

    return socket.write(
        message,ipcServer.config.encoding
    );
}

module.exports=send;