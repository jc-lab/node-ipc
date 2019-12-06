'use-strict';

function stop(){
    const ipcServer=this;
    
    ipcServer.socket.close();
}

module.export=stop;