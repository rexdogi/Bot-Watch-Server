var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')
const routes = require('./routes')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bot');
var cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var clients = require('./clients').arr
var botClients = []

app.use('/', routes)

var botController = require('./socket-controllers/bot-controller')
var accountController = require('./socket-controllers/account-controller')
var webController = require('./socket-controllers/web-controller')

io.sockets.on('connection', function (socket) {

    botController(socket, io)
    accountController(socket, io)
    webController(socket, io)

    socket.on('disconnect', function () {
        console.log("disconnect")
        var i = clients.indexOf({ip: socket.request.connection.remoteAddress});
        if(i != -1) {
            console.log("disconnected bot client")
            clients.splice(clients.indexOf({ip: socket.request.connection.remoteAddress}), 1)
        }
    });
});

app.get('/api/controller', function (req, res) {
    var clients = require('./clients').arr
    var data = []
    if(clients.length != 0) {
        for (var i = 0; i < clients.length; i++) {
            data.push(clients[i])
        }
    }
    res.json(data)
})


http.listen(3001, function () {
    console.log('listening on *:3000');
});

module.exports = app