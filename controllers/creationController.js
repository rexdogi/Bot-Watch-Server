/**
 * Created by Paulius on 11/11/2016.
 */
var Account = require('../schemas/accounts')

exports.createId = function (name) {
    var acc = new Account()
    acc.accountId = name.emailName
    //console.log("adding account: " + emailName)
    acc.save(function (err, usr) {
        if(err) console.log(err)
        console.log(usr)
    })
}

exports.addName = function (email) {
    console.log(email)
    var id = email.split(/[0-9]+/)
    console.log(id[0])
    Account.update(
        {accountId: id[0]},
        {$push: {names: email}}, function (err, res) {
            if (err) console.log(err)
            console.log(res)
        })
}

exports.getAccounts = function (req, res) {
    Account.find({used: false}, function (err, acc) {
        if(err) console.log(err)
        else res.json(acc)
    })
}

exports.removeAccount = function (req, res) {
    var acc = req.params.id
    Account.remove({accountId: acc}, function (err, result) {
        if(err) console.log(err)
        res.status(200)
    })
}

exports.removeAccountByName = function (name) {
    console.log(name)
    Account.remove({accountId: name}, function (err, result) {
        if(err) console.log(err)
        //console.log(result)
    })
}

exports.removeAccountBySocket = function (name) {
    Account.remove({accountId: name}, function (err, result) {
        if(err) console.log(err)
    })
}

exports.markUsed = function (id) {
    console.log(id)
    Account.update({accountId: id},{used: true}, function (err, res) {
        if(err) console.log(err)
        console.log(res)
    })
}

exports.setServer = function (name, id) {
    console.log("setting server for : " + name)
    Account.update({accountId: name}, {server: id}, function (err, res) {
        if(err) console.log(err)
        console.log("server set")
    })
}

exports.getByServer = function (req, res) {
    console.log(req.params.id)
    Account.find({server: req.params.id}, function (err, acc) {
        if(err) console.log(err)
        console.log(acc)
        res.json(acc)
    })
}

exports.addManually = function (data) {
    var acc = new Account()
    acc.accountId = data.name[0];
    for(var i = 0; i <= data.name.length; i++) {
        acc.names.push(data.name[i])
        acc.passwords.push(data.password[i])
        console.log(data.name[i])
    }
    acc.save()
}

exports.popUsed = function (name, amount) {
    console.log("#########################")
    console.log(name)
    console.log(amount)
    for(var i = 0; i < amount; i++) {
        console.log("fired")
        Account.update({accountId: name}, {$pop: {names: -1}}, function(err, res) {
            if(err) console.log(err)
            console.log(res)
        })
    }
}
