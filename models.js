const mongoose = require('mongoose');

const kittySchema = mongoose.Schema({
  name: String
})

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = { Kitten }
