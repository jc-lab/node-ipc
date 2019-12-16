'use-strict';

const net = require('net'),
    dgram = require('dgram');

function startServer() {
    const ipcServer=this;

    ipcServer.log(
        'starting server on ',ipcServer.path,
        ((ipcServer.port)?`:${ipcServer.port}`:'')
    );

    if(!ipcServer.udp4 && !ipcServer.udp6){
        ipcServer.log('starting TLS server',ipcServer.config.tls);
        if(!ipcServer.config.tls){
            ipcServer.socket=net.createServer();
        }else{
            ipcServer.startTLSServer();
        }
    }else{
        ipcServer.socket=dgram.createSocket(
            ((ipcServer.udp4)? 'udp4':'udp6')
        );
        ipcServer.socket.write=UDPWrite;
    }

    ipcServer.socket._ipc_server_=ipcServer;

    ipcServer.socket.on(
        'error',
        ipcServer.serverError.bind(ipcServer)
    );

    if(ipcServer.config.tls) {
        ipcServer.socket.on(
            'secureConnection',
            ipcServer.clientConnected.bind(ipcServer)
        );
    } else {
        ipcServer.socket.on(
            'connection',
            ipcServer.clientConnected.bind(ipcServer)
        );
    }

    ipcServer.socket.maxConnections=ipcServer.config.maxConnections;

    if(!ipcServer.port){
        ipcServer.log('starting server as', 'Unix || Windows Socket');
        if (process.platform ==='win32'){
            ipcServer.path = ipcServer.path.replace(/^\//, '');
            ipcServer.path = ipcServer.path.replace(/\//g, '-');
            ipcServer.path= `\\\\.\\pipe\\${ipcServer.path}`;
        }

        ipcServer.socket.listen(
            {
                path:ipcServer.path
            },
            ipcServer.onStart.bind(ipcServer)
        );

        return;
    }

    if(!ipcServer.udp4 && !ipcServer.udp6){
        ipcServer.log('starting server as', (ipcServer.config.tls?'TLS':'TCP'));
        ipcServer.socket.listen(
            {
                port:ipcServer.port,
                path:ipcServer.path
            },
            ipcServer.onStart.bind(ipcServer)
        );

        return;
    }

    ipcServer.log('starting server as',((ipcServer.udp4)? 'udp4':'udp6'));
}

module.exports = startServer;