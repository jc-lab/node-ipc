'use strict';

const IPC = require('./interfaces/IPC.js');

class IPCModule extends IPC{
    constructor(){
        super();
    }

    // refrence to IPC object 
    // incase you want to extend it yourself 
    static get IPC(){
        return IPC;
    }
}

module.exports=new IPCModule;
