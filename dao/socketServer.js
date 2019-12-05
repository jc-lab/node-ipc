'use strict';

//modules
const EventParser = require('../entities/EventParser.js'),
    Events = require('event-pubsub');

//members
const broadcast=require('./members/server/broadcast.js'),
    emit=require('./members/server/emit.js'),
    gotData=require('./members/server/gotData.js'),
    onStart=require('./members/server/onStart.js'),
    serverClosed=require('./members/server/serverClosed.js'),
    serverCreated=require('./members/server/serverCreated.js'),
    socketClosed=require('./members/server/socketClosed.js'),
    start=require('./members/server/start.js'),
    startServer=require('./members/server/startServer.js'),
    startTLSServer=require('./members/server/startTLSServer.js'),
    stop=require('./members/server/stop.js'),
    UDPWrite=require('./members/server/UDPWrite.js');


class Server extends Events{
    udp4      = false;
    udp6      = false;
    server    = false;
    sockets   = [];
    emit      = emit;
    broadcast = broadcast;
    
    start=start;
    onStart=onStart;
    stop=stop;
    serverClosed=serverClosed;

    #serverCreated=serverCreated;
    #socketClosed=socketClosed;
    #startServer=startServer;
    #startTLSServer=startTLSServer;
    #UDPWrite=UDPWrite;
    #gotData=gotData;

    constructor(path,config,log,port){
        super();
        
        this.eventParser=new EventParser(this.config);

        this.config = config;
        this.path = path;
        this.port = port;
        this.log  = log;
        

        this.on(
            'close',
            this.serverClosed
        );
    }
}

module.exports=Server;
