'use-strict';

function clientConnected(socket) {
    this.sockets.push(socket);
    
    if(socket.setEncoding){
        socket.setEncoding(this.config.encoding);
    }

    this.log('## socket connection to server detected ##');
    
    socket.on(
        'close',
        this.socketClosed.bind(this,socket)
    );

    socket.on(
        'error',
        //should be moved out of this file
        function(socket,err){
            this.log('server socket error',err);

            this.emit('error',{err,socket});
        }.bind(this,socket)
    );

    socket.on(
        'data',
        this.gotData.bind(this,socket)
    );

    this.emit(
        'connect',
        socket
    );
}

module.exports=clientConnected;