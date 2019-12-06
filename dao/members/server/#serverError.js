'use-strict';

function serverError(err,socket){
    const ipcServer=this;

    ipcServer.log('server error',err);

    ipcServer.emit(
        'error',
        {err,socket}
    );
}

module.exports=serverError;