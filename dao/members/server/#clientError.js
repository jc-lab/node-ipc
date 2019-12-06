'use-strict';

function clientError(err,socket){
    const ipcServer=this;

    ipcServer.log('client error',err,socket);

    ipcServer.emit(
        'error',
        {err,socket}
    );
}

module.exports=clientError;