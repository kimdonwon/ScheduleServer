var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cwSchema = new Schema({
    id : String,
    title: String,
    write: String,
    pass: String,
    type: String,
    sub: String,
    pro: String
});

module.exports = mongoose.model('cw', cwSchema);
