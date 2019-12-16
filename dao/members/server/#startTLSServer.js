'use-strict';

const tls = require('tls'),
    fs = require('fs');

function startTLSServer(){
    const ipcServer=this;

    const temp_tls = Object.assign({}, ipcServer.config.tls);
    if(temp_tls.key) {
        temp_tls.key = '#SECURE#';
    }
    if(temp_tls.cert) {
        temp_tls.cert = '...';
    }

    ipcServer.log('starting TLS server',temp_tls);
    if(!ipcServer.config.tls.key) {
        if (ipcServer.config.tls.private) {
            ipcServer.config.tls.key = fs.readFileSync(ipcServer.config.tls.private);
        } else {
            ipcServer.config.tls.key = fs.readFileSync(`${__dirname}/../local-node-ipc-certs/private/server.key`);
        }
    }
    if(!ipcServer.config.tls.cert) {
        if (ipcServer.config.tls.public) {
            ipcServer.config.tls.cert = fs.readFileSync(ipcServer.config.tls.public);
        } else {
            ipcServer.config.tls.cert = fs.readFileSync(`${__dirname}/../local-node-ipc-certs/server.pub`);
        }
    }
    if(ipcServer.config.tls.dhparam && (typeof ipcServer.config.tls.dhparam === 'string') && !ipcServer.config.tls.dhparam.startsWith("-----BEGIN DH PARAMETERS-----")) {
        ipcServer.config.tls.dhparam = fs.readFileSync(ipcServer.config.tls.dhparam);
    }
    if(ipcServer.config.tls.trustedConnections){
        if(typeof ipcServer.config.tls.trustedConnections === 'string'){
            ipcServer.config.tls.trustedConnections=[ipcServer.config.tls.trustedConnections];
        }
        ipcServer.config.tls.ca=[];
        for(let i=0; i<ipcServer.config.tls.trustedConnections.length; i++) {
            const item = ipcServer.config.tls.trustedConnections[i];
            if((typeof item === 'string') && !item.startsWith("-----BEGIN")) {
                ipcServer.config.tls.ca.push(
                    fs.readFileSync(ipcServer.config.tls.trustedConnections[i])
                );
            }else{
                ipcServer.config.tls.ca.push(item);
            }
        }
    }
    ipcServer.socket=tls.createServer(
        ipcServer.config.tls
    );
}

module.exports=startTLSServer;