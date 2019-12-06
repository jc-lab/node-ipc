'use strict';

const Message = require('js-message');
    
function send(type,data){
    const client=this;
    
    client.log('dispatching event to ', client.id, client.path, ' : ', type, ',', data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(client.config.rawBuffer){
        message=new Buffer(type,client.config.encoding);
    }else{
        message=client.eventParser.format(message);
    }

    if(!client.config.sync){
        client.server.write(message);
        return;
    }

    client.queue.add(
        client.syncEmit.bind(client,message)
    );
}

module.exports=send;