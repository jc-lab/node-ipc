'use-strict';

function serverClosed(){
    let i=-1;
    for(let socket of this.sockets){
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

        this.log('socket disconnected',destroyedSocketId.toString());

        if(socket && socket.destroy){
            socket.destroy();
        }

        this.sockets.splice(i,1);

        this.publish('socket.disconnected', socket, destroyedSocketId);

        return;
    }
}

module.exports=serverClosed;