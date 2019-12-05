'use-strict';
const net = require('net'),
    dgram = require('dgram');

function startServer() {
    this.log(
        'starting server on ',this.path,
        ((this.port)?`:${this.port}`:'')
    );

    if(!this.udp4 && !this.udp6){
        this.log('starting TLS server',this.config.tls);
        if(!this.config.tls){
            this.server=net.createServer(
                this.serverCreated.bind(this)
            );
        }else{
            this.startTLSServer.bind(this)();
        }
    }else{
        this.server=dgram.createSocket(
            ((this.udp4)? 'udp4':'udp6')
        );
        this.server.write=UDPWrite.bind(this);
        this.server.on(
            'listening',
            function UDPServerStarted() {
                serverCreated.bind(this)(this.server);
            }.bind(this)
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
        }.bind(this)
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
            this.onStart.bind(this)
        );

        return;
    }

    if(!this.udp4 && !this.udp6){
        this.log('starting server as', (this.config.tls?'TLS':'TCP'));
        this.server.listen(
            this.port,
            this.path,
            this.onStart.bind(this)
        );
        return;
    }

    this.log('starting server as',((this.udp4)? 'udp4':'udp6'));

    this.server.bind(
        this.port,
        this.path
    );

    this.onStart(
        {
            address : this.path,
            port    : this.port
        }
    );
}

module.exports = startServer;