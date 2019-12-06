'use-strict';

function socketClosed(socket){
    this.emit(
        'close',
        this
    );
}

module.exports=socketClosed;