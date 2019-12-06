'use-strict';

function UDPWrite(message,socket){
    let data=Buffer.from(message, this.config.encoding);
    this.socket.send(
        data,
        0,
        data.length,
        socket.port,
        socket.address,
        function(err, bytes) {
            if(err){
                this.log('error writing data to socket',err);
                this.emit(
                    'error',
                    function(err){
                        this.emit('error',err);
                    }
                );
            }
        }
    );
}

module.exports=UDPWrite;