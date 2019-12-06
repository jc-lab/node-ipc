'use strict';

//modules
const EventParser = require('../entities/EventParser.js'),
    Queue = require('js-queue'),
    Events = require('event-pubsub');


//members
const send = require('./members/client/send.js'),
    syncSend = require('./members/client/#syncEmit.js'), 
    connect = require('./members/client/connect.js');

class Client extends Events{
    Client  = Client;
    queue   = new Queue;
    connect = connect;
    send    = send;
    explicitlyDisconnected = false;
    retriesRemaining = 0

    //private fields

    #syncSend = syncSend; 

    // begin hack
    //
    // Allow reading of private fields in externalized code, 
    // not out of class code, like just moved out of the brackets for
    // readability
    // Filed Bug here : https://bugs.chromium.org/p/chromium/issues/detail?id=1031333 

    get syncSend(){
        return this.#syncSend;
    }

    // end hack

    constructor(config,log){
        super();

        this.config=config;
        this.log=log;
        this.eventParser=new EventParser(this.config);

        if(!config.maxRetries){
           return;
        }

        this.retriesRemaining = config.maxRetries||0;
    }
}

module.exports=Client;
