'use-strict';

function UDPWrite(message,socket){
    const ipcServer=this;
    
    let data=Buffer.from(message, ipcServer.config.encoding);
    ipcServer.socket.send(
        data,
        0,
        data.length,
        socket.port,
        socket.address,
        function(err, bytes) {
            if(err){
                ipcServer.log('error writing data to socket',err);
                ipcServer.emit(
                    'error',
                    function(err){
                        ipcServer.emit('error',err);
                    }
                );
            }
        }
    );
}

module.exports=UDPWrite;