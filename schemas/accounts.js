/**
 * Created by Paulius on 11/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    accountId: String,
    used: {type: Boolean, default: false},
    active: {type: Boolean, default: false},
    server: {type: String, default: ''},
    names: Array,
    passwords: Array
})

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;
