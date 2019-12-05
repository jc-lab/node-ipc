'use strict';

const Message = require('js-message');
    
function emit(type,data){
    this.log('dispatching event to ', this.id, this.path, ' : ', type, ',', data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(this.config.rawBuffer){
        message=new Buffer(type,this.config.encoding);
    }else{
        message=this.eventParser.format(message);
    }

    if(!this.config.sync){
        this.socket.write(message);
        return;
    }

    this.queue.add(
        syncEmit.bind(this,message)
    );
}

function syncEmit(message){
    this.log('dispatching event to ', this.id, this.path, ' : ', message);
    this.socket.write(message);
}

module.exports=emit;