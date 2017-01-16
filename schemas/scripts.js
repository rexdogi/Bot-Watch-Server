/**
 * Created by Paulius on 11/22/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scriptSchema = new Schema({
    name: {type: String, default: ''}
})

var Script = mongoose.model('Script', scriptSchema);

module.exports = Script;