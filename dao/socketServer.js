'use strict';

//modules
const EventParser = require('../entities/EventParser.js'),
    Events = require('event-pubsub');

//members
const broadcast=require('./members/server/broadcast.js'),
    emit=require('./members/server/emit.js'),
    gotData=require('./members/server/#gotData.js'),
    onStart=require('./members/server/onStart.js'),
    serverClosed=require('./members/server/serverClosed.js'),
    serverCreated=require('./members/server/#clientConnected.js'),
    socketClosed=require('./members/server/#socketClosed.js'),
    start=require('./members/server/start.js'),
    startServer=require('./members/server/#startServer.js'),
    startTLSServer=require('./members/server/#startTLSServer.js'),
    stop=require('./members/server/stop.js'),
    UDPWrite=require('./members/server/#UDPWrite.js');


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

    //private fields

    #gotData=gotData;
    #serverCreated=serverCreated;
    #socketClosed=socketClosed;
    
    #startServer=startServer.bind(this);
    
    #startTLSServer=startTLSServer;
    #UDPWrite=UDPWrite;

    // begin hack
    //
    // Allow reading of private fields in externalized code, 
    // not out of class code, like just moved out of the brackets for
    // readability
    // Filed Bug here : https://bugs.chromium.org/p/chromium/issues/detail?id=1031333 

    get gotData(){
        return this.#gotData;
    }
    get socketClosed(){
        return this.#socketClosed;
    }
    get startServer(){
        return this.#startServer;
    }
    get startTLSServer(){
        return this.#startTLSServer;
    }
    get UDPWrite(){
        return this.#UDPWrite;
    }

    // end hack

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
