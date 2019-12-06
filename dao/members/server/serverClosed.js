'use-strict';

function serverClosed(){
    const ipcServer=this;

    let i=-1;
    for(let socket of ipcServer.sockets){
        let destroyedSocketId=false;
        i++;

        if(socket){
            if(socket.readable){
                continue;
            }
        }

        if(socket.id){
            destroyedSocketId=socket.id;
        }

        ipcServer.log('socket disconnected',destroyedSocketId.toString());

        if(socket && socket.destroy){
            socket.destroy();
        }

        ipcServer.sockets.splice(i,1);

        ipcServer.emit('socket.disconnected', socket, destroyedSocketId);

        return;
    }
}

module.exports=serverClosed;