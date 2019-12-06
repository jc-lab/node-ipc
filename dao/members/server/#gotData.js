'use-strict';

const Message = require('js-message');

function gotData(socket,data,UDPSocket){

    console.log(data,UDPSocket);

    let sock=((this.udp4 || this.udp6)? UDPSocket : socket);
    if(this.config.rawBuffer){
        data=Buffer.from(data,this.config.encoding);
        this.emit(
            'data',
            data,
            sock
        );
        return;
    }

    if(!sock.ipcBuffer){
        sock.ipcBuffer='';
    }

    data=(sock.ipcBuffer+=data);

    if(data.slice(-1)!=this.eventParser.delimiter || data.indexOf(this.eventParser.delimiter) == -1){
        this.log('Messages are large, You may want to consider smaller messages.');
        return;
    }

    sock.ipcBuffer='';

    data=this.eventParser.parse(data);

    while(data.length>0){
        let message=new Message;
        message.load(data.shift());

        // Only set the sock id if it is specified.
        if (message.data && message.data.id){
            sock.id=message.data.id;
        }

        this.log('received event of : ',message.type,message.data);

        this.emit(
            message.type,
            message.data,
            sock
        );
    }
}

module.exports=gotData;