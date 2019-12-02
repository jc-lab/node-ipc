/*global describe, expect, it*/
'use strict';

const ipc = require('../../../../node-ipc');
const os = require('os').platform();

describe(
    'Test Cases for server: ',
    function testDescribe(){
        var windows_delay = 0;

        if(os === "win32") {
            windows_delay = 10000;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        }

        // Unix server verification //
        it(
            'Verify unix server detects only 1 client out of 2 clients and receives message.',
            function testIt(done){

                ipc.config.id ='testWorld';
                ipc.config.retry = 1000;
                ipc.config.silent=false;

                let clientCounter=0;
                ipc.config.maxConnections=1;

                ipc.serve(
                    '/tmp/app.testWorld',
                    function serverStarted(){
                        ipc.server.on(
                            'connect',
                            function connected(){
                                clientCounter++;
                            }
                        );
                    }
                );

                setTimeout(
                     function clientCountDelay(){
                         expect(clientCounter).toBe(ipc.config.maxConnections);
                         ipc.server.stop();
                         done();
                     },
                     ipc.config.retry*2
                );

                ipc.server.start();
            }
        );
    }
);
