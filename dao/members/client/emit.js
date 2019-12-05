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
        this.syncEmit.bind(this,message)
    );
}

module.exports=emit;