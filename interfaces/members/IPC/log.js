'use strict';

const util = require('util');

function log(...args){
    if(this.config.silent){
        return;
    }

    for(let i=0, count=args.length; i<count; i++){
        if(typeof args[i] != 'object'){
            continue;
        }

        args[i]=util.inspect(
            args[i],
            {
                depth:this.config.logDepth,
                colors:this.config.logInColor
            }
        );
    }

    this.config.logger(
        args.join(' ')
    );
}

module.exports = log;