const ipc=require('../../../node-ipc');

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'world';
ipc.config.retry= 1500;
ipc.config.maxConnections=1;

ipc.serveNet(
    ()=>{

        console.log('SERVER STARTED!');

        ipc.server.on(
            'message',
            function(data,socket){
                ipc.log('got a message : ', data);
                ipc.server.send(
                    socket,
                    'message',
                    data+' world!'
                );
            }
        );
        
        ipc.server.on(
            'socket.disconnected',
            function(data){
                console.log('DISCONNECTED\n\n',arguments);
            }
        );
        
        ipc.server.on(
            'error',
            function(err){
                ipc.log('Got an ERROR!',err);
            }
        );
    }

);