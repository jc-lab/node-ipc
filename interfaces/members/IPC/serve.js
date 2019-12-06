'use strict';

const Server = require('../../../dao/socketServer.js');

function serve(path,callback){
    const ipc=this;
    
    if(typeof path=='function'){
        callback=path;
        path=false;
    }
    if(!path){
        ipc.log(
            'Server path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + ipc.config.id',
            ipc.config.socketRoot+ipc.config.appspace+ipc.config.id
        );
        path=ipc.config.socketRoot+ipc.config.appspace+ipc.config.id;
    }

    if(!callback){
        callback=emptyCallback;
    }

    ipc.server=new Server(
        path,
        ipc.config,
        ipc.log
    );

    ipc.server.on(
        'start',
        callback
    );
}

function emptyCallback(){};

module.exports = serve;