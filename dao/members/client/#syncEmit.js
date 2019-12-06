'use-strict';

function syncEmit(message){
    this.log('dispatching event to ', this.id, this.path, ' : ', message);
    this.socket.write(message);
}

module.exports=syncEmit;