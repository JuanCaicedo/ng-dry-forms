var Mongoose = require('mongoose');

exports.ItemSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

exports.Item = function(db) {
    return db.model('item', exports.ItemSchema);
}