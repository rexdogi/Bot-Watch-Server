/**
 * Created by Paulius on 11/10/2016.
 */
var clients = require('../clients')
var mulesCtrl = require('../controllers/mulesCtrl')

module.exports = function (socket, io) {
    socket.on('controller', function () {
    console.log("Bot controller has connected")
        socket.join(socket.request.connection.remoteAddress.split('.').join(''))
        clients.push2arr({ip: socket.request.connection.remoteAddress}, socket)
       // socket.join('bot')
        io.to("web").emit('controller connected', socket.request.connection.remoteAddress)
    })

    socket.on('mule', function () {
        console.log("mule client connected")
        socket.join("mule")
    })

    socket.on("startmule", function (data) {
        console.log(data.name)
        io.to("mule").emit("start", {name: data.name})
    })

    socket.on("addmule", function (data) {
        mulesCtrl.addMule(data.name)
    })

    socket.on("banned", function () {
        io.to("mule").emit("banned")
    })

    socket.on("botinstance", function () {
        console.log("bot client has connected")
    })
}
