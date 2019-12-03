'use strict';

const Defaults = require('../entities/Defaults.js'),
    connectTo = require("../members/connectTo.js"),
    connectToNet = require("../members/connectToNet.js"),
    disconnect = require("../members/disconnect.js"),
    serve = require("../members/serve.js"),
    serveNet = require("../members/serveNet.js"),
    log = require("../members/log.js");

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