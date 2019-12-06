'use strict';

const Client = require('../../../dao/client.js'),
    Server = require('../../../dao/socketServer.js');

function emptyCallback(){};

function connectToNet(id,host,port,callback){
    const ipc=this;
    
    if(!id){
        ipc.log(
            'Service id required',
            'Requested service connection without specifying service id. Aborting connection attempt'
        );
        return;
    }
    if(typeof host=='number'){
        callback=port;
        port=host;
        host=false;
    }
    if(typeof host=='function'){
        callback=host;
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

    if(typeof port=='function'){
        callback=port;
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

    if(typeof callback == 'string'){
        UDPType=callback;
        callback=false;
    }
    if(!callback){
        callback=emptyCallback;
    }

    if(ipc.of[id]){
        if(!ipc.of[id].socket.destroyed){

            ipc.log(
                'Already Connected to',
                id,
                '- So executing success without connection'
            );
            callback();
            return;
        }
        ipc.of[id].socket.destroy();
    }

    ipc.of[id] = new Client(ipc.config,ipc.log);
    ipc.of[id].id = id;
    ipc.of[id].path = host;
    ipc.of[id].port = port;

    ipc.of[id].connect();



    callback(ipc);
}

module.exports = connectToNet;