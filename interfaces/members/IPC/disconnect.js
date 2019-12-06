'use strict';

function disconnect(id){
    const ipc=this;
    
    if(!ipc.of[id]){
        return;
    }

    ipc.of[id].explicitlyDisconnected=true;

    ipc.of[id].off('*','*');
    if(ipc.of[id].socket){
        if(ipc.of[id].socket.destroy){
            ipc.of[id].socket.destroy();
        }
    }

    delete ipc.of[id];
}

module.exports = disconnect;