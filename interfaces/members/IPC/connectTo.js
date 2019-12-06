'use strict';

const Client = require('../../../dao/client.js');

function emptyCallback(){};

function connectTo(id,path,callback){
    const ipc=this;

    if(typeof path == 'function'){
        callback=path;
        path=false;
    }

    if(!callback){
        callback=emptyCallback;
    }

    if(!id){
        ipc.log(
            'Service id required',
            'Requested service connection without specifying service id. Aborting connection attempt'
        );
        return;
    }

    if(!path){
        ipc.log(
            'Service path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + id',
            (ipc.config.socketRoot+ipc.config.appspace+id).data
        );
        path=ipc.config.socketRoot+ipc.config.appspace+id;
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
    ipc.of[id].path = path;

    ipc.of[id].connect();

    callback(ipc);
}

module.exports = connectTo;