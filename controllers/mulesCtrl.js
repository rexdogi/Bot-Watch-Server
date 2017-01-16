/**
 * Created by Paulius on 11/15/2016.
 */
var Mule = require('../schemas/mules')

exports.addMule = function (name) {
    console.log(name)
    var mule = new Mule();
    mule.name = name;
    mule.save();
}

exports.getMules = function (req, res) {
    Mule.find(function (err, mules) {
        if(err) console.log(err)
        res.json(mules)
    })
}