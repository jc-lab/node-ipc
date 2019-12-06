'use-strict';

function onStart(){
    const ipcServer=this;
    
    ipcServer.emit(
        'start'
    );
}

module.exports=onStart;