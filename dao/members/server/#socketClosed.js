'use-strict';

function socketClosed(socket){
    this.publish(
        'close',
        socket
    );
}

module.exports=socketClosed;