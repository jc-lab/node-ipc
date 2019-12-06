'use-strict';

const net = require('net'),
    dgram = require('dgram');

function startServer() {
    const ipcServer=this;

    this.log(
        'starting server on ',this.path,
        ((this.port)?`:${this.port}`:'')
    );

    if(!this.udp4 && !this.udp6){
        this.log('starting TLS server',this.config.tls);
        if(!this.config.tls){
            this.socket=net.createServer();
        }else{
            this.startTLSServer();
        }
    }else{
        this.socket=dgram.createSocket(
            ((this.udp4)? 'udp4':'udp6')
        );
        this.socket.write=UDPWrite;
    }

    this.socket._ipc_server_=this;

    this.socket.on(
        'error',
        this.serverError.bind(this)
    );

    this.socket.on(
        'connection',
        this.clientConnected.bind(this)
    );

    this.socket.maxConnections=this.config.maxConnections;

    if(!this.port){
        this.log('starting server as', 'Unix || Windows Socket');
        if (process.platform ==='win32'){
            this.path = this.path.replace(/^\//, '');
            this.path = this.path.replace(/\//g, '-');
            this.path= `\\\\.\\pipe\\${this.path}`;
        }

        this.socket.listen(
            {
                path:this.path
            },
            this.onStart.bind(this)
        );

        return this;
    }

    if(!this.udp4 && !this.udp6){
        this.log('starting server as', (this.config.tls?'TLS':'TCP'));
        this.socket.listen(
            {
                port:this.port,
                path:this.path
            },
            this.onStart.bind(this)
        );

        return this;
    }

    this.log('starting server as',((this.udp4)? 'udp4':'udp6'));
}

module.exports = startServer;