'use strict';

const fs = require('fs');

function start(){
    const ipcServer=this;

    if(!ipcServer.path){
        ipcServer.log('Socket Server Path not specified, refusing to start');
        return;
    }

    fs.unlink(
        ipcServer.path,
        ipcServer.startServer
    );
    
}

module.exports = start;