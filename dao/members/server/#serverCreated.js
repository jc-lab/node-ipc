'use-strict';

function serverCreated(socket) {
    this.sockets.push(socket);

    if(socket.setEncoding){
        socket.setEncoding(this.config.encoding);
    }

    this.log('## socket connection to server detected ##');
    socket.on(
        'close',
        this.socketClosed
    );

    socket.on(
        'error',
        function(err){
            this.log('server socket error',err);

            this.publish('error',err);
        }
    );

    socket.on(
        'data',
        this.gotData(socket)
    );

    socket.on(
        'message',
        function(msg,rinfo) {
            if (!rinfo){
                return;
            }

            this.log('Received UDP message from ', rinfo.address, rinfo.port);
            let data;

            if(this.config.rawSocket){
                data=Buffer.from(msg,this.config.encoding);
            }else{
                data=msg.toString();
            }
            socket.emit('data',data,rinfo);
        }
    );

    this.publish(
        'connect',
        socket
    );
}

module.exports=serverCreated;