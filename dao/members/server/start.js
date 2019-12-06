'use strict';

const fs = require('fs');

function start(){
    if(!this.path){
        this.log('Socket Server Path not specified, refusing to start');
        return;
    }

    fs.unlink(
        this.path,
        this.startServer.bind(this)
    );
    
}

module.exports = start;