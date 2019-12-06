'use-strict';
const net = require('net'),
    dgram = require('dgram');

function startServer() {
    console.log(this);
    this.log(
        'starting server on ',this.path,
        ((this.port)?`:${this.port}`:'')
    );

    if(!this.udp4 && !this.udp6){
        this.log('starting TLS server',this.config.tls);
        if(!this.config.tls){
            this.server=net.createServer(
                this.serverCreated
            );
        }else{
            this.startTLSServer();
        }
    }else{
        this.server=dgram.createSocket(
            ((this.udp4)? 'udp4':'udp6')
        );
        this.server.write=UDPWrite;
        this.server.on(
            'listening',
            function UDPServerStarted() {
                serverCreated(this.server);
            }
        );
    }

    this.server.on(
        'error',
        function(err){
            this.log('server error',err);

            this.publish(
                'error',
                err
            );
        }
    );

    this.server.maxConnections=this.config.maxConnections;

    if(!this.port){
        this.log('starting server as', 'Unix || Windows Socket');
        if (process.platform ==='win32'){
            this.path = this.path.replace(/^\//, '');
            this.path = this.path.replace(/\//g, '-');
            this.path= `\\\\.\\pipe\\${this.path}`;
        }

        this.server.listen(
            this.path,
            this.onStart
        );

        return;
    }

    if(!this.udp4 && !this.udp6){
        this.log('starting server as', (this.config.tls?'TLS':'TCP'));
        this.server.listen(
            this.port,
            this.path,
            this.onStart
        );
        return;
    }

    this.log('starting server as',((this.udp4)? 'udp4':'udp6'));

    this.onStart(
        {
            address : this.path,
            port    : this.port
        }
    );
}

module.exports = startServer;