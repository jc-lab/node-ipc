'use strict';

//modules
const EventParser = require('../entities/EventParser.js'),
    Queue = require('js-queue'),
    Events = require('event-pubsub');


//members
const emit = require('./members/client/emit.js'),
    syncEmit = require('./members/client/#syncEmit.js'), 
    connect = require('./members/client/connect.js');

class Client extends Events{
    Client  = Client;
    queue   = new Queue;
    socket  = false;
    connect = connect;
    emit    = emit;
    explicitlyDisconnected = false;
    retriesRemaining = 0

    //private fields

    #syncEmit = syncEmit; 

    // begin hack
    //
    // Allow reading of private fields in externalized code, 
    // not out of class code, like just moved out of the brackets for
    // readability
    // Filed Bug here : https://bugs.chromium.org/p/chromium/issues/detail?id=1031333 

    get syncEmit(){
        return this.#syncEmit;
    }

    // end hack

    constructor(config,log){
        super();

        this.config=config;
        this.log=log;
        this.eventParser=new EventParser(this.config);
        this.eventParser=eventParser;

        if(!config.maxRetries){
           return;
        }

        this.retriesRemaining = config.maxRetries||0;
    }
}

module.exports=Client;
