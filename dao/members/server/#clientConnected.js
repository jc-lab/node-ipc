'use-strict';

function clientConnected(socket) {
    const ipcServer=this;

    ipcServer.sockets.push(socket);
    
    if(socket.setEncoding){
        socket.setEncoding(ipcServer.config.encoding);
    }

    ipcServer.log('## socket connection to server detected ##');
    
    socket.on(
        'close',
        ipcServer.clientClosed.bind(ipcServer,socket)
    );

    socket.on(
        'error',
        //should be moved out of ipcServer file
        function(socket,err){
            ipcServer.log('server socket error',err);

            ipcServer.emit('error',{err,socket});
        }.bind(ipcServer,socket)
    );

    socket.on(
        'data',
        ipcServer.gotData.bind(ipcServer,socket)
    );

    ipcServer.emit(
        'connect',
        socket
    );
}

module.exports=clientConnected;