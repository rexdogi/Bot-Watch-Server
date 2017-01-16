/**
 * Created by Paulius on 11/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activeAccountSchema = new Schema({
    name: {type: String},
    banned: {type: Boolean, default: false },
    started: {type: Date, default: new Date()},
    logsCut: {type: Number, default: 0}
})

var ActiveAccounts = mongoose.model('ActiveAccounts', activeAccountSchema);

module.exports = ActiveAccounts