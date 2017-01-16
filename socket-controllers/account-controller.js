/**
 * Created by Paulius on 11/10/2016.
 */
var accountCtrl = require('../controllers/creationController')

module.exports = function (socket, io) {

    socket.on('account', function () {
        console.log('Account client has connected')
        socket.join('account')
    })

    socket.on('createaccounts', function (msg) {
        accountCtrl.createId(msg)
        io.to("account").emit('start', msg)
    })
}