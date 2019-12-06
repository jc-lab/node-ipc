'use-strict';

function onStart(socket){
    this.trigger(
        'start',
        socket
    );
}

module.exports=onStart;