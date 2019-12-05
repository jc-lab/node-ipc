'use-strict';

function serverClosed(){
    for(let i=0, count=this.sockets.length; i<count; i++){
        let socket=this.sockets[i];
        let destroyedSocketId=false;

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