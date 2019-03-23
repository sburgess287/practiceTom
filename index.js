'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const app = express();

const { Kitten } = require('./models');

// GET endpoint
app.get('/kittens', function(req, res){
  // res.send('Hello world')
  const array = ['Hello world']
  res.json(array);
})

// POST endpoint
app.post('/kittens', function(req, res){
  // verify correct required field
  // or send error
  
 

  Kitten.create({
    name: req.body.name
  })
  .then(cat => res.status(201).json({ name: req.body.name}
  ))

})

mongoose.connect('mongodb://localhost/test')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('listening and connected to mongoose')
});

// app.listen(8080, function(){
//   console.log('listening')
// })


// TODO
// connect to mongoose collection w/schema DONE
// error handler middleware : response in postman needs to be friendly
// wire up router 
// Post endpoint (to add to database) 
