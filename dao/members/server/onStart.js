'use-strict';

function onStart(socket){
    this.trigger(
        'start',
        socket
    );
}

module.export=onStart;