const mongoose = require('mongoose');

const CharSchema = mongoose.Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Chars', CharSchema);