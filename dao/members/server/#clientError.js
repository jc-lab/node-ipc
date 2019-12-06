'use-strict';

function clientError(err){
    this.log('server error',err);

    this.emit(
        'error',
        err
    );
}

module.exports=clientError;