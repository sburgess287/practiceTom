const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const kittySchema = mongoose.Schema({
  name: String
})

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = { Kitten }
