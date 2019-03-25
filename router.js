var express = require('express');
var router = express.Router();

// Declare the Kitten schema and require models file
const { Kitten } = require('./models');

// use the router
router.get('/', function(req, res){
  Kitten.find()
    // .then(kittens => {
    //   res.json(kittens)
    // })
  .then(kittens => res.json(kittens.map(kitten => {
    return {
      id: kitten._id,
      name: kitten.name
    }
  })))
  .catch(err => res.status(500).json({ error: 'something went wrong' }))

})

router.post('/', express.json(), function(req, res){
  // this is showing kitten undefined
  Kitten.create({
    name: req.body.name
  })
  .then(cat => res.status(201).json({ name: cat.name, id: cat._id }
  ))
  .catch(err => res.status(500).json({ error: 'something went wrong'}))


})

// Export the router
module.exports = { router }