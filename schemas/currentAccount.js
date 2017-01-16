/**
 * Created by Paulius on 11/15/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activeAccountSchema = new Schema({
    name: {type: String, default: ''},
    server: {type: String, default: ''},
    banned: {type: Boolean, default: false}
})

var ActiveAccount = mongoose.model('ActiveAccount', activeAccountSchema);

module.exports = ActiveAccount;
