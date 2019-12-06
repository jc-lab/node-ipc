'use strict';

const Server = require('../../../dao/socketServer.js');

function emptyCallback(){};

function serveNet(host,port,UDPType,callback){
    const ipc=this;
    
    if(typeof host=='number'){
        callback=UDPType;
        UDPType=port;
        port=host;
        host=false;
    }
    if(typeof host=='function'){
        callback=host;
        UDPType=false;
        host=false;
        port=false;
    }
    if(!host){
        ipc.log(
            'Server host not specified, so defaulting to',
            'ipc.config.networkHost',
            ipc.config.networkHost
        );
        host=ipc.config.networkHost;
    }
    if(host.toLowerCase()=='udp4' || host.toLowerCase()=='udp6'){
        callback=port;
        UDPType=host.toLowerCase();
        port=false;
        host=ipc.config.networkHost;
    }

    if(typeof port=='string'){
        callback=UDPType;
        UDPType=port;
        port=false;
    }
    if(typeof port=='function'){
        callback=port;
        UDPType=false;
        port=false;
    }
    if(!port){
        ipc.log(
            'Server port not specified, so defaulting to',
            'ipc.config.networkPort',
            ipc.config.networkPort
        );
        port=ipc.config.networkPort;
    }

    if(typeof UDPType=='function'){
        callback=UDPType;
        UDPType=false;
    }

    if(!callback){
        callback=emptyCallback;
    }

    ipc.server=new Server(
        host,
        ipc.config,
        ipc.log,
        port
    );

    if(UDPType){
        ipc.server[UDPType]=true;
        if(UDPType === "udp4" && host === "::1") {
            // bind udp4 socket to an ipv4 address
            ipc.server.path = "127.0.0.1";
        }
    }

    ipc.server.on(
        'start',
        callback
    );

    if(ipc.config.autoServe){
        ipc.server.start();
    }

    return ipc;
}

module.exports = serveNet;