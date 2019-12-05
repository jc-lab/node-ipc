'use strict';

const Server = require('../dao/socketServer.js');

function serve(path,callback){
    if(typeof path=='function'){
        callback=path;
        path=false;
    }
    if(!path){
        this.log(
            'Server path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + ipc.config.id',
            this.config.socketRoot+this.config.appspace+this.config.id
        );
        path=this.config.socketRoot+this.config.appspace+this.config.id;
    }

    if(!callback){
        callback=emptyCallback;
    }

    this.server=new Server(
        path,
        this.config,
        this.log
    );

    this.server.on(
        'start',
        callback
    );
}

function emptyCallback(){};

module.exports = serve;