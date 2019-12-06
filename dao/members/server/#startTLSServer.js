'use-strict';

const tls = require('tls'),
    fs = require('fs');

function startTLSServer(){
    this.log('starting TLS server',this.config.tls);
    if(this.config.tls.private){
        this.config.tls.key=fs.readFileSync(this.config.tls.private);
    }else{
        this.config.tls.key=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/private/server.key`);
    }
    if(this.config.tls.public){
        this.config.tls.cert=fs.readFileSync(this.config.tls.public);
    }else{
        this.config.tls.cert=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/server.pub`);
    }
    if(this.config.tls.dhparam){
        this.config.tls.dhparam=fs.readFileSync(this.config.tls.dhparam);
    }
    if(this.config.tls.trustedConnections){
        if(typeof this.config.tls.trustedConnections === 'string'){
            this.config.tls.trustedConnections=[this.config.tls.trustedConnections];
        }
        this.config.tls.ca=[];
        for(let i=0; i<this.config.tls.trustedConnections.length; i++){
            this.config.tls.ca.push(
                fs.readFileSync(this.config.tls.trustedConnections[i])
            );
        }
    }
    this.socket=tls.createServer(
        this.config.tls
    );
}

module.exports=startTLSServer;