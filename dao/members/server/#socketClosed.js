'use-strict';

function socketClosed(socket){
    this.emit(
        'close',
        socket
    );
}

module.exports=socketClosed;