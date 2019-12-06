'use strict';

const net = require('net'),
    tls     = require('tls'),
    fs = require('fs'),
    Message = require('js-message');
    

function connect(){
    //init client object for scope persistance especially inside of socket events.
    let client=this;

    client.log('requested connection to ', client.id, client.path);
   
    if(!this.path){
        client.log('\n\n######\nerror: ', client.id ,' client has not specified socket path it wishes to connect to.');
        return;
    }

    const options={};

    if(!client.port){
        client.log('Connecting client on Unix Socket :', client.path);

        options.path=client.path;

        if (process.platform ==='win32' && !client.path.startsWith('\\\\.\\pipe\\')){
            options.path = options.path.replace(/^\//, '');
            options.path = options.path.replace(/\//g, '-');
            options.path= `\\\\.\\pipe\\${options.path}`;
        }

        client.socket = net.connect(options);
    }else{
        options.host=client.path;
        options.port=client.port;

        if(client.config.interface.localAddress){
          options.localAddress=client.config.interface.localAddress;
        }

        if(client.config.interface.localPort){
          options.localPort=client.config.interface.localPort;
        }

        if(client.config.interface.family){
          options.family=client.config.interface.family;
        }

        if(client.config.interface.hints){
          options.hints=client.config.interface.hints;
        }

        if(client.config.interface.lookup){
          options.lookup=client.config.interface.lookup;
        }

        if(!client.config.tls){
            client.log('Connecting client via TCP to', options);
            client.socket = net.connect(options);
        }else{
            client.log('Connecting client via TLS to', client.path ,client.port,client.config.tls);
            if(client.config.tls.private){
                client.config.tls.key=fs.readFileSync(client.config.tls.private);
            }
            if(client.config.tls.public){
                client.config.tls.cert=fs.readFileSync(client.config.tls.public);
            }
            if(client.config.tls.trustedConnections){
                if(typeof client.config.tls.trustedConnections === 'string'){
                    client.config.tls.trustedConnections=[client.config.tls.trustedConnections];
                }
                client.config.tls.ca=[];
                for(let i=0; i<client.config.tls.trustedConnections.length; i++){
                    client.config.tls.ca.push(
                        fs.readFileSync(client.config.tls.trustedConnections[i])
                    );
                }
            }

            client.config.tls={...client.config.tls,options};

            client.socket = tls.connect(
                client.config.tls
            );
        }
    }

    client.socket.setEncoding(this.config.encoding);

    client.socket.on(
        'error',
        function(err){
            client.log('\n\n######\nerror: ', err);
            client.publish('error', err);

        }
    );

    client.socket.on(
        'connect',
        function connectionMade(){
            client.publish('connect');
            client.retriesRemaining=client.config.maxRetries;
            client.log('retrying reset');
        }
    );

    client.socket.on(
        'close',
        function connectionClosed(){
            client.log('connection closed' ,client.id , client.path,
            client.retriesRemaining, 'tries remaining of', client.config.maxRetries
        );

            if(
                client.config.stopRetrying ||
                client.retriesRemaining<1 ||
                client.explicitlyDisconnected

            ){
                client.publish('disconnect');
                client.log(
                    (client.config.id),
                    'exceeded connection rety amount of',
                    ' or stopRetrying flag set.'
                );

                client.socket.destroy();
                client.publish('destroy');
                client=undefined;

                return;
            }

            setTimeout(
                function retryTimeout(){
                    client.retriesRemaining--;
                    client.connect();
                }.bind(this,client),
                client.config.retry
            );

            client.publish('disconnect');
        }
    );

    client.socket.on(
        'data',
        function(data) {
            client.log('## received events ##');
            if(client.config.rawBuffer){
                client.publish(
                   'data',
                   new Buffer(data,client.config.encoding)
                );
                if(!client.config.sync){
                    return;
                }

                client.queue.next();
                return;
            }

            if(!this.ipcBuffer){
                this.ipcBuffer='';
            }

            data=(this.ipcBuffer+=data);

            if(data.slice(-1)!=client.eventParser.delimiter || data.indexOf(client.eventParser.delimiter) == -1){
                client.log('Messages are large, You may want to consider smaller messages.');
                return;
            }

            this.ipcBuffer='';

            const events = client.eventParser.parse(data);
            const eCount = events.length;
            for(let i=0; i<eCount; i++){
                let message=new Message;
                message.load(events[i]);

                client.log('detected event', message.type, message.data);
                client.publish(
                   message.type,
                   message.data
                );
            }

            if(!client.config.sync){
                return;
            }

            client.queue.next();
        }
    );
}

module.exports=connect;