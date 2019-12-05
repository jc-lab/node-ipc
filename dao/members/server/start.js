'use strict';

const fs = require('fs');

function start(){
    if(!this.path){
        this.log('Socket Server Path not specified, refusing to start');
        return;
    }

    console.log(this);

    fs.unlink(
        this.path,
        this.startServer
    );
    
}

module.exports = start;