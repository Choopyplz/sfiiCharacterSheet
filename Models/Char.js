const mongoose = require('mongoose');

const CharSchema = mongoose.Schema({
    name: String,
    date_of_birth: String,
    height: String,
    weight: String,
    blood_type: String,
    nationality: String,
    fighting_style: String,
    alignment: String
});

module.exports = mongoose.model('Char', CharSchema);