'use-strict';

function clientClosed(socket){
    const ipcServer=this;

    ipcServer.emit(
        'close',
        socket
    );
}

module.exports=clientClosed;