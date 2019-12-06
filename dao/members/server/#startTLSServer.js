'use-strict';

const tls = require('tls'),
    fs = require('fs');

function startTLSServer(){
    const ipcServer=this;
    
    ipcServer.log('starting TLS server',ipcServer.config.tls);
    if(ipcServer.config.tls.private){
        ipcServer.config.tls.key=fs.readFileSync(ipcServer.config.tls.private);
    }else{
        ipcServer.config.tls.key=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/private/server.key`);
    }
    if(ipcServer.config.tls.public){
        ipcServer.config.tls.cert=fs.readFileSync(ipcServer.config.tls.public);
    }else{
        ipcServer.config.tls.cert=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/server.pub`);
    }
    if(ipcServer.config.tls.dhparam){
        ipcServer.config.tls.dhparam=fs.readFileSync(ipcServer.config.tls.dhparam);
    }
    if(ipcServer.config.tls.trustedConnections){
        if(typeof ipcServer.config.tls.trustedConnections === 'string'){
            ipcServer.config.tls.trustedConnections=[ipcServer.config.tls.trustedConnections];
        }
        ipcServer.config.tls.ca=[];
        for(let i=0; i<ipcServer.config.tls.trustedConnections.length; i++){
            ipcServer.config.tls.ca.push(
                fs.readFileSync(ipcServer.config.tls.trustedConnections[i])
            );
        }
    }
    ipcServer.socket=tls.createServer(
        ipcServer.config.tls
    );
}

module.exports=startTLSServer;