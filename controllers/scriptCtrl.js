/**
 * Created by Paulius on 11/22/2016.
 */
var Script = require('../schemas/scripts')

exports.addScript = function (data) {
    var script = new Script()
    script.name = data
    script.save()
}

exports.getScripts = function (req, res) {
    Script.find(function (err, scripts) {
        if(err) console.log(err)
        res.json(scripts)
    })
}