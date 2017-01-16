/**
 * Created by Paulius on 11/17/2016.
 */
var ActiveAccount = require('../schemas/currentAccount')

exports.setActiveAccount = function (name, server) {
    ActiveAccount.find({server: server}, function (err, res) {
        console.log(res)
        if(err) console.log(err)
        if(res.length == 0) {
            console.log(true)
            var acc = new ActiveAccount();
            acc.name = name;
            acc.server = server;
            acc.save();
        } else {
            ActiveAccount.update({server: server}, {name: name}, function (err, result) {
                if(err) console.log(err)
            })
        }
    })
}

exports.setBanned = function (name) {
    ActiveAccount.update({name: name}, {banned: true}, function (err, result) {
        if(err) console.log(err)
    })
}

exports.getActiveAccount = function (req, res) {
    var id = req.params.id
    console.log("active account id:" + id)
    ActiveAccount.find({server: id}, function (err, result) {
        if(err) console.log(err)
        res.json(result)
    })
}

exports.getAllAccounts = function (req, res) {
    ActiveAccount.find(function (err, accounts) {
        if(err) console.log(err)
        res.json(accounts)
    })
}
