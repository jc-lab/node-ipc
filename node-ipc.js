'use strict';

const IPC = require('./interfaces/IPC.js');

class IPCModule extends IPC{
    IPC = IPC;
}

module.exports=new IPCModule;
