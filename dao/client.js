'use strict';

//modules
const EventParser = require('../entities/EventParser.js'),
    Queue = require('js-queue'),
    Events = require('event-pubsub');


//members
const emit = require('./members/client/emit.js'),
    connect = require('./members/client/connect.js');


let eventParser = new EventParser();

class Client extends Events{
    Client  = Client;
    queue   = new Queue;
    socket  = false;
    connect = connect;
    emit    = emit;
    explicitlyDisconnected = false;
    retriesRemaining = 0

    constructor(config,log){
        super();

        this.config=config;
        this.log=log;
        eventParser=new EventParser(this.config);
        this.eventParser=eventParser;

        if(!config.maxRetries){
           return;
        }

        this.retriesRemaining = config.maxRetries||0;
    }
}

module.exports=Client;
