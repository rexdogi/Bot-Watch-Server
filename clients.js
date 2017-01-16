/**
 * Created by Paulius on 11/12/2016.
 */
module.exports.arr = [];

module.exports.push2arr = function(val, socket){
    var exists = false;
    if(module.exports.arr.length != 0) {
        for (var i = 0; i < module.exports.arr.length; i++) {
            if (module.exports.arr[i].ip == val.ip) exists = true;
        }
    }
    if(!exists) {
        module.exports.arr.push(val);
        console.log("joining to room: " + socket.request.connection.remoteAddress.split('.').join(''))
    }
};