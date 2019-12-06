'use-strict';

function serverError(err,socket){
    this.log('server error',err);

    this.emit(
        'error',
        {err,socket}
    );
}

module.exports=serverError;