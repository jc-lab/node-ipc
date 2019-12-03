'use strict';

const Defaults = require('../entities/Defaults.js'),
    require("../members/serve.js"),
    require("../members/connectTo.js.js"),
    require("../members/connectToNet.js.js"),
    require("../members/.js.js"),
    require("../members/.js.js"),
    require("../members/.js.js");

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