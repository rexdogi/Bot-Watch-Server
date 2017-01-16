/**
 * Created by Paulius on 11/10/2016.
 */
var accountCtrl = require('../controllers/creationController')
var activeAccountCtrl = require('../controllers/activeAccountCtrl')
var scriptsCtrl = require('../controllers/scriptCtrl')

module.exports = function (socket, io) {
    socket.on('web', function () {
        console.log('Web client has connected')
        socket.join("web")
    })

    socket.on('account created', function (msg) {
        accountCtrl.addName(msg)
        io.to("web").emit("account created", msg)
    })

    socket.on('add accounts', function (account) {
        console.log(account.name[0].replace(/[0-9]/g, ''))
        accountCtrl.markUsed(account.name[0])
        accountCtrl.setServer(account.name[0], account.id)
        console.log("adding accounts for id: " + account.id)
        socket.to(account.id).emit('add accounts', {name: account.name, password: account.password})
    })

    socket.on('setproxy', function (data) {
        console.log(data.ip)
        socket.to(data.id).emit('proxy', {ip: data.ip})

    })

    socket.on('addmanually', function (data) {
        accountCtrl.addManually(data)
    })

    socket.on('delete', function (data) {
        accountCtrl.removeAccountByName(data.name[0])
    })

    socket.on('start', function (data) {
        console.log(data.ip)
        console.log(data.name)
        console.log(data.mule)
        var name = data.name[0]
        socket.to(data.ip).emit('startwithparams', {
            name: data.name,
            mule: data.mule,
            amount: data.amount,
            script: data.script
        })
        socket.to("mule").emit('start', {name: data.mule})
/*        activeAccountCtrl.setActiveAccount(data.name, data.ip)
        accountCtrl.removeAccountBySocket(data.name)*/
        accountCtrl.popUsed(name, data.amount)
    })

    socket.on('startnow', function (data) {
        socket.to("mule").emit("startnow", {name: data.mule})
    })

    socket.on('addScript', function (data) {
        scriptsCtrl.addScript(data.name)
    })
}
