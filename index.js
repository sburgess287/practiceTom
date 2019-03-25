'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const morgan = require('morgan');

const app = express();

const { Kitten } = require('./models');
const { DATABASE_URL } = require('./config')
const { router: kittenRouter } = require('./router')

// Added morgan logging to see requests in console
app.use(morgan('common'));


// Use the router to access the endpoints
app.use('/kittens', kittenRouter);



// // GET endpoint
// app.get('/kittens', function(req, res){
//   // res.send('Hello world')
//   // const array = ['Hello world']
//   // res.json(array);


//   Kitten.find()
//     // .then(kittens => {
//     //   res.json(kittens)
//     // })
//   .then(kittens => res.json(kittens.map(kitten => {
//     return {
//       id: kitten._id,
//       name: kitten.name
//     }
//   })))
//   .catch(err => res.status(500).json({ error: 'something went wrong' }))

// })

// // POST endpoint
// app.post('/kittens', express.json(), function(req, res){
//   // verify correct required field
//   // or send error
  
//   // this is showing kitten undefined
//   Kitten.create({
//     name: req.body.name
//   })
//   .then(cat => res.status(201).json({ name: cat.name, id: cat._id }
//   ))
//   .catch(err => res.status(500).json({ error: 'something went wrong'}))

// })

// added db url in .env file, required in the config. useful for testing
mongoose.connect(DATABASE_URL); //returns promise

// make sure db is finished connecting. then listen
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('listening and connected to mongoose') // I see this in logs!
});

// Be sure to put all logic before app.listen
// Error handler: https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is borked!')
})


app.listen(8080, function(){
  console.log('listening')
})


// TODO
// connect to mongoose collection w/schema DONE

// error handler middleware : response in postman needs to be friendly DONE

// wire up router (endpoints not working yet, so not wired up yet) DONE
// docs for router: https://expressjs.com/en/guide/routing.html

// Post endpoint (to add to database) started; but it is not working DONE
