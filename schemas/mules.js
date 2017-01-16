/**
 * Created by Paulius on 11/15/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var muleSchema = new Schema({
    name: {type: String, default: ''}
})

var Mule = mongoose.model('Mule', muleSchema);

module.exports = Mule;