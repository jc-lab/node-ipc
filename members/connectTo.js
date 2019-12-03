'use strict';

const Client = require('../dao/client.js');

function emptyCallback(){};

function connectTo(id,path,callback){
    if(typeof path == 'function'){
        callback=path;
        path=false;
    }

    if(!callback){
        callback=emptyCallback;
    }

    if(!id){
        this.log(
            'Service id required',
            'Requested service connection without specifying service id. Aborting connection attempt'
        );
        return;
    }

    if(!path){
        this.log(
            'Service path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + id',
            (this.config.socketRoot+this.config.appspace+id).data
        );
        path=this.config.socketRoot+this.config.appspace+id;
    }

    if(this.of[id]){
        if(!this.of[id].socket.destroyed){
            this.log(
                'Already Connected to',
                id,
                '- So executing success without connection'
            );
            callback();
            return;
        }
        this.of[id].socket.destroy();
    }

    this.of[id] = new Client(this.config,this.log);
    this.of[id].id = id;
    this.of[id].path = path;

    this.of[id].connect();

    callback(this);
}

modules.exports = connect;