'use strict';

const util = require('util');

function log(...args){
    const ipc=this;
    
    if(ipc.config.silent){
        return;
    }

    for(let i=0, count=args.length; i<count; i++){
        if(typeof args[i] != 'object'){
            continue;
        }

        args[i]=util.inspect(
            args[i],
            {
                depth:ipc.config.logDepth,
                colors:ipc.config.logInColor
            }
        );
    }

    ipc.config.logger(
        args.join(' ')
    );
}

module.exports = log;