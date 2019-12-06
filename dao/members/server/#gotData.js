'use-strict';

const Message = require('js-message');

function gotData(socket,data,UDPSocket){
    const ipcServer=this; 

    let sock=((ipcServer.udp4 || ipcServer.udp6)? UDPSocket : socket);
    if(ipcServer.config.rawBuffer){
        data=Buffer.from(data,ipcServer.config.encoding);
        ipcServer.emit(
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

    if(data.slice(-1)!=ipcServer.eventParser.delimiter || data.indexOf(ipcServer.eventParser.delimiter) == -1){
        ipcServer.log('Messages are large, You may want to consider smaller messages.');
        return;
    }

    sock.ipcBuffer='';

    data=ipcServer.eventParser.parse(data);

    while(data.length>0){
        let message=new Message;
        message.load(data.shift());

        // Only set the sock id if it is specified.
        if (message.data && message.data.id){
            sock.id=message.data.id;
        }

        ipcServer.log('received event of : ',message.type,message.data);

        ipcServer.emit(
            message.type,
            message.data,
            sock
        );
    }
}

module.exports=gotData;