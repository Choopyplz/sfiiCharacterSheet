const mongoose = require('mongoose');

const CharSchema = mongoose.Schema({
    name: String,
    dateOfBirth: String,
    height: String,
    weight: String,
    bloodType: String,
    nationality: String,
    fightingStyle: String,
    alignment: String
});

module.exports = mongoose.model('Chars', CharSchema);