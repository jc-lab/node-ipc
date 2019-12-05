'use strict';

const Defaults = require('../entities/Defaults.js'),
    connectTo = require("./members/IPC/connectTo.js"),
    connectToNet = require("./members/IPC/connectToNet.js"),
    disconnect = require("./members/IPC/disconnect.js"),
    serve = require("./members/IPC/serve.js"),
    serveNet = require("./members/IPC/serveNet.js"),
    log = require("./members/IPC/log.js");

class IPC{
    of={};

    config=new Defaults;
    server=false;
    connectTo=connectTo;
    connectToNet=connectToNet;
    
    disconnect=disconnect;
    serve=serve;
    
    serveNet=serveNet;
    
    log = log;
}

module.exports = IPC;