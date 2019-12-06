'use-strict';

function syncEmit(message){
    const client=this;
    
    client.log('dispatching event to ', client.id, client.path, ' : ', message);
    client.socket.write(message);
}

module.exports=syncEmit;