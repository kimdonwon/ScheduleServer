var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    _id: String,
    date: String,
    schedule: String
});

module.exports = mongoose.model('data', dataSchema);
