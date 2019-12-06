'use-strict';

const Message = require('js-message');

function send(type, data){
    this.log('dispatching event to socket : ', type, data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(this.config.rawBuffer){
        this.log(this.config.encoding)
        message=Buffer.from(type,this.config.encoding);
    }else{
        message=this.eventParser.format(message);
    }

    if(this.udp4 || this.udp6){

        if(!this.socket.address || !this.socket.port){
            this.log('Attempting to emit to a single UDP socket without supplying socket address or port. Redispatching event as broadcast to all connected sockets');
            this.broadcast(type,data);
            return;
        }

        return this.socket.write(
            message,
            this.config.encoding
        );
    }

    return this.socket.write(
        message,this.config.encoding
    );
}

module.exports=send;